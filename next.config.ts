import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // 注意：路由映射现在由 middleware.ts 处理
  eslint: {
    ignoreDuringBuilds: true, // 构建时忽略 ESLint 错误
  },
  // 禁用 Turbopack 以解决 Google Fonts 加载问题
  // 这是 Next.js 16 + Turbopack 的已知问题
  experimental: {
    turbo: {
      // 暂时禁用 Turbopack 的字体优化，使用传统 webpack 方式
    },
  },
} as NextConfig

export default nextConfig
