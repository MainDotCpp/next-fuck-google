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
  // 注意：更具体的路由要放在前面，避免被根路径匹配
  { alias: '/cq', target: '/pages/page1', enableCheck: false }, // 禁用检测，直接放行
  { alias: '/', target: '/white/sites', enableCheck: false },
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

  // 先进行精确匹配（优先级最高）
  for (const aliasConfig of routeAliases) {
    const normalizedAlias = normalizePath(aliasConfig.alias)
    if (normalizedPath === normalizedAlias) {
      const normalizedTarget = normalizePath(aliasConfig.target)
      return {
        target: normalizedTarget,
        enableCheck: aliasConfig.enableCheck !== false,
        blockedPage: aliasConfig.blockedPage || '/not-found',
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
        enableCheck: aliasConfig.enableCheck !== false,
        blockedPage: aliasConfig.blockedPage || '/not-found',
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
        enableCheck: aliasConfig.enableCheck !== false,
        blockedPage: aliasConfig.blockedPage || '/not-found',
      }
    }
  }

  return null
}
