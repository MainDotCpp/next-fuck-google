'use client'
import { AlertTriangle, ArrowRight, BookOpen, CheckCircle2, FileText, Info, MessageCircle, Shield, TrendingUp, Users, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TextShimmer } from '@/components/ui/text-shimmer'
import { kaiseiDecol, notoSansJP, rampartOne } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export default function FinancialLandingPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ${kaiseiDecol.variable} ${notoSansJP.variable} ${rampartOne.variable}`}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Risk Warning Banner */}
          <Card className="bg-gradient-to-r from-amber-900/40 to-orange-800/30 backdrop-blur-sm border-amber-500/30 shadow-xl mb-8 sm:mb-12">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-200 mb-2 [font-family:var(--font-kaisei-decol)]">
                    重要なお知らせ
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                    本サイトで提供される情報は、投資助言を目的としたものではありません。投資にはリスクが伴い、元本割れの可能性があります。投資判断は、お客様ご自身の責任において行ってください。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expert Profile Section */}
          <Card className="bg-gradient-to-r from-indigo-900/40 to-purple-800/30 backdrop-blur-sm border-indigo-500/30 shadow-xl mb-8 sm:mb-12 overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 p-1 ring-4 ring-indigo-500/30">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-3xl sm:text-4xl font-bold text-indigo-300 [font-family:var(--font-kaisei-decol)]">
                      三
                    </div>
                  </div>
                </div>
                {/* Profile Info */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-white [font-family:var(--font-kaisei-decol)]">三橋貴明</h2>
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 [font-family:var(--font-body)]">
                    経済評論家・市場分析者
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 bg-blue-500/20 px-3 py-1.5 rounded-full border border-blue-500/30">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-200 [font-family:var(--font-subheading)]">市場分析・情報提供</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-500/30">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span className="text-green-200 [font-family:var(--font-subheading)]">教育コンテンツ</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:mb-8 [font-family:var(--font-kaisei-decol)]">
              市場情報と経済分析を
              <br className="hidden sm:block" />
              <span className="text-blue-400 [font-family:var(--font-rampart-one)]">わかりやすくお届け</span>
              <br />
              します
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 [font-family:var(--font-body)]">
              最新の市場動向や経済ニュースを、専門家の視点から解説します
            </p>
          </div>

          {/* Information Services */}
          <div className="grid gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Market Information */}
            <Card className="bg-gradient-to-r from-blue-900/40 to-indigo-800/30 backdrop-blur-sm border-blue-500/30 shadow-xl overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-full flex items-center justify-center ring-2 ring-blue-500/30">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-blue-300 [font-family:var(--font-subheading)]">
                    市場情報の提供
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                  国内外の市場動向、経済指標、企業情報などを、わかりやすく解説します。
                </p>
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm">
                  <p className="text-sm sm:text-base text-blue-200 [font-family:var(--font-body)]">
                    ※ 情報提供のみであり、投資推奨や投資助言ではありません
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Educational Content */}
            <Card className="bg-gradient-to-r from-green-900/40 to-emerald-800/30 backdrop-blur-sm border-green-500/30 shadow-xl overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-green-500/20 rounded-full flex items-center justify-center ring-2 ring-green-500/30">
                    <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-green-300 [font-family:var(--font-subheading)]">
                    教育コンテンツ
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                  経済の基礎知識、市場の仕組み、リスク管理の重要性など、学習に役立つ情報を提供します。
                </p>
                <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30 backdrop-blur-sm">
                  <p className="text-sm sm:text-base text-green-200 [font-family:var(--font-body)]">
                    ※ 教育目的の情報提供であり、具体的な投資行動を推奨するものではありません
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* YouTube Channel Section */}
          <Card className="bg-gradient-to-r from-red-900/40 to-pink-800/30 backdrop-blur-sm border-red-500/30 shadow-xl mb-8 sm:mb-12 overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500/20 rounded-full flex items-center justify-center ring-2 ring-red-500/30">
                  <Youtube className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-red-300 [font-family:var(--font-subheading)]">
                  YouTubeチャンネル
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                毎週、市場分析と経済解説動画を配信しています。教育目的のコンテンツです。
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30 backdrop-blur-sm text-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-red-200 mb-1 tracking-tight [font-family:var(--font-number)]">12.5万</div>
                  <div className="text-xs sm:text-sm text-red-300 [font-family:var(--font-body)]">登録者数</div>
                </div>
                <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30 backdrop-blur-sm text-center">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-red-200 mb-1 tracking-tight [font-family:var(--font-number)]">500+</div>
                  <div className="text-xs sm:text-sm text-red-300 [font-family:var(--font-body)]">動画数</div>
                </div>
                <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30 backdrop-blur-sm text-center col-span-2 sm:col-span-1">
                  <Info className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-red-200 mb-1 tracking-tight [font-family:var(--font-number)]">週3回</div>
                  <div className="text-xs sm:text-sm text-red-300 [font-family:var(--font-body)]">更新頻度</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    'flex-1 border-red-500/50 text-red-300 hover:bg-red-500/20 hover:text-red-200',
                    'font-bold text-base sm:text-lg',
                    'py-5 sm:py-6 px-6 sm:px-8',
                    'shadow-lg hover:shadow-xl',
                    'transform hover:scale-105 active:scale-95',
                    'transition-all duration-200',
                    '[font-family:var(--font-kaisei-decol)]',
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('https://youtube.com/@your-channel', '_blank')
                  }}
                >
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                  チャンネルを見る
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Information Subscription */}
          <Card className="bg-gradient-to-r from-purple-900/40 to-pink-800/30 backdrop-blur-sm border-purple-500/30 shadow-xl mb-8 sm:mb-12">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-purple-200 mb-4 [font-family:var(--font-kaisei-decol)]">
                  最新情報をお届けします
                </h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                  LINEで最新の市場情報や経済解説をお届けします。情報提供のみであり、投資推奨ではありません。
                </p>
                <div className="mt-6">
                  <Button
                    size="lg"
                    className={cn(
                      'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
                      'text-white font-bold text-base sm:text-lg',
                      'py-5 sm:py-6 px-8 sm:px-12',
                      'shadow-xl hover:shadow-2xl',
                      'transform hover:scale-105 active:scale-95',
                      'transition-all duration-200',
                      'w-full sm:w-auto',
                      '[font-family:var(--font-kaisei-decol)]',
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      window.open('https://line.me/R/ti/p/@your-line-id', '_blank')
                    }}
                  >
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    情報を受け取る
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border-slate-600/30 shadow-xl mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-200 text-center [font-family:var(--font-kaisei-decol)]">
                免責事項
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed [font-family:var(--font-body)]">
                <p>
                  1. 本サイトで提供される情報は、投資助言、投資推奨、または投資勧誘を目的としたものではありません。
                </p>
                <p>
                  2. 投資にはリスクが伴い、元本割れの可能性があります。過去の実績や将来の予測は、将来の成果を保証するものではありません。
                </p>
                <p>
                  3. 投資判断は、お客様ご自身の責任において行ってください。投資に関する最終的な判断は、お客様ご自身で行っていただく必要があります。
                </p>
                <p>
                  4. 本サイトの情報は、一般的な市場情報の提供を目的としており、個別の投資商品や投資戦略を推奨するものではありません。
                </p>
                <p>
                  5. 本サイトの情報に基づいて行われた投資行動により生じた損害について、当方は一切の責任を負いません。
                </p>
                <p>
                  6. 投資を行う前に、必ず金融商品取引法に基づく説明書や契約書をよくお読みいただき、内容を十分にご理解の上、ご自身の判断で投資を行ってください。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-yellow-900/40 via-orange-800/30 to-red-800/30 backdrop-blur-sm border-2 border-yellow-500/50 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-red-500/10 animate-pulse" />
            <CardContent className="pt-6 relative z-10">
              <div className="text-center space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-200 [font-family:var(--font-kaisei-decol)]">
                  市場情報をお届けします
                </h2>
                <p className="text-base sm:text-lg text-gray-300 [font-family:var(--font-body)]">
                  最新の市場動向や経済解説を、わかりやすくお届けします
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <Button
                    size="lg"
                    className={cn(
                      'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
                      'text-white font-bold text-lg sm:text-xl',
                      'py-6 sm:py-7 px-8 sm:px-12',
                      'shadow-lg hover:shadow-xl',
                      'transform hover:scale-105 active:scale-95',
                      'transition-all duration-200',
                      'w-full sm:w-auto',
                      '[font-family:var(--font-kaisei-decol)]',
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      window.open('https://line.me/R/ti/p/@your-line-id', '_blank')
                    }}
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.345 0 .63.285.63.63 0 .349-.285.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.27l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058.9-.031.18-.105.36-.18.51-.105.18-.24.36-.315.45-.12.135-.27.27-.27.48 0 .24.18.45.42.6.36.24.81.39 1.305.39 1.365 0 2.625-.75 3.405-1.965.12-.18.18-.36.27-.54.03-.06.06-.12.09-.18.03-.09.06-.18.09-.27.06-.24.12-.48.12-.78 0-.39-.06-.75-.18-1.08.96-.24 1.845-.66 2.655-1.23 2.855-2.04 4.725-5.175 4.725-8.76" />
                    </svg>
                    LINEで情報を受け取る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mt-4 [font-family:var(--font-body)]">
                  ※ 情報提供のみであり、投資推奨や投資助言ではありません
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
