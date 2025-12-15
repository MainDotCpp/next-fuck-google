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
  /** 是否启用访问检测（默认 true） */
  enableCheck?: boolean
  /** 被拦截时渲染的页面路径（默认使用 not-found） */
  blockedPage?: string
}

/**
 * 别名配置列表
 * 配置格式：
 * - { alias: '/page1', target: '/p1' } - 默认启用检测，使用 /not-found 作为拦截页面
 * - { alias: '/page2', target: '/p2', enableCheck: false } - 禁用检测
 * - { alias: '/page3', target: '/p3', blockedPage: '/custom-blocked' } - 使用自定义拦截页面
 */
export const routeAliases: RouteAlias[] = [
  { alias: '/', target: '/white/sites' },
  { alias: '/cq', target: '/pages/page1', enableCheck: true, blockedPage: '/not-found' },
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
 * 路由映射结果
 */
export interface RouteMappingResult {
  /** 映射的目标页面路径 */
  target: string
  /** 是否启用访问检测 */
  enableCheck: boolean
  /** 被拦截时渲染的页面路径 */
  blockedPage: string
}

/**
 * 根据请求路径获取映射的目标页面路径和配置
 * @param requestPath 请求的路径
 * @returns 映射结果，如果不存在则返回 null
 */
export function getMappedPage(requestPath: string): RouteMappingResult | null {
  const normalizedPath = normalizePath(requestPath)

  // 遍历所有别名配置，找到第一个匹配的
  for (const aliasConfig of routeAliases) {
    const normalizedAlias = normalizePath(aliasConfig.alias)
    let targetPath: string | null = null

    // 精确匹配
    if (normalizedPath === normalizedAlias) {
      const normalizedTarget = normalizePath(aliasConfig.target)
      targetPath = normalizedTarget
    }
    // 前缀匹配
    // 特殊处理根路径：当别名是 '/' 时，所有路径都匹配
    else if (normalizedAlias === '/') {
      const normalizedTarget = normalizePath(aliasConfig.target)
      // 直接拼接目标路径和请求路径（请求路径已经以 / 开头）
      targetPath = `${normalizedTarget}${normalizedPath}`
    }
    // 其他前缀匹配
    else if (normalizedPath.startsWith(`${normalizedAlias}/`)) {
      const normalizedTarget = normalizePath(aliasConfig.target)
      // 替换前缀并保留剩余路径
      const remainingPath = normalizedPath.slice(normalizedAlias.length)
      targetPath = `${normalizedTarget}${remainingPath}`
    }

    if (targetPath) {
      return {
        target: targetPath,
        enableCheck: aliasConfig.enableCheck !== false, // 默认 true
        blockedPage: aliasConfig.blockedPage || '/not-found', // 默认 not-found
      }
    }
  }

  return null
}
