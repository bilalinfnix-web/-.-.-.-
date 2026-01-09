Enterimport { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { aAdsManager } from '../ads'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // تحميل A-Ads عند تحميل التطبيق
    aAdsManager.loadAllAds()
    
    // تأثيرات الواجهة
    const addRippleEffect = () => {
      document.addEventListener('click', function(e) {
        const target = e.target.closest('.ripple-effect')
        if (!target) return
        
        const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        const ripple = document.createElement('span')
        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'
        ripple.classList.add('ripple')
        
        target.appendChild(ripple)
        
        setTimeout(() => {
          ripple.remove()
        }, 1000)
      })
    }
    
    addRippleEffect()
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #3b82f6',
          },
        }}
      />
      
      {/* حاوية الإعلانات */}
      <div id="header-ad" className="fixed top-0 left-0 right-0 z-40 hidden md:block"></div>
      <div id="sidebar-ad" className="fixed right-4 top-1/4 z-30 hidden lg:block"></div>
      <div id="footer-ad" className="fixed bottom-0 left-0 right-0 z-40"></div>
    </>
  )
}

export default MyApp
