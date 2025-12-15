'use client'
import { ArrowRight, CheckCircle2, MessageCircle, PlayCircle, Sparkles, TrendingDown, TrendingUp, Users, Video, Youtube, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TextShimmer } from '@/components/ui/text-shimmer'
import { kaiseiDecol, notoSansJP, rampartOne } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export default function LandingPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ${kaiseiDecol.variable} ${notoSansJP.variable} ${rampartOne.variable}`}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
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
                    経済評論家・投資戦略家
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 bg-blue-500/20 px-3 py-1.5 rounded-full border border-blue-500/30">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-200 [font-family:var(--font-subheading)]">15年以上の経験</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-500/30">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-green-200 [font-family:var(--font-subheading)]">実績多数</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-indigo-500/30">
                <Button
                  size="lg"
                  className={cn(
                    'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700',
                    'text-white font-bold w-full sm:w-auto text-base sm:text-lg',
                    'py-5 sm:py-6 px-6 sm:px-8',
                    'shadow-lg hover:shadow-xl',
                    'transform hover:scale-105 active:scale-95',
                    'transition-all duration-200',
                    '[font-family:var(--font-kaisei-decol)]',
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('https://line.me/R/ti/p/@your-line-id', '_blank')
                  }}
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  今すぐ無料相談する
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>

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
                毎週最新の市場分析と投資戦略を配信中
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30 backdrop-blur-sm text-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-red-200 mb-1 tracking-tight [font-family:var(--font-number)]">12.5万</div>
                  <div className="text-xs sm:text-sm text-red-300 [font-family:var(--font-body)]">登録者数</div>
                </div>
                <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30 backdrop-blur-sm text-center">
                  <Video className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-red-200 mb-1 tracking-tight [font-family:var(--font-number)]">500+</div>
                  <div className="text-xs sm:text-sm text-red-300 [font-family:var(--font-body)]">動画数</div>
                </div>
                <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30 backdrop-blur-sm text-center col-span-2 sm:col-span-1">
                  <PlayCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-red-200 mb-1 tracking-tight [font-family:var(--font-number)]">週3回</div>
                  <div className="text-xs sm:text-sm text-red-300">更新頻度</div>
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
                <Button
                  size="lg"
                  className={cn(
                    'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
                    'text-white font-bold flex-1 text-base sm:text-lg',
                    'py-5 sm:py-6 px-6 sm:px-8',
                    'shadow-lg hover:shadow-xl',
                    'transform hover:scale-105 active:scale-95',
                    'transition-all duration-200',
                    '[font-family:var(--font-kaisei-decol)]',
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('https://line.me/R/ti/p/@your-line-id', '_blank')
                  }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.345 0 .63.285.63.63 0 .349-.285.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.27l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058.9-.031.18-.105.36-.18.51-.105.18-.24.36-.315.45-.12.135-.27.27-.27.48 0 .24.18.45.42.6.36.24.81.39 1.305.39 1.365 0 2.625-.75 3.405-1.965.12-.18.18-.36.27-.54.03-.06.06-.12.09-.18.03-.09.06-.18.09-.27.06-.24.12-.48.12-.78 0-.39-.06-.75-.18-1.08.96-.24 1.845-.66 2.655-1.23 2.855-2.04 4.725-5.175 4.725-8.76" />
                  </svg>
                  LINEで情報を受け取る
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:mb-8 [font-family:var(--font-kaisei-decol)]">
              最近、高市早苗の対中発言によって、
              <br className="hidden sm:block" />
              <span className="text-blue-400 [font-family:var(--font-rampart-one)]">日本市場には"二つのチャンス"</span>
              <br />
              が同時に生まれています。
            </h1>
            <Button
              size="lg"
              className={cn(
                'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
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
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              今すぐチャンスを掴む
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>

          {/* Two Opportunities Cards */}
          <div className="grid gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Opportunity 1: 暴落 */}
            <Card className="bg-gradient-to-r from-red-900/40 to-red-800/30 backdrop-blur-sm border-red-500/30 shadow-xl overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-red-500/20 rounded-full flex items-center justify-center ring-2 ring-red-500/30">
                    <TrendingDown className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-red-300 [font-family:var(--font-subheading)]">
                    一つは暴落
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                  観光・小売・百貨店などは急落し、
                </p>
                <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30 backdrop-blur-sm">
                  <p className="text-lg sm:text-xl font-bold text-red-200 text-center">
                    一部では
                    {' '}
                    <span className="text-2xl sm:text-3xl text-red-100 font-extrabold tracking-tight [font-family:var(--font-rampart-one)]">1日で7〜12％</span>
                    {' '}
                    の下げを記録。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Opportunity 2: 資金流入 */}
            <Card className="bg-gradient-to-r from-green-900/40 to-emerald-800/30 backdrop-blur-sm border-green-500/30 shadow-xl overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-green-500/20 rounded-full flex items-center justify-center ring-2 ring-green-500/30">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-green-300 [font-family:var(--font-subheading)]">
                    しかしその裏で
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                  防衛・半導体・国産化・円安メリット分野は
                </p>
                <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30 backdrop-blur-sm">
                  <p className="text-lg sm:text-xl font-bold text-green-200 text-center">
                    通常の
                    {' '}
                    <span className="text-2xl sm:text-3xl text-green-100 font-extrabold tracking-tight [font-family:var(--font-rampart-one)]">4倍以上</span>
                    {' '}
                    の資金流入
                  </p>
                </div>
                <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-500/30 backdrop-blur-sm">
                  <p className="text-base sm:text-lg font-semibold text-emerald-200 text-center">
                    わずか数日で
                    {' '}
                    <span className="text-xl sm:text-2xl text-emerald-100 font-bold [font-family:var(--font-rampart-one)]">3連続の大陽線</span>
                    {' '}
                    をつける銘柄も。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick CTA after opportunities */}
          <div className="text-center mb-8 sm:mb-12">
            <Button
              size="lg"
              className={cn(
                'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700',
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
              詳細な分析レポートを受け取る
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>

          {/* Key Insight */}
          <Card className="bg-gradient-to-r from-blue-900/40 to-indigo-800/30 backdrop-blur-sm border-blue-500/30 shadow-xl mb-8 sm:mb-12">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed [font-family:var(--font-quote)]">
                  これはただの混乱ではなく、
                </p>
                <TextShimmer
                  as="p"
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-300 [font-family:var(--font-kaisei-decol)]"
                >
                  "資金の移動"という明確なサイン。
                </TextShimmer>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-500/30">
                <Button
                  size="lg"
                  className={cn(
                    'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
                    'text-white font-bold w-full sm:w-auto text-base sm:text-lg',
                    'py-5 sm:py-6 px-6 sm:px-8',
                    'shadow-lg hover:shadow-xl',
                    'transform hover:scale-105 active:scale-95',
                    'transition-all duration-200',
                    '[font-family:var(--font-kaisei-decol)]',
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('https://line.me/R/ti/p/@your-line-id', '_blank')
                  }}
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  資金の流れを詳しく知る
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Core Message */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <Card className="bg-gradient-to-r from-purple-900/40 to-pink-800/30 backdrop-blur-sm border-purple-500/30 shadow-lg">
              <CardContent className="pt-6">
                <p className="text-lg sm:text-xl font-semibold text-purple-200 text-center [font-family:var(--font-quote)]">
                  暴落はチャンスになり、
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-orange-900/40 to-amber-800/30 backdrop-blur-sm border-orange-500/30 shadow-lg">
              <CardContent className="pt-6">
                <p className="text-lg sm:text-xl font-semibold text-orange-200 text-center [font-family:var(--font-quote)]">
                  暴騰はトレンドの始まりになる。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Important Message */}
          <Card className="bg-gradient-to-r from-cyan-900/40 to-teal-800/30 backdrop-blur-sm border-cyan-500/30 shadow-xl mb-8 sm:mb-12">
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                  重要なのは相場の荒れではなく、
                </p>
                <p className="text-xl sm:text-2xl font-bold text-cyan-300 [font-family:var(--font-kaisei-decol)]">
                  "資金がどこへ向かっているか"を読めるかどうか。
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-cyan-500/30">
                <Button
                  size="lg"
                  className={cn(
                    'bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700',
                    'text-white font-bold w-full sm:w-auto text-base sm:text-lg',
                    'py-5 sm:py-6 px-6 sm:px-8',
                    'shadow-lg hover:shadow-xl',
                    'transform hover:scale-105 active:scale-95',
                    'transition-all duration-200',
                    '[font-family:var(--font-kaisei-decol)]',
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('https://line.me/R/ti/p/@your-line-id', '_blank')
                  }}
                >
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  投資戦略を学ぶ
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Proof - Testimonials */}
          <Card className="bg-gradient-to-r from-violet-900/40 to-fuchsia-800/30 backdrop-blur-sm border-violet-500/30 shadow-xl mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-violet-300 text-center [font-family:var(--font-subheading)]">
                多くの投資家が信頼しています
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:gap-6">
                <div className="bg-violet-500/20 rounded-lg p-4 border border-violet-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center text-white font-bold shrink-0">
                      T
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-violet-200 mb-2 italic [font-family:var(--font-quote)]">
                        "三桥さんの分析は的確で、実際に利益を出すことができました。特に市場の転換点を見極める力が素晴らしいです。"
                      </p>
                      <p className="text-xs sm:text-sm text-violet-300 [font-family:var(--font-body)]">- 田中様（投資歴5年）</p>
                    </div>
                  </div>
                </div>
                <div className="bg-violet-500/20 rounded-lg p-4 border border-violet-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center text-white font-bold shrink-0">
                      S
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-violet-200 mb-2 italic [font-family:var(--font-quote)]">
                        "LINEで送られてくる情報が本当に役立ちます。初心者でもわかりやすく、実践的なアドバイスがもらえます。"
                      </p>
                      <p className="text-xs sm:text-sm text-violet-300 [font-family:var(--font-body)]">- 佐藤様（投資歴2年）</p>
                    </div>
                  </div>
                </div>
                <div className="bg-violet-500/20 rounded-lg p-4 border border-violet-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center text-white font-bold shrink-0">
                      Y
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-violet-200 mb-2 italic [font-family:var(--font-quote)]">
                        "YouTubeの動画も見ていますが、LINEで個別に相談できるのが最大のメリット。迅速な対応に感謝しています。"
                      </p>
                      <p className="text-xs sm:text-sm text-violet-300 [font-family:var(--font-body)]">- 山田様（投資歴8年）</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-violet-500/30">
                <div className="text-center space-y-4">
                  <p className="text-base sm:text-lg text-violet-200 font-semibold [font-family:var(--font-body)]">
                    あなたも成功の仲間入りをしませんか？
                  </p>
                  <Button
                    size="lg"
                    className={cn(
                      'bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700',
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
                    今すぐ無料で始める
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-yellow-900/40 via-orange-800/30 to-red-800/30 backdrop-blur-sm border-2 border-yellow-500/50 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-red-500/10 animate-pulse" />
            <CardContent className="pt-6 relative z-10">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <p className="text-lg sm:text-xl font-semibold text-gray-200 [font-family:var(--font-body)]">
                    もしあなたが知りたいなら：
                  </p>
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </div>
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
                    LINEを追加してください
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={cn(
                      'border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/20 hover:text-yellow-200',
                      'font-bold text-base sm:text-lg',
                      'py-6 sm:py-7 px-8 sm:px-12',
                      'shadow-lg hover:shadow-xl',
                      'transform hover:scale-105 active:scale-95',
                      'transition-all duration-200',
                      'w-full sm:w-auto',
                      '[font-family:var(--font-kaisei-decol)]',
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      window.open('https://youtube.com/@your-channel', '_blank')
                    }}
                  >
                    <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                    YouTubeで学ぶ
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mt-4 [font-family:var(--font-body)]">
                  対策と狙うべきポイントをお送りします。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
