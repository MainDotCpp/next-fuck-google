import { db } from './db'

/**
 * 访问日志记录工具
 */

/**
 * 访问日志数据结构
 */
export interface AccessLog {
  // 基本信息
  timestamp: string
  requestId: string

  // 请求信息
  method?: string
  path: string
  fullUrl: string
  queryParams: string

  // 客户端信息
  clientIp: string
  userAgent: string
  acceptLanguage: string
  referer: string
  host: string

  // 检查结果
  languageCheck: {
    passed: boolean
    language: string
    allowedLanguages: string[]
  }
  urlParamsCheck: {
    passed: boolean
    params: string
    pattern: string
  }
  apiCheck: {
    passed: boolean
    apiResponse?: {
      code: number
      message: string
      success: boolean
      status: boolean
    }
    apiError?: string
    responseTime?: number
  }

  // 最终结果
  allowed: boolean
  blockedReason?: string

  // 性能指标
  totalResponseTime: number
}

/**
 * 生成请求ID
 */
function generateRequestId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * 格式化日志输出
 */
function formatLog(log: AccessLog): string {
  const {
    timestamp,
    requestId,
    path,
    clientIp,
    allowed,
    languageCheck,
    urlParamsCheck,
    apiCheck,
    totalResponseTime,
    blockedReason,
  } = log

  const status = allowed ? 'ALLOWED' : 'BLOCKED'
  const reason = blockedReason ? ` [${blockedReason}]` : ''

  return `[${timestamp}] [${requestId}] ${status}${reason} | ${path} | IP: ${clientIp} | Lang: ${languageCheck.passed ? '✓' : '✗'} | Params: ${urlParamsCheck.passed ? '✓' : '✗'} | API: ${apiCheck.passed ? '✓' : '✗'} | ${totalResponseTime}ms`
}

/**
 * 保存访问日志到数据库
 */
export async function saveAccessLogToDB(log: AccessLog): Promise<void> {
  try {
    await db.accessLog.create({
      data: {
        // id 字段使用自增，不需要手动设置
        timestamp: new Date(log.timestamp),
        path: log.path,
        queryParams: log.queryParams || null,
        clientIp: log.clientIp,
        userAgent: log.userAgent || null,
        host: log.host || null,
        referer: log.referer || null,
        language: log.languageCheck.language || null,
        languageCheckPassed: log.languageCheck.passed,
        urlParamsCheckPassed: log.urlParamsCheck.passed,
        apiCheckPassed: log.apiCheck.passed,
        apiResponse: log.apiCheck.apiResponse ? JSON.stringify(log.apiCheck.apiResponse) : null,
        apiError: log.apiCheck.apiError || null,
        allowed: log.allowed,
        blockedReason: log.blockedReason || null,
        responseTime: log.totalResponseTime,
      },
    })
  }
  catch (error) {
    // 数据库保存失败时只记录错误，不影响主流程
    console.error('Failed to save access log to database:', error)
  }
}

/**
 * 记录访问日志（同时输出到控制台和保存到数据库）
 */
export async function logAccess(log: AccessLog): Promise<void> {
  const formattedLog = formatLog(log)

  if (log.allowed) {
    console.log(formattedLog)
  }
  else {
    console.warn(formattedLog)
  }

  // 详细日志（开发环境或需要调试时）
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_LOGS === 'true') {
    console.debug('Access Log Details:', JSON.stringify(log, null, 2))
  }

  // 异步保存到数据库（不阻塞主流程）
  saveAccessLogToDB(log).catch((error) => {
    console.error('Failed to save access log:', error)
  })
}

/**
 * 创建访问日志对象
 */
export function createAccessLog(initialData: Partial<AccessLog>): AccessLog {
  return {
    timestamp: new Date().toISOString(),
    requestId: generateRequestId(),
    path: '',
    fullUrl: '',
    queryParams: '',
    clientIp: 'unknown',
    userAgent: '',
    acceptLanguage: '',
    referer: '',
    host: 'localhost',
    languageCheck: {
      passed: false,
      language: '',
      allowedLanguages: [],
    },
    urlParamsCheck: {
      passed: false,
      params: '',
      pattern: '',
    },
    apiCheck: {
      passed: false,
    },
    allowed: false,
    totalResponseTime: 0,
    ...initialData,
  }
}
