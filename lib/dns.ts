import { promisify } from 'node:util'
import * as dns from 'node:dns'

const reverse = promisify(dns.reverse)

/**
 * DNS反查结果
 */
export interface DnsReverseResult {
  /** 是否成功 */
  success: boolean
  /** 反查得到的域名列表 */
  hostnames: string[]
  /** 错误信息（如果失败） */
  error?: string
  /** 响应时间（毫秒） */
  responseTime: number
}

/**
 * 对IP地址进行DNS反查
 * @param ip IP地址
 * @returns DNS反查结果
 */
export async function reverseDnsLookup(ip: string): Promise<DnsReverseResult> {
  const startTime = Date.now()

  // 验证IP地址格式
  if (!isValidIp(ip)) {
    return {
      success: false,
      hostnames: [],
      error: 'Invalid IP address format',
      responseTime: Date.now() - startTime,
    }
  }

  try {
    // 执行DNS反查
    const hostnames = await reverse(ip)
    const responseTime = Date.now() - startTime

    return {
      success: true,
      hostnames: Array.isArray(hostnames) ? hostnames : [hostnames],
      responseTime,
    }
  }
  catch (error) {
    const responseTime = Date.now() - startTime
    const errorMessage = error instanceof Error ? error.message : String(error)

    // DNS反查失败时返回空结果（不拦截，因为可能是DNS服务器问题）
    return {
      success: false,
      hostnames: [],
      error: errorMessage,
      responseTime,
    }
  }
}

/**
 * 验证IP地址格式
 * @param ip IP地址
 * @returns 是否为有效的IP地址
 */
function isValidIp(ip: string): boolean {
  // IPv4格式验证
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/
  if (ipv4Pattern.test(ip)) {
    const parts = ip.split('.')
    return parts.every(part => {
      const num = parseInt(part, 10)
      return num >= 0 && num <= 255
    })
  }

  // IPv6格式验证（简化版）
  const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::1$|^::$/
  if (ipv6Pattern.test(ip)) {
    return true
  }

  // 压缩格式IPv6（如 ::1）
  if (ip.includes('::')) {
    return true
  }

  return false
}

