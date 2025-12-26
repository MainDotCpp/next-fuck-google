/**
 * 按钮链接配置
 * 定义页面中使用的各种按钮链接
 */
export interface ButtonLinks {
  /** 主要CTA按钮链接（默认按钮） */
  primary?: string
  /** YouTube 频道链接 */
  youtube?: string
  /** LINE 链接 */
  line?: string
  /** 其他自定义链接，可以通过 key 访问 */
  [key: string]: string | undefined
}

/**
 * URL 路由别名配置
 *
 * 简单的路径前缀替换功能
 *
 * 示例：
 * - 配置：'/page1' -> '/p1'
 * - 访问 '/page1' 会映射到 '/p1'
 * - 访问 '/page1/about' 会映射到 '/p1/about'
 * - 访问 '/page1/any/path' 会映射到 '/p1/any/path'
 */

export interface RouteAlias {
  /** 别名路径前缀 */
  alias: string
  /** 目标路径前缀 */
  target: string
  /** 可选：该路由被拦截时重定向到的页面路径，如果不设置则使用全局默认值 */
  blockedPage?: string
  /** 可选：该路由页面中使用的按钮链接配置 */
  buttonLinks?: ButtonLinks
}

/**
 * 访问拦截配置
 */
export interface AccessControlConfig {
  /** 被拦截时重定向到的页面路径，设置为 '/not-found' 时使用 Next.js 的 notFound() */
  blockedPage: string
}

/**
 * 访问控制配置
 * 当访问被拦截时，重定向到指定的页面
 *
 * 注意：
 * - 设置为 '/not-found' 时，会使用 Next.js 的 notFound() 函数返回 404
 * - 设置为其他路径时，会使用 redirect() 重定向到该路径
 */
export const accessControlConfig: AccessControlConfig = {
  blockedPage: '/not-found',
}

/**
 * Google Ads 转化标签全局配置
 * 点击任何按钮时，都会向这个列表中的所有标签发送转化事件
 *
 * 配置方式：
 * 1. 通过环境变量 NEXT_PUBLIC_GA_CONVERSION_LABEL 配置（多个标签用逗号分隔）
 *    例如：NEXT_PUBLIC_GA_CONVERSION_LABEL=AW-123/abc, AW-123/def, AW-123/ghi
 *
 * 2. 在代码中直接配置（修改下面的数组）
 *    例如：return ['AW-123/abc', 'AW-123/def', 'AW-123/ghi']
 */
export const GLOBAL_CONVERSION_LABELS: string[] = (() => {
  // 优先从环境变量获取（支持逗号分隔的多个标签）
  // eslint-disable-next-line node/prefer-global/process
  const envLabels = typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_GA_CONVERSION_LABEL
  if (envLabels) {
    return envLabels.split(',').map(label => label.trim()).filter(Boolean)
  }
  // 如果没有环境变量，可以在代码中手动添加标签
  // 例如：return ['AW-1234567890/AbC-dEfGhIjKlMnOpQrStUvWxYz', 'AW-1234567890/XyZ-1234567890']
  return []
})()

/**
 * 别名配置列表
 * 配置格式：
 * - { alias: '/page1', target: '/p1' } - 映射到 /p1，使用全局默认拦截页面
 * - { alias: '/cq', target: '/(protected)/pages/page1', blockedPage: '/custom-blocked' } - 映射到 (protected) 路由组，使用自定义拦截页面
 * - { alias: '/', target: '/white/sites' } - 映射到 /white/sites（不需要检测）
 *
 * 注意：
 * - 映射到 (protected) 路由组的路径会自动进行访问检测
 * - 映射到其他路径的不会进行检测
 * - 可以为每个路由单独设置 blockedPage，如果不设置则使用全局默认值
 */
export const routeAliases: RouteAlias[] = [
  // 注意：target 路径应该匹配实际的文件系统路径
  // 对于 (protected) 路由组内的页面，路径不需要包含路由组名称
  // 因为路由组在 URL 中不显示，但 Next.js 会自动在路由组内查找
  { alias: '/cq', target: '/JP/page1', blockedPage: '/white/JP/w1', buttonLinks: { primary: 'https://federenne.com/next01' } },
  { alias: '/n', target: '/JP/page1', blockedPage: '/white/JP/book', buttonLinks: { primary: 'https://federenne.com/next01' } },
  { alias: '/', target: '/white/sites' },
]

/**
 * 规范化路径
 */
