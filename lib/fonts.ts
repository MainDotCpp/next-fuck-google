import { Kaisei_Decol } from 'next/font/google'

/**
 * 风格化日文字体：Kaisei Decol（海青デコル）
 *
 * 特点：
 * - 优雅的衬线字体
 * - 传统日式风格，具有权威感
 * - 适合标题、重要声明、正式内容
 * - 独特的装饰性风格，非常有辨识度
 */
export const kaiseiDecol = Kaisei_Decol({
  variable: '--font-kaisei-decol',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
