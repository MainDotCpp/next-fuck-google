import crypto from 'node:crypto'

/**
 * 过滤接口配置
 */
const API_ENDPOINT = 'https://api-visitor.fangyu.io/check/2375/1saw1A0vo0yY8k7rGo'
const FIXED_SIGN = 'ajrFpkoJc4FxjWpX7rj4y'

/**
 * CheckRequest 检查请求
 */
interface CheckRequest {
  userAgent: string
  visitUrl: string
  clientIp: string
  clientLanguage: string
  referer: string
  timestamp: string
  sign: string
}

/**
 * CheckRequestInput 检查请求输入（不包含 timestamp 和 sign）
 */
export type CheckRequestInput = Omit<CheckRequest, 'sign' | 'timestamp'>

/**
 * CheckResponse 检查响应
 */
interface CheckResponse {
  code: number
  message: string
  success: boolean
  data: {
    status: boolean // 是否放行：true=放行，false=拦截
  }
}

/**
 * API 检查结果
 */
export interface ApiCheckResult {
  allowed: boolean
  response?: CheckResponse
  error?: string
  responseTime: number
}

/**
 * 调用过滤接口
 * @param request 检查请求参数（不包含 timestamp 和 sign）
 * @returns API 检查结果
 */
export async function checkAccess(request: CheckRequestInput): Promise<ApiCheckResult> {
  const startTime = Date.now()

  try {
    // 生成时间戳
    const timestamp = Math.floor(Date.now() / 1000).toString()

    // 构建请求参数
    const requestParams: CheckRequest = {
      ...request,
      timestamp,
      sign: FIXED_SIGN,
    }

    // 调用 API
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestParams),
      cache: 'no-store', // 禁用缓存，确保每次请求都调用接口
    })

    const responseTime = Date.now() - startTime

    if (!response.ok) {
      // 接口错误时默认返回 false（显示 404）
      const errorMessage = `Filter API call failed: ${response.status} ${response.statusText}`
      console.error('[API Error]', JSON.stringify({
        endpoint: API_ENDPOINT,
        status: response.status,
        statusText: response.statusText,
        error: errorMessage,
        responseTime: `${responseTime}ms`,
      }, null, 2))
      return {
        allowed: false,
        error: errorMessage,
        responseTime,
      }
    }

    const data: CheckResponse = await response.json()

    // 打印第三方 API 响应
    console.log('[API Response]', JSON.stringify({
      endpoint: API_ENDPOINT,
      status: response.status,
      response: data,
      responseTime: `${responseTime}ms`,
    }, null, 2))

    // 根据接口返回格式判断是否放行
    const allowed = data.success && data.data?.status

    return {
      allowed,
      response: data,
      responseTime,
    }
  }
  catch (error) {
    const responseTime = Date.now() - startTime
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('[API Exception]', JSON.stringify({
      endpoint: API_ENDPOINT,
      error: errorMessage,
      responseTime: `${responseTime}ms`,
      stack: error instanceof Error ? error.stack : undefined,
    }, null, 2))
    // 接口调用失败时默认返回 false（显示 404）
    return {
      allowed: false,
      error: errorMessage,
      responseTime,
    }
  }
}

/**
 * 模拟过滤接口（开发时使用）
 * @param path 当前访问的路径
 * @param delay 延迟时间（毫秒）
 * @param allowed 是否允许访问
 */
export async function mockCheckAccess(
  path: string,
  delay: number = 1000,
  allowed: boolean = true,
): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, delay))
  return allowed
}