function normalizePath(path: string): string {
  if (path === '')
    return '/'
  // 移除末尾的 /，但保留根路径 /
  const normalized = path.replace(/\/+$/, '') || '/'
  return normalized.startsWith('/') ? normalized : `/${normalized}`
}

/**
 * Protected 路由组的前缀配置
 * 定义哪些路径前缀属于 protected 路由组
 * 这些路由会经过访问检测，日志由 app/(protected)/layout.tsx 记录
 */
export const PROTECTED_ROUTE_PREFIXES = [
  '/JP/',
] as const

/**
 * 检查路径是否属于 protected 路由组
 * @param path 要检查的路径
 * @returns 如果是 protected 路由返回 true，否则返回 false
 */
export function isProtectedRoute(path: string): boolean {
  return PROTECTED_ROUTE_PREFIXES.some(prefix => path.startsWith(prefix))
}

/**
 * 路由映射结果
 */
export interface RouteMappingResult {
  /** 映射的目标页面路径 */
  target: string
  /** 该路由被拦截时使用的页面路径，如果未设置则使用全局默认值 */
  blockedPage?: string
  /** 该路由的按钮链接配置 */
  buttonLinks?: ButtonLinks
}

/**
 * 根据请求路径获取映射的目标页面路径
 * @param requestPath 请求的路径
 * @returns 映射结果，如果不存在则返回 null
 */
export function getMappedPage(requestPath: string): RouteMappingResult | null {
  const normalizedPath = normalizePath(requestPath)

  // 先进行精确匹配（优先级最高）
  for (const aliasConfig of routeAliases) {
    const normalizedAlias = normalizePath(aliasConfig.alias)
    if (normalizedPath === normalizedAlias) {
      const normalizedTarget = normalizePath(aliasConfig.target)
      return {
        target: normalizedTarget,
        blockedPage: aliasConfig.blockedPage,
        buttonLinks: aliasConfig.buttonLinks,
      }
    }
  }

  // 然后进行前缀匹配（排除根路径，因为根路径会匹配所有）
  for (const aliasConfig of routeAliases) {
    const normalizedAlias = normalizePath(aliasConfig.alias)
    // 跳过根路径，根路径在后面处理
    if (normalizedAlias === '/')
      continue

    if (normalizedPath.startsWith(`${normalizedAlias}/`)) {
      const normalizedTarget = normalizePath(aliasConfig.target)
      const remainingPath = normalizedPath.slice(normalizedAlias.length)
      return {
        target: `${normalizedTarget}${remainingPath}`,
        blockedPage: aliasConfig.blockedPage,
        buttonLinks: aliasConfig.buttonLinks,
      }
    }
  }

  // 最后处理根路径匹配（优先级最低）
  for (const aliasConfig of routeAliases) {
    const normalizedAlias = normalizePath(aliasConfig.alias)
    if (normalizedAlias === '/') {
      const normalizedTarget = normalizePath(aliasConfig.target)
      return {
        target: `${normalizedTarget}${normalizedPath}`,
        blockedPage: aliasConfig.blockedPage,
        buttonLinks: aliasConfig.buttonLinks,
      }
    }
  }

  return null
}

/**
 * 根据目标页面路径获取按钮链接配置
 * @param targetPath 目标页面路径（例如 '/JP/page1'）
 * @returns 按钮链接配置，如果不存在则返回 null
 */
export function getButtonLinksByTarget(targetPath: string): ButtonLinks | null {
  const normalizedTarget = normalizePath(targetPath)

  // 查找匹配的路由配置
  for (const aliasConfig of routeAliases) {
    const normalizedTargetPath = normalizePath(aliasConfig.target)
    // 精确匹配
    if (normalizedTarget === normalizedTargetPath) {
      return aliasConfig.buttonLinks || null
    }
    // 前缀匹配（用于匹配子路径）
    if (normalizedTarget.startsWith(`${normalizedTargetPath}/`)) {
      return aliasConfig.buttonLinks || null
    }
  }

  return null
}

/**
 * 根据当前路径（通过 alias）获取按钮链接配置
 * 用于客户端组件，根据当前访问的路径查找对应的路由配置
 * @param currentPath 当前路径（例如 '/cq'），如果不提供则从 window.location.pathname 获取
 * @returns 按钮链接配置，如果不存在则返回 null
 */
export function getButtonLinksByAlias(currentPath?: string): ButtonLinks | null {
  if (typeof window === 'undefined') {
    return null
  }

  const path = currentPath || window.location.pathname
  const mappedPage = getMappedPage(path)
  return mappedPage?.buttonLinks || null
}
