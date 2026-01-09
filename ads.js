// A-Ads Integration بدون استخدام ID
class AAdsManager {
  constructor() {
    this.loaded = false
  }

  // تحميل A-Ads تلقائياً
  loadAAds() {
    if (this.loaded || typeof window === 'undefined') return
    
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://ad.a-ads.com/عرض الإعلان هنا مباشرة'
    script.async = true
    
    // إعدادات الإعلان
    script.setAttribute('data-cfasync', 'false')
    
    document.head.appendChild(script)
    this.loaded = true
    
    console.log('A-Ads loaded successfully')
  }

  // عرض إعلان بانر
  showBanner(containerId, width = 728, height = 90) {
    if (typeof window === 'undefined') return
    
    const container = document.getElementById(containerId)
    if (!container) return
    
    // تنظيف المحتوى القديم
    container.innerHTML = ''
    
    // إنشاء iframe للإعلان (طريقة مباشرة)
    const iframe = document.createElement('iframe')
    iframe.width = width
    iframe.height = height
    iframe.frameBorder = '0'
    iframe.scrolling = 'no'
    iframe.style.border = 'none'
    iframe.style.overflow = 'hidden'
    
    // محتوى الإعلان المباشر
    const adContent = `
      <div style="width:${width}px;height:${height}px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:10px;display:flex;align-items:center;justify-content:center;color:white;font-family:Arial;">
        <div style="text-align:center;padding:20px;">
          <div style="font-size:18px;font-weight:bold;margin-bottom:10px;">🎮 موقع مكتبة الألعاب 🎮</div>
          <div style="font-size:14px;">ادعم الموقع بمشاهدة الإعلانات</div>
          <button onclick="window.open('https://games-library.com/support','_blank')" style="margin-top:10px;padding:8px 20px;background:#3b82f6;border:none;border-radius:5px;color:white;cursor:pointer;">
            اضغط لدعم الموقع
          </button>
        </div>
      </div>
    `
    
    // محاكاة الإعلان (لتطوير محلي)
    iframe.srcdoc = adContent
    container.appendChild(iframe)
    
    // في الإنتاج الحقيقي، استخدم:
    // iframe.src = 'https://ad.a-ads.com/رابط-إعلانك-هنا'
  }

  // عرض Smart Link
  showSmartLink(containerId) {
    if (typeof window === 'undefined') return
    
    const container = document.getElementById(containerId)
    if (!container) return
    
    container.innerHTML = `
      <div class="smart-link-container" style="max-width: 728px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); border-radius: 15px; padding: 25px; border: 2px solid #3b82f6; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);">
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 24px; font-weight: bold; color: #3b82f6; margin-bottom: 10px;">
              🔓 فتح المحتوى
            </div>
            <div style="color: #94a3b8; margin-bottom: 20px;">
              للحصول على المحتوى، يرجى دعم الموقع بمشاهدة الإعلان
            </div>
          </div>
          
          <div style="background: #0f172a; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
              <div style="color: #e2e8f0; font-weight: bold;">المحتوى المحمي</div>
              <div style="color: #fbbf24; font-weight: bold;">10 نقاط أو مشاهدة إعلان</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <button onclick="window.open('https://ad.a-ads.com/رابط-smart-link-هنا', '_blank')" 
                style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border: none; border-radius: 8px; padding: 15px; font-weight: bold; cursor: pointer; transition: all 0.3s;"
                onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 20px rgba(59, 130, 246, 0.4)';"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none';">
                👁️ مشاهدة إعلان
              </button>
              
              <button onclick="handlePointsPurchase()"
                style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; border-radius: 8px; padding: 15px; font-weight: bold; cursor: pointer; transition: all 0.3s;"
                onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 20px rgba(16, 185, 129, 0.4)';"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none';">
                ⭐ شراء بـ 10 نقاط
              </button>
            </div>
            
            <div style="margin-top: 15px; text-align: center; color: #94a3b8; font-size: 14px;">
              <div>💡 يمكنك كسب نقاط مجانية عن طريق:</div>
              <div>1. دعوة الأصدقاء (20 نقطة لكل صديق)</div>
              <div>2. إكمال المهام (10-20 نقطة لكل مهمة)</div>
            </div>
          </div>
          
          <div style="text-align: center; color: #64748b; font-size: 12px;">
            بالإعلانات تدعم استمرار الموقع وتطويره 🚀
          </div>
        </div>
      </div>
    `
  }

  // تحميل إعلانات متعددة
  loadAllAds() {
    this.loadAAds()
    
    // تحميل الإعلانات بعد تأخير بسيط
    setTimeout(() => {
      this.showBanner('header-ad', 728, 90)
      this.showBanner('sidebar-ad', 300, 250)
      this.showBanner('footer-ad', 728, 90)
    }, 1000)
  }
}

// إنشاء نسخة عامة
export const aAdsManager = new AAdsManager()
