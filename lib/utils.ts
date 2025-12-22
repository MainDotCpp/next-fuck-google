import type { ClassValue } from 'clsx'
import type React from 'react'
import type { ButtonLinks } from '@/config/route-mapping'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { getButtonLinksByAlias, getButtonLinksByTarget, GLOBAL_CONVERSION_LABELS } from '@/config/route-mapping'
import { gtag_conversion } from '@/lib/gtag'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 从请求头获取域名
 */
export async function getDomain(): Promise<string> {
  const { headers } = await import('next/headers')
  const headersList = await headers()
  // 优先使用 middleware 设置的 x-host，然后是标准的 host header
  const host = headersList.get('x-host') || headersList.get('host') || headersList.get('x-forwarded-host') || 'localhost'
  return host
}

/**
 * 从域名生成网站名
 * 例如：example.com -> Example
 *      www.example.com -> Example
 *      subdomain.example.com -> Subdomain Example
 */
export async function getSiteName(): Promise<string> {
  const domain = await getDomain()

  // 移除端口号
  const domainWithoutPort = domain.split(':')[0]

  // 移除 www. 前缀
  const domainName = domainWithoutPort.replace(/^www\./i, '')

  // 如果是 localhost，返回默认值
  if (domainName === 'localhost' || domainName.startsWith('127.0.0.1')) {
    return 'HostCloud'
  }

  // 提取主域名部分（去掉顶级域名）
  const parts = domainName.split('.')
  if (parts.length >= 2) {
    // 取倒数第二个部分作为主域名
    const mainDomain = parts[parts.length - 2]
    // 首字母大写，其余小写
    return mainDomain.charAt(0).toUpperCase() + mainDomain.slice(1).toLowerCase()
  }

  // 如果无法解析，返回域名本身（首字母大写）
  return domainName.charAt(0).toUpperCase() + domainName.slice(1).toLowerCase()
}

/**
 * 客户端版本：从 window.location 获取域名
 */
export function getDomainClient(): string {
  if (typeof window === 'undefined') {
    return 'localhost'
  }
  return window.location.hostname
}

/**
 * 客户端版本：从域名生成网站名
 */
export function getSiteNameClient(): string {
  const domain = getDomainClient()

  // 移除端口号
  const domainWithoutPort = domain.split(':')[0]

  // 移除 www. 前缀
  const domainName = domainWithoutPort.replace(/^www\./i, '')

  // 如果是 localhost，返回默认值
  if (domainName === 'localhost' || domainName.startsWith('127.0.0.1')) {
    return 'HostCloud'
  }

  // 提取主域名部分（去掉顶级域名）
  const parts = domainName.split('.')
  if (parts.length >= 2) {
    // 取倒数第二个部分作为主域名
    const mainDomain = parts[parts.length - 2]
    // 首字母大写，其余小写
    return mainDomain.charAt(0).toUpperCase() + mainDomain.slice(1).toLowerCase()
  }

  // 如果无法解析，返回域名本身（首字母大写）
  return domainName.charAt(0).toUpperCase() + domainName.slice(1).toLowerCase()
}

/**
 * 公共的按钮点击事件回调函数
 * 用于统一处理按钮点击事件，在新窗口打开链接并发送转化跟踪
 *
 * @param key 按钮链接的 key（如 'primary', 'youtube', 'line'），默认为 'primary'
 * @param target 打开方式，默认为 '_blank'（新窗口）
 * @returns React.MouseEventHandler<HTMLButtonElement>
 */
export function handleButtonClick(
  key: string = 'primary',
  target: string = '_blank',
): React.MouseEventHandler<HTMLButtonElement> {
  return (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // 从路由配置中获取按钮链接
    const buttonLinks = getButtonLinksByAlias()
    const url = buttonLinks?.[key as keyof ButtonLinks] || buttonLinks?.primary

    if (!url) {
      console.warn(`Button link not found for key: ${key}`)
      return
    }

    // 发送 Google Ads 转化跟踪（向全局配置的所有标签发送）
    if (GLOBAL_CONVERSION_LABELS.length > 0) {
      gtag_conversion(GLOBAL_CONVERSION_LABELS)
    }

    window.open(url, target)
  }
}

/**
 * 根据目标页面路径获取按钮链接配置
 * 这是一个客户端函数，用于在页面组件中获取配置的按钮链接
 * @param targetPath 目标页面路径（例如 '/JP/page1'）
 * @returns 按钮链接配置，如果不存在则返回 null
 */
export function getButtonLinks(targetPath: string): ButtonLinks | null {
  return getButtonLinksByTarget(targetPath)
}

/**
 * 获取按钮链接，如果配置不存在则返回默认值
 * @param targetPath 目标页面路径
 * @param linkType 链接类型（'primary' | 'youtube' | 'line' 或自定义 key）
 * @param defaultValue 默认值，如果配置中不存在该类型的链接
 * @returns 按钮链接地址
 */
export function getButtonLink(
  targetPath: string,
  linkType: keyof ButtonLinks = 'primary',
  defaultValue?: string,
): string | undefined {
  const buttonLinks = getButtonLinks(targetPath)
  if (!buttonLinks) {
    return defaultValue
  }
  return buttonLinks[linkType] || defaultValue
}
