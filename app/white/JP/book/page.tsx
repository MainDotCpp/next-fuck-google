'use client'

import Image from 'next/image'
import styles from './book.module.css'

export default function BookPage() {
  return (
    <div className={styles.bookPageWrapper}>

      {/* 左上角联盟标识角标 */}
      <div className={styles.affiliateBadge}>
        アフィリエイト紹介
      </div>

      {/* ページヘッダー */}
      <header className={styles.pageHeader}>
        <div className={styles.pageContainer}>
          <div className={styles.headerInner}>
            <div className={styles.brandTitle}>書籍紹介ページ</div>
            <h1 className={styles.mainHeading}>
              買い時・売り時がひと目でわかる
              <br />
              株価チャート大全
            </h1>
            <p className={styles.headingSub}>100のチャートパターンで「待つ・仕掛ける・引く」の判断軸を体系化。個人投資家の武器になる実践ガイド。</p>
            <div className={styles.priceBadge}>参考 ¥1,650</div>
            <div className={styles.operatorBanner}>
              <strong>【重要】本ページについて</strong>
              本ページはアフィリエイト（紹介）プログラムに参加している独立した運営者が運営する紹介ページです。Amazon.co.jp の公式ページではありません。書籍の購入・決済・配送・返品等はすべて Amazon.co.jp で行われます。本ページの運営者は書籍の出版・販売・配送を行っておらず、投資アドバイスや金融サービスも提供しておりません。
            </div>
            <div className={styles.affiliateNote}>※ 広告（アフィリエイト）リンクを含みます。価格・在庫はAmazonで最新情報をご確認ください。</div>
            <div className={styles.badgeRow}>
              <span className={styles.miniBadge}>100パターン</span>
              <span className={styles.miniBadge}>ドリル付き</span>
              <span className={styles.miniBadge}>リスク管理</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className={styles.pageContainer}>
        {/* 購入CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Amazonで価格・在庫を確認</h2>
          <div className={styles.priceDisplay}>
            <span className={styles.currency}>¥</span>
            <span>1,650</span>
          </div>
          <a
            href="https://www.amazon.co.jp/dp/4262174808?tag=awajiweb-22"
            data-track-conversion="true"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.amazonLink}
            style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)', color: 'white', fontSize: '1.05rem' }}
          >
            <span className={styles.amazonIconBlock}>
              <Image
                src="/stockbookseller/Amazon.co.jp_logo.svg"
                alt="Amazon.co.jp"
                className={styles.amazonIcon}
                width={72}
                height={20}
              />
            </span>
            <span className={styles.amazonText}>Amazonで詳しく見る</span>
          </a>
          <p className={styles.deliveryNote}>※ 購入・決済は Amazon.co.jp で行われます</p>
          <p className={styles.deliveryNote}>※ 広告（アフィリエイト）リンクを含みます。価格・在庫・配送条件はAmazonでご確認ください。</p>
        </section>

        {/* 投資家向けハイライト */}
        <section className={styles.highlightsBlock}>
          <div className={styles.highlightsTitle}>投資家にうれしいポイント</div>
          <ul className={styles.highlightsList}>
            <li>
              <span className={styles.highlightsIcon}>●</span>
              <span>100のチャートパターンを網羅し、仕掛けどころと撤退ラインを明確化</span>
            </li>
            <li>
              <span className={styles.highlightsIcon}>●</span>
              <span>図解メインで短時間でもサッと確認できる実践レイアウト</span>
            </li>
            <li>
              <span className={styles.highlightsIcon}>●</span>
              <span>シナリオ別のドリルで「待つ/攻める/守る」を体で覚える</span>
            </li>
            <li>
              <span className={styles.highlightsIcon}>●</span>
              <span>リスク管理とエントリー/イグジット基準を明確化する実践チャート例を多数収録</span>
            </li>
          </ul>
        </section>

        {/* ステップ */}
        <section className={styles.stepsBlock}>
          <div className={styles.stepsTitle}>最短で使いこなす3ステップ</div>
          <div className={styles.stepsList}>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepText}>パターン別に自分の弱点を確認し、気になる章から拾い読み</div>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepText}>ドリルでエントリー/イグジットの判断軸を反復、マイルールをメモ</div>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepText}>実トレード前に該当パターンを再確認し、リスク許容度と併せて実行</div>
            </div>
          </div>
        </section>

        {/* プレビュー */}
        <section className={styles.previewBlock}>
          <div className={styles.previewTitle}>誌面イメージ（抜粋イメージ）</div>
          <div className={styles.previewGrid}>
            <div className={styles.previewCard}>
              <Image
                src="/stockbookseller/images/81a4WOeHlQL._SL1500_.jpg"
                alt="チャートパターン図解例"
                className={styles.previewImg}
                width={400}
                height={600}
              />
            </div>
            <div className={styles.previewCard}>
              <Image
                src="/stockbookseller/images/81GSeX3d1DL._SL1500_.jpg"
                alt="エントリー損切り位置取り例"
                className={styles.previewImg}
                width={400}
                height={600}
              />
            </div>
            <div className={styles.previewCard}>
              <Image
                src="/stockbookseller/images/81LboNAlQFL._SL1500_.jpg"
                alt="シナリオ別ドリル問題例"
                className={styles.previewImg}
                width={400}
                height={600}
              />
            </div>
            <div className={styles.previewCard}>
              <Image
                src="/stockbookseller/images/81kdzHnVKvL._SL1500_.jpg"
                alt="メモ欄活用例"
                className={styles.previewImg}
                width={400}
                height={600}
              />
            </div>
          </div>
        </section>

        {/* 書籍概要 */}
        <section className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>書籍紹介</h2>
          <div className={styles.bookDisplay}>
            <div className={styles.coverContainer}>
              <Image
                src="/stockbookseller/images/71vIEA17pjL._SL1500_.jpg"
                alt="買い時・売り時がひと目でわかる 株価チャート大全 表紙"
                className={styles.coverImg}
                width={240}
                height={340}
              />
            </div>
            <div className={styles.bookDetails}>
              <h2 className={styles.bookName}>
                買い時・売り時がひと目でわかる
                <br />
                株価チャート大全
              </h2>
              <div className={styles.authorInfo}>監修：戸松 信博</div>
            </div>
          </div>

          <div className={styles.featureContainer}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>1</div>
              <div className={styles.featureText}>
                <strong>プロが厳選！頻出「買い・売りパターン」を網羅</strong>
                相場を生き抜く最強の武器。株の入門書は数多くあるが、意外と少ないチャート網羅本
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>2</div>
              <div className={styles.featureText}>
                <strong>パターンの数は100</strong>
                チャート図をふんだんに盛り込み、直感的にわかる誌面で、100種類の買い・売りパターンを紹介
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>3</div>
              <div className={styles.featureText}>
                <strong>投資家の心理をイラストで解説</strong>
                「ここで買いが集まったのか」「みんな、売るのをためらっているなぁ…」など、投資家の気持ちをわかりやすく解説
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>4</div>
              <div className={styles.featureText}>
                <strong>ドリルで実戦力アップ</strong>
                簡単なおさらいではなく、市場を読めるような問題で実践力を身につける
              </div>
            </div>
          </div>
        </section>

        {/* 学習内容 */}
        <section className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>本書の構成</h2>
          <div className={styles.learningGrid}>
            <div className={styles.learningCard}>
              <h4>第1章 チャートから読み取れる基本の判断材料</h4>
              <p>チャート分析の基礎となる判断材料を学び、相場の動きを読み取る基本を身につける</p>
            </div>
            <div className={styles.learningCard}>
              <h4>第2章 チャートを構成する基本の要素</h4>
              <p>チャートを構成する基本的な要素を理解し、値動きを分析するための基礎知識を習得</p>
            </div>
            <div className={styles.learningCard}>
              <h4>第3章 ローソク足を見て値動きの基本を知る</h4>
              <p>ローソク足の見方と値動きの基本パターンを学び、相場の動きを把握する力を養う</p>
            </div>
            <div className={styles.learningCard}>
              <h4>第4章 ローソク足でつくられる基本のチャートパターン</h4>
              <p>ローソク足で形成される基本的なチャートパターンを理解し、買い時・売り時を見極める</p>
            </div>
            <div className={styles.learningCard}>
              <h4>第5章 ローソク足＋移動平均線で値動きを分析する</h4>
              <p>移動平均線とローソク足を組み合わせた分析方法を学び、トレンドを正確に把握する</p>
            </div>
            <div className={styles.learningCard}>
              <h4>第6章 テクニカル指標を使って値動きを分析する</h4>
              <p>ボリンジャーバンド、エンベロープ、サイコロジカル・ラインなど、テクニカル指標の活用法を習得</p>
            </div>
            <div className={styles.learningCard}>
              <h4>第7章 状況別にチャートを見て特徴を分析する</h4>
              <p>増資発表、経済ショック、セルインメイのアノマリーなど、様々な状況下でのチャート分析手法を学ぶ</p>
            </div>
          </div>
        </section>

        {/* 監修者 */}
        <section className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>監修者について</h2>
          <div className={styles.profileArea}>
            <div className={styles.profileImage}>戸松</div>
            <div className={styles.profileContent}>
              <h3>戸松 信博</h3>
              <div className={styles.profileRole}>監修</div>
              <p>本書は、「投資が必要だと思い株式投資を始めたものの、思うように利益を出せていない」方や、「自分の武器を増やしたい」方に向けた本です。噂や市場の雰囲気に流されず、冷静かつ柔軟に対応することができるよう、プロが厳選した100の買い・売りパターンを網羅しています。</p>
            </div>
          </div>
        </section>

        {/* 書籍情報 */}
        <section className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>書籍詳細情報</h2>
          <div className={styles.publishingInfo}>
            <div className={styles.infoBox}>
              <h4>基本情報</h4>
              <p>
                フォーマット：A5 判
                <br />
                ページ数：256
                <br />
                ISBN：978-4-262-17480-8
                <br />
                参考価格：1,650円（本体価格 1,500円+税10%）※Amazonで最新価格をご確認ください
              </p>
            </div>
            <div className={styles.infoBox}>
              <h4>学習内容</h4>
              <p>
                チャート分析の基本
                <br />
                ローソク足の見方
                <br />
                移動平均線の活用法
                <br />
                テクニカル指標の使い方
                <br />
                100の買い・売りパターン
              </p>
            </div>
          </div>
        </section>

        {/* 購入案内 */}
        <section className={styles.contactSection}>
          <h3 className={styles.contactTitle}>購入について</h3>
          <div className={styles.contactDetails}>
            <div className={styles.contactLine}>
              <strong>購入先</strong>
              <a
                href="https://www.amazon.co.jp/dp/4262174808?tag=awajiweb-22"
                data-track-conversion="true"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.amazonLink}
                style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)', color: 'white', fontSize: '1.05rem' }}
              >
                <span className={styles.amazonIconBlock}>
                  <Image
                    src="/stockbookseller/Amazon.co.jp_logo.svg"
                    alt="Amazon.co.jp"
                    className={styles.amazonIcon}
                    width={72}
                    height={20}
                  />
                </span>
                <span className={styles.amazonText}>Amazonで詳しく見る</span>
              </a>
            </div>
            <div className={styles.contactLine}>
              <strong>サポート</strong>
              <span>購入・配送・返品に関するお問い合わせはAmazon.co.jpのヘルプをご確認ください。</span>
            </div>
          </div>
        </section>

        {/* 購入CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Amazonで価格・在庫を確認</h2>
          <div className={styles.priceDisplay}>
            <span className={styles.currency}>¥</span>
            <span>1,650</span>
          </div>
          <a
            href="https://www.amazon.co.jp/dp/4262174808?tag=awajiweb-22"
            data-track-conversion="true"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.amazonLink}
            style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)', color: 'white', fontSize: '1.05rem' }}
          >
            <span className={styles.amazonIconBlock}>
              <Image
                src="/stockbookseller/Amazon.co.jp_logo.svg"
                alt="Amazon.co.jp"
                className={styles.amazonIcon}
                width={72}
                height={20}
              />
            </span>
            <span className={styles.amazonText}>Amazonで詳しく見る</span>
          </a>
          <p className={styles.deliveryNote}>※ 購入・決済は Amazon.co.jp で行われます</p>
          <p className={styles.deliveryNote}>※ 広告（アフィリエイト）リンクを含みます。価格・在庫・配送条件はAmazonでご確認ください。</p>
        </section>
      </main>

      {/* ページフッター */}
      <footer className={styles.pageFooter}>
        <div className={styles.pageContainer}>
          <div className={styles.disclaimerSection}>
            <h4>注意事項</h4>
            <p>本書籍は投資に関する教育資料であり、特定の金融商品の推奨や投資勧誘を目的とするものではありません。記載内容は一般的な情報提供を目的としており、個別の投資判断の根拠となるものではありません。投資に関する決定は、お客様ご自身の責任において行っていただきますようお願いいたします。</p>
          </div>

          <div className={styles.disclaimerSection}>
            <h4>リスクについて</h4>
            <p>株式投資には価格変動リスク、流動性リスク、為替リスクなど様々なリスクが存在します。投資元本は保証されておらず、市場環境の変化により損失が生じる可能性があります。過去の実績は将来の成果を保証するものではありません。</p>
          </div>

          <div className={styles.disclaimerSection}>
            <h4>運営者について</h4>
            <p>
              <strong>本ページの運営者</strong>
              ：本ページは、Amazonアソシエイト・プログラムその他のアフィリエイトプログラムに参加している独立した運営者（個人または法人）が運営する紹介ページです。
            </p>
            <p>
              <strong>運営者の業務範囲</strong>
              ：本ページの運営者は、書籍の出版・販売・配送・返品等の業務を行っておりません。また、投資アドバイス、金融商品の販売、金融サービス等も提供しておりません。本ページは書籍の紹介のみを目的としており、購入手続き・支払い・配送・返品等はすべてリンク先の販売サイト（Amazon.co.jp等）で行われます。
            </p>
            <p>
              <strong>Amazon.co.jpとの関係</strong>
              ：本ページは Amazon.co.jp の公式ページではなく、Amazon.co.jp の子会社、関連会社、または代理店でもありません。本ページの運営者は Amazon.co.jp とは独立した第三者です。
            </p>
          </div>

          <div className={styles.disclaimerSection}>
            <h4>特定商取引法に基づく表記</h4>
            <p>
              <strong>販売事業者</strong>
              ：Amazon.co.jp（Amazon Japan合同会社）
              <br />
              <strong>販売サイト</strong>
              ：
              <a href="https://www.amazon.co.jp/" target="_blank" rel="noopener noreferrer">https://www.amazon.co.jp/</a>
              <br />
              <strong>本ページの性質</strong>
              ：本ページはアフィリエイト（紹介）プログラムに参加している運営者が運営する紹介ページです。購入手続き・支払い・配送・返品等はすべてリンク先の販売サイト（Amazon.co.jp等）の条件に従います。価格・在庫・配送条件・返品条件は販売サイトで最新情報をご確認ください。
            </p>
          </div>

          <div className={styles.disclaimerSection}>
            <h4>アフィリエイトプログラムについて</h4>
            <p>本ページは、Amazonアソシエイト・プログラムその他のアフィリエイトプログラムに参加しており、適切なリンク設定により紹介料を得ています。本ページの運営者は、Amazon.co.jp をはじめとする販売サイトから独立した第三者であり、販売サイトの商品やサービスについて一切の責任を負いません。</p>
          </div>

          <div className={styles.legalNotice}>
            <p>本書籍に記載の会社名、商品名は、各社の商標または登録商標です。本書籍の内容の一部または全部を無断で複製、転載することを禁じます。記載内容は発行時点の情報に基づいており、その後変更される場合があります。</p>
          </div>

          <p className={styles.amazonAttr}>
            Amazon.co.jp logo by Amazon -
            <a href="https://www.amazon.co.jp/" target="_blank" rel="noopener noreferrer">https://www.amazon.co.jp/</a>
            , Public Domain,
            <a href="https://commons.wikimedia.org/w/index.php?curid=49782418" target="_blank" rel="noopener noreferrer">Link</a>
          </p>

          <div className={styles.copyrightArea}>
            <p>© 2024 アフィリエイト紹介ページ運営者</p>
          </div>
        </div>
      </footer>

      {/* モバイル固定CTA */}
      <div className={styles.ctaSticky}>
        <a
          href="https://www.amazon.co.jp/dp/4262174808?tag=awajiweb-22"
          data-track-conversion="true"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.amazonLink}
          style={{ width: '100%', background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)', color: 'white', fontSize: '1.05rem' }}
        >
          <span className={styles.amazonIconBlock}>
            <Image
              src="/stockbookseller/Amazon.co.jp_logo.svg"
              alt="Amazon.co.jp"
              className={styles.amazonIcon}
              width={72}
              height={20}
            />
          </span>
          <span className={styles.amazonText}>Amazonで詳しく見る</span>
        </a>
      </div>
    </div>
  )
}
