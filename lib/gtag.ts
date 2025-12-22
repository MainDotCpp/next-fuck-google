/**
 * Google Ads 转化跟踪工具
 * 用于上报 Google Ads 转化事件
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>,
    ) => void
    dataLayer?: any[]
  }
}

/**
 * 获取转化标签 ID
 * 优先使用传入的参数，否则从环境变量获取
 */
function getConversionLabels(conversionLabels?: string | string[]): string[] {
  if (conversionLabels) {
    return Array.isArray(conversionLabels) ? conversionLabels : [conversionLabels]
  }
  // 从环境变量获取，支持多个标签（用逗号分隔）
  // eslint-disable-next-line node/prefer-global/process
  const envLabels = typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_GA_CONVERSION_LABEL
  if (envLabels) {
    return envLabels.split(',').map(label => label.trim()).filter(Boolean)
  }
  return []
}

/**
 * 调用 Google Ads 转化跟踪
 * 支持同时跟踪多个转化标签
 *
 * @param conversionLabels 转化标签 ID（从 Google Ads 获取），可以是单个字符串或字符串数组
 *                         如果不提供则从环境变量 NEXT_PUBLIC_GA_CONVERSION_LABEL 获取（支持逗号分隔多个标签）
 * @param value 转化价值（可选）
 * @param currency 货币代码，默认为 'JPY'
 */
export function gtag_conversion(
  conversionLabels?: string | string[],
  value: number = 50,
  currency: string = 'USD',
) {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  const labels = getConversionLabels(conversionLabels)
  if (labels.length === 0) {
    return
  }

  // 为每个转化标签发送跟踪事件
  labels.forEach((label) => {
    window.gtag!('event', 'conversion', {
      send_to: label,
      value,
      currency,
    })
  })
}
