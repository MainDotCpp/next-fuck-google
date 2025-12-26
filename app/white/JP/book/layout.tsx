import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '買い時・売り時がひと目でわかる 株価チャート大全 | 書籍紹介ページ',
  description: '100のチャートパターンで「待つ・仕掛ける・引く」の判断軸を体系化。個人投資家の武器になる実践ガイド。プロが厳選した頻出「買い・売りパターン」を網羅した株価チャート大全の紹介ページです。',
  keywords: [
    '株価チャート',
    '株式投資',
    'テクニカル分析',
    'チャートパターン',
    'ローソク足',
    '移動平均線',
    '投資本',
    '投資ガイド',
    '戸松信博',
    '株価分析',
    '投資判断',
    'リスク管理',
  ],
  authors: [{ name: '戸松 信博' }],
  openGraph: {
    title: '買い時・売り時がひと目でわかる 株価チャート大全',
    description: '100のチャートパターンで「待つ・仕掛ける・引く」の判断軸を体系化。個人投資家の武器になる実践ガイド。',
    type: 'book',
    locale: 'ja_JP',
    siteName: '書籍紹介ページ',
    images: [
      {
        url: '/stockbookseller/images/71vIEA17pjL._SL1500_.jpg',
        width: 240,
        height: 340,
        alt: '買い時・売り時がひと目でわかる 株価チャート大全 表紙',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '買い時・売り時がひと目でわかる 株価チャート大全',
    description: '100のチャートパターンで「待つ・仕掛ける・引く」の判断軸を体系化。個人投資家の武器になる実践ガイド。',
    images: ['/stockbookseller/images/71vIEA17pjL._SL1500_.jpg'],
  },
  alternates: {
    canonical: '/white/JP/book',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
