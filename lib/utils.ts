import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { headers } from "next/headers"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 从请求头获取域名
 */
export async function getDomain(): Promise<string> {
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
  let domainName = domainWithoutPort.replace(/^www\./i, '')
  
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
  let domainName = domainWithoutPort.replace(/^www\./i, '')
  
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
