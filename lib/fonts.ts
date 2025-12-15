import { Kaisei_Decol } from 'next/font/google'

/**
 * 主标题字体：Kaisei Decol（海青デコル）
 * 用途：主标题、专家姓名、重要声明、按钮
 * 特点：优雅的衬线字体，传统日式风格，具有权威感
 *
 * 按照 Next.js 官方文档配置：
 * https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
export const kaiseiDecol = Kaisei_Decol({
  variable: '--font-kaisei-decol',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
