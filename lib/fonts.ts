import { Kaisei_Decol, Noto_Sans_JP, Rampart_One } from 'next/font/google'

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

/**
 * 正文字体：Noto Sans JP（ノト サンズ）
 * 用途：正文、描述文本、一般内容
 * 特点：现代、专业、易读性强，专为日文优化
 *
 * 按照 Next.js 官方文档配置：
 * https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
export const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})

/**
 * 装饰性字体：Rampart One（ランパート ワン）
 * 用途：关键数字、醒目标语、特殊强调
 * 特点：有趣、有特色、视觉冲击力强，适合用于吸引注意力的元素
 *
 * 按照 Next.js 官方文档配置：
 * https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
export const rampartOne = Rampart_One({
  variable: '--font-rampart-one',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})
