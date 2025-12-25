// Google tag (gtag.js)
(function () {
  'use strict'

  window.GG_ID = 'AW-17552735634'
  window.GG_CONVERSION_ID = 'WbvKCMmosdYbEJL75bFB'
  // 初始化 dataLayer 和 gtag 函数（立即执行，不等待脚本加载）
  window.dataLayer = window.dataLayer || []

  function gtag() { dataLayer.push(arguments) }
  window.gtag = gtag

  // 立即定义 gtag_report_conversion 函数，确保立即可用
  // 注意：使用更安全的重定向方式，避免被 Google 标记为可疑行为
  window.gtag_report_conversion = function (url) {
    let callback = function () {
      if (typeof (url) != 'undefined') {
        // 使用更安全的方式打开链接，而不是 window.location（可能被 Google 认为是可疑重定向）
        // 创建临时链接元素，模拟用户点击，避免直接使用 window.location
        let link = document.createElement('a')
        link.href = url
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        // 延迟移除，确保点击事件完成
        setTimeout(() => {
          document.body.removeChild(link)
        }, 100)
      }
    }
    // 确保 gtag 函数已定义
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: `${window.GG_ID}/${window.GG_CONVERSION_ID}`,
        event_callback: callback,
      })
    }
    else {
      console.warn('gtag 函数未初始化')
    }
    return false
  }

  // 加载 Google Tag Manager 脚本
  let script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${window.GG_ID}`

  // 脚本加载完成后初始化配置
  script.onload = function () {
    window.gtag('js', new Date())
    window.gtag('config', window.GG_ID)
  }

  document.head.appendChild(script)

  // 为带有 data-track-conversion 属性的链接添加事件监听器
  // 这样可以避免在 HTML 中使用 onclick 和 javascript:void(0)，提高安全性
  function setupConversionTracking() {
    // 等待 DOM 加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupConversionTracking)
      return
    }

    // 查找所有带有 data-track-conversion 属性的链接
    let conversionLinks = document.querySelectorAll('a[data-track-conversion="true"]')

    conversionLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        // 阻止默认行为，使用 gtag_report_conversion 处理
        e.preventDefault()

        // 获取链接的 href
        let url = this.getAttribute('href')

        // 如果 gtag_report_conversion 函数存在，调用它
        if (typeof window.gtag_report_conversion === 'function' && url) {
          window.gtag_report_conversion(url)
        }
        else {
          // 如果函数不存在，直接打开链接（降级处理）
          window.open(url, '_blank', 'noopener,noreferrer')
        }
      })
    })
  }

  // 立即设置（如果 DOM 已加载）或等待 DOM 加载
  setupConversionTracking()
})()
