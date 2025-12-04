import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // 注意：路由映射现在由 middleware.ts 处理
  eslint: {
    ignoreDuringBuilds: true, // 构建时忽略 ESLint 错误
  },
}

export default nextConfig
