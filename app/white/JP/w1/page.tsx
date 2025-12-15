'use client'
import { AlertTriangle, ArrowRight, BookOpen, FileText, Info, Mail, Phone, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { kaiseiDecol, notoSansJP, rampartOne } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export default function FinancialLandingPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ${kaiseiDecol.variable} ${notoSansJP.variable} ${rampartOne.variable}`}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Risk Warning Banner - Enhanced for Google Ads Compliance */}
          <Card className="bg-gradient-to-r from-amber-900/40 to-orange-800/30 backdrop-blur-sm border-amber-500/30 shadow-xl mb-8 sm:mb-12">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-200 mb-3 [font-family:var(--font-kaisei-decol)]">
                    重要なお知らせ・リスク警告
                  </h3>
                  <div className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                    <p className="font-semibold text-amber-100">
                      本サイトで提供される情報は、投資助言、投資推奨、または投資勧誘を目的としたものではありません。
                    </p>
                    <p>
                      投資には必ずリスクが伴います。元本割れの可能性があり、投資した資金の一部または全部を失う可能性があります。過去の実績や将来の予測は、将来の成果を保証するものではありません。
                    </p>
                    <p>
                      投資判断は、お客様ご自身の責任において行ってください。投資に関する最終的な判断は、お客様ご自身で行っていただく必要があります。投資を行う前に、必ず金融商品取引法に基づく説明書や契約書をよくお読みいただき、内容を十分にご理解の上、ご自身の判断で投資を行ってください。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Introduction Section */}
          <Card className="bg-gradient-to-r from-indigo-900/40 to-purple-800/30 backdrop-blur-sm border-indigo-500/30 shadow-xl mb-8 sm:mb-12 overflow-hidden">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center ring-4 ring-indigo-500/30">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white [font-family:var(--font-kaisei-decol)]">
                  金融情報提供サービス
                </h2>
                <p className="text-sm sm:text-base text-gray-300 [font-family:var(--font-body)]">
                  市場情報と経済分析を、わかりやすくお届けします
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm mt-4">
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
              最新の市場動向や経済ニュースを、わかりやすく解説します
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

          {/* Content Features Section */}
          <Card className="bg-gradient-to-r from-blue-900/40 to-indigo-800/30 backdrop-blur-sm border-blue-500/30 shadow-xl mb-8 sm:mb-12 overflow-hidden">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-full flex items-center justify-center ring-2 ring-blue-500/30">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-blue-300 [font-family:var(--font-subheading)]">
                  提供コンテンツ
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm">
                  <h4 className="font-semibold text-blue-200 mb-2 [font-family:var(--font-subheading)]">市場情報レポート</h4>
                  <p className="text-sm text-gray-300 [font-family:var(--font-body)]">
                    国内外の市場動向、経済指標、企業情報などを、わかりやすくまとめたレポートをお届けします。
                  </p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm">
                  <h4 className="font-semibold text-blue-200 mb-2 [font-family:var(--font-subheading)]">経済解説記事</h4>
                  <p className="text-sm text-gray-300 [font-family:var(--font-body)]">
                    経済の基礎知識、市場の仕組み、リスク管理の重要性など、学習に役立つ解説記事を提供します。
                  </p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm">
                  <h4 className="font-semibold text-blue-200 mb-2 [font-family:var(--font-subheading)]">週次市場サマリー</h4>
                  <p className="text-sm text-gray-300 [font-family:var(--font-body)]">
                    週ごとの市場動向をまとめたサマリーを、定期的にお届けします。
                  </p>
                </div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm mt-4">
                <p className="text-sm sm:text-base text-blue-200 [font-family:var(--font-body)]">
                  ※ すべてのコンテンツは情報提供のみであり、投資推奨や投資助言ではありません
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Information Subscription - Email Form (More Compliant) */}
          <Card data-subscription-form className="bg-gradient-to-r from-purple-900/40 to-pink-800/30 backdrop-blur-sm border-purple-500/30 shadow-xl mb-8 sm:mb-12">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-purple-200 mb-4 [font-family:var(--font-kaisei-decol)]">
                  最新情報をお届けします
                </h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                  メールアドレスをご登録いただくと、最新の市場情報や経済解説をお届けします。情報提供のみであり、投資推奨ではありません。
                </p>
                <form
                  className="mt-6 max-w-md mx-auto space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const email = formData.get('email') as string
                    // 这里可以添加实际的表单提交逻辑
                    alert(`ご登録ありがとうございます。確認メールを ${email} に送信いたします。`)
                  }}
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="メールアドレスを入力"
                      className={cn(
                        'flex-1 px-4 py-3 rounded-lg',
                        'bg-slate-800/50 border border-purple-500/30',
                        'text-white placeholder-gray-400',
                        'focus:outline-none focus:ring-2 focus:ring-purple-500/50',
                        'transition-all duration-200',
                        '[font-family:var(--font-body)]',
                      )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className={cn(
                        'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
                        'text-white font-bold text-base sm:text-lg',
                        'py-3 px-6 sm:px-8',
                        'shadow-xl hover:shadow-2xl',
                        'transform hover:scale-105 active:scale-95',
                        'transition-all duration-200',
                        'w-full sm:w-auto',
                        '[font-family:var(--font-kaisei-decol)]',
                      )}
                    >
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                      登録する
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 [font-family:var(--font-body)]">
                    ※ ご登録いただいたメールアドレスは、情報配信のみに使用いたします
                  </p>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Company Information Section - Required for Google Ads */}
          <Card className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border-slate-600/30 shadow-xl mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-200 text-center [font-family:var(--font-kaisei-decol)]">
                運営者情報
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed [font-family:var(--font-body)]">
                <div>
                  <p className="font-semibold text-gray-200 mb-2">運営者名：</p>
                  <p>金融情報提供サービス運営事務局</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 mb-2">事業内容：</p>
                  <p>市場情報の収集・分析、経済解説コンテンツの制作・配信、金融教育情報の提供</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 mb-2">資格・登録情報：</p>
                  <p className="text-gray-400">※ 金融商品取引業の登録は行っておりません。投資助言・代理業、投資運用業、第二種金融商品取引業のいずれも行っておりません。本サービスは情報提供のみを行っており、金融商品の販売、投資助言、投資運用等は一切行っておりません。</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 mb-2">所在地：</p>
                  <p className="text-gray-300">〒XXX-XXXX 東京都XX区XX町X-X-X</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>お問い合わせ：info@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>電話：03-XXXX-XXXX（平日 10:00-18:00）</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice - Enhanced Disclaimer */}
          <Card className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border-slate-600/30 shadow-xl mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-200 text-center [font-family:var(--font-kaisei-decol)]">
                免責事項・利用規約
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed [font-family:var(--font-body)]">
                <p>
                  <strong className="text-gray-300">1. 投資助言の非提供：</strong>
                  本サイトで提供される情報は、投資助言、投資推奨、または投資勧誘を目的としたものではありません。本サイトは、一般的な市場情報の提供および教育目的のコンテンツ提供のみを行っております。
                </p>
                <p>
                  <strong className="text-gray-300">2. 投資リスク：</strong>
                  投資には必ずリスクが伴います。元本割れの可能性があり、投資した資金の一部または全部を失う可能性があります。過去の実績や将来の予測は、将来の成果を保証するものではありません。
                </p>
                <p>
                  <strong className="text-gray-300">3. 投資判断の責任：</strong>
                  投資判断は、お客様ご自身の責任において行ってください。投資に関する最終的な判断は、お客様ご自身で行っていただく必要があります。本サイトの情報は、投資判断の参考情報としてのみご利用ください。
                </p>
                <p>
                  <strong className="text-gray-300">4. 個別推奨の非提供：</strong>
                  本サイトの情報は、一般的な市場情報の提供を目的としており、個別の投資商品や投資戦略を推奨するものではありません。お客様の個別の投資状況、投資目的、リスク許容度に応じた投資判断は、適切な金融機関または金融商品取引業者にご相談ください。
                </p>
                <p>
                  <strong className="text-gray-300">5. 損害の免責：</strong>
                  本サイトの情報に基づいて行われた投資行動により生じた損害について、当方は一切の責任を負いません。投資により生じた損失について、当方は補償いたしません。
                </p>
                <p>
                  <strong className="text-gray-300">6. 金融商品取引法の遵守：</strong>
                  投資を行う前に、必ず金融商品取引法に基づく説明書や契約書をよくお読みいただき、内容を十分にご理解の上、ご自身の判断で投資を行ってください。
                </p>
                <p>
                  <strong className="text-gray-300">7. 情報の正確性：</strong>
                  本サイトで提供する情報は、信頼できる情報源から取得した情報に基づいていますが、その正確性、完全性、最新性について保証するものではありません。情報は予告なく変更される場合があります。
                </p>
                <p>
                  <strong className="text-gray-300">8. 広告について：</strong>
                  本サイトは、Google広告等の広告配信サービスを利用しています。広告の内容は、広告主が責任を負います。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legal Links Section */}
          <Card className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border-slate-600/30 shadow-xl mb-8 sm:mb-12">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400 [font-family:var(--font-body)]">
                <Link href="/white/sites/privacy" className="hover:text-gray-300 underline transition-colors">
                  プライバシーポリシー
                </Link>
                <span className="hidden sm:inline">|</span>
                <Link href="/white/sites/terms" className="hover:text-gray-300 underline transition-colors">
                  利用規約
                </Link>
                <span className="hidden sm:inline">|</span>
                <span>
                  ©
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  金融情報提供サービス運営事務局. All rights reserved.
                </span>
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
                      // 滚动到订阅表单
                      const formCard = document.querySelector('[data-subscription-form]')
                      formCard?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                  >
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                    メールで情報を受け取る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="text-xs sm:text-sm text-gray-400 [font-family:var(--font-body)]">
                    ※ 情報提供のみであり、投資推奨や投資助言ではありません
                  </p>
                  <p className="text-xs text-gray-500 [font-family:var(--font-body)]">
                    ※ 本サービスは無料で提供されています
                  </p>
                  <p className="text-xs text-gray-500 [font-family:var(--font-body)]">
                    ※ 配信される情報は教育目的であり、投資判断の参考情報としてのみご利用ください
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
