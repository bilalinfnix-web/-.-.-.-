Enterimport { createClient } from '@supabase/supabase-js'

// إعدادات Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// إنشاء العميل
export const supabase = createClient(supabaseUrl, supabaseKey)

// جلب المستخدم الحالي
export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// تسجيل الدخول
export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

// تسجيل حساب جديد
export const registerUser = async (email, password, username, referralCode = null) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        points: 0,
        referral_code: generateReferralCode(),
        referred_by: referralCode
      }
    }
  })
  return { data, error }
}

// تسجيل الخروج
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// توليد كود دعوة
const generateReferralCode = () => {
  return Math.random().toString(36).substring(2, 10).toUpperCase()
}

// جلب المنشورات
export const getPosts = async (category = null, subcategory = null) => {
  let query = supabase.from('posts').select('*').order('created_at', { ascending: false })
  
  if (category) {
    query = query.eq('category', category)
  }
  
  if (subcategory) {
    query = query.eq('subcategory', subcategory)
  }
  
  const { data, error } = await query
  return { data, error }
}

// إضافة نقاط
export const addPoints = async (userId, points, type, description) => {
  const { data, error } = await supabase
    .from('points_transactions')
    .insert({
      user_id: userId,
      amount: points,
      type: type,
      description: description
    })
  
  if (!error) {
    // تحديث رصيد النقاط
    await supabase.rpc('increment_points', {
      user_id: userId,
      points: points
    })
  }
  
  return { data, error }
}

// تسجيل دعوة
export const addReferral = async (referrerId, referredId) => {
  const { data, error } = await supabase
    .from('referrals')
    .insert({
      referrer_id: referrerId,
      referred_id: referredId,
      points_awarded: 20
    })
  
  return { data, error }
}

// إضافة مهمة
export const addTask = async (taskData) => {
  const { data, error } = await supabase
    .from('tasks')
    .insert(taskData)
  
  return { data, error }
}

// تسجيل ضغطة إعلان
export const logAdClick = async (userId, postId, adType) => {
  const { data, error } = await supabase
    .from('ad_clicks')
    .insert({
      user_id: userId,
      post_id: postId,
      ad_type: adType,
      clicked_at: new Date().toISOString()
    })
  
  return { data, error }
}
