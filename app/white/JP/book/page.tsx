'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function BookPage() {
  return (
    <>
      <style jsx global>
        {`
        /* 基本リセット */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :root {
          --primary-navy: #0c2340;
          --secondary-blue: #1c3d73;
          --accent-gold: #c7a046;
          --light-beige: #f8f5f0;
          --medium-gray: #5d6d7e;
          --dark-charcoal: #1f2a36;
          --text-dark: #1f2a36;
          --text-medium: #4f6073;
          --border-light: #d5dbdb;
          --success-green: #1f9c6b;
        }
        
        body {
          font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, sans-serif;
          line-height: 1.75;
          color: var(--text-dark);
          background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
          min-height: 100vh;
        }
        
        .page-container {
          max-width: 420px;
          margin: 0 auto;
          padding: 0 16px;
        }
        
        /* ヘッダー */
        .page-header {
          background: radial-gradient(circle at 20% 20%, rgba(199, 160, 70, 0.2), transparent 35%), linear-gradient(145deg, var(--primary-navy) 0%, var(--secondary-blue) 80%);
          color: #ffffff;
          padding: 24px 0 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header-inner {
          position: relative;
          z-index: 2;
        }
        
        .brand-title {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: 1.4px;
          margin-bottom: 6px;
        }
        
        .brand-subtitle {
          font-size: 0.9rem;
          opacity: 0.95;
          letter-spacing: 0.9px;
          margin-bottom: 18px;
        }
        
        .main-heading {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          margin: 18px 0 12px;
        }
        
        .heading-sub {
          font-size: 1rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        /* 価格バッジ */
        .price-badge {
          display: inline-block;
          background: var(--accent-gold);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 1.1rem;
          margin-top: 12px;
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-top: 12px;
        }

        .mini-badge {
          background: rgba(255,255,255,0.12);
          color: #fff;
          padding: 6px 10px;
          border-radius: 12px;
          font-size: 0.85rem;
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        /* 左上角联盟标识角标 */
        .affiliate-badge {
          position: fixed;
          top: 0;
          left: 0;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
          color: white;
          padding: 8px 40px 8px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          z-index: 9999;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
          transform-origin: top left;
          clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%);
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .affiliate-badge::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 12px 36px 0;
          border-color: transparent #c0392b transparent transparent;
        }
        
        /* 運営者情報バナー */
        .operator-banner {
          background: #fff3cd;
          border: 2px solid #ffc107;
          border-radius: 8px;
          padding: 16px;
          margin: 16px 0;
          text-align: center;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #856404;
        }
        
        .operator-banner strong {
          display: block;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #856404;
        }
        
        .affiliate-note {
          margin-top: 10px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.9);
          opacity: 0.95;
        }
        
        /* コンテンツブロック */
        .content-block {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px 20px;
          margin: 20px 0;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 12px rgba(15, 44, 95, 0.05);
        }
        
        .section-title {
          color: var(--primary-navy);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--accent-gold);
          position: relative;
        }
        
        /* 書籍表示 */
        .book-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          margin: 24px 0;
        }
        
        .cover-container {
          width: 240px;
          max-width: 100%;
          height: auto;
          background: none;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0;
          box-shadow: none;
          position: relative;
          overflow: visible;
        }
        
        .cover-title {
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.3;
          z-index: 2;
        }
        
        .cover-subtitle {
          font-size: 0.8rem;
          margin-top: 8px;
          opacity: 0.9;
          z-index: 2;
        }

        .cover-img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }
        
        .book-details {
          text-align: center;
        }
        
        .book-name {
          font-size: 1.5rem;
          color: var(--primary-navy);
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        
        .author-info {
          color: var(--accent-gold);
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 16px;
        }
        
        /* CTA ボタン */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-navy) 0%, #143a6f 60%, var(--accent-gold) 120%);
          color: white;
          padding: 30px 22px;
          border-radius: 18px;
          text-align: center;
          margin: 24px 0;
          box-shadow: 0 8px 24px rgba(12, 35, 64, 0.35);
        }
        
        .cta-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 16px;
        }
        
        .price-display {
          font-size: 1.85rem;
          font-weight: 700;
          margin: 12px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .currency {
          font-size: 1.2rem;
        }
        
        .cta-note {
          margin-top: 10px;
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        .delivery-note {
          font-size: 0.9rem;
          margin-top: 12px;
          opacity: 0.95;
        }
        
        /* Amazon购买链接 */
        .amazon-link {
          display: inline-flex;
          align-items: stretch;
          justify-content: center;
          gap: 0;
          background: linear-gradient(135deg, #ff9900 0%, #ffad33 100%);
          color: white;
          padding: 0;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          margin-top: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 12px rgba(255, 153, 0, 0.3);
        }
        
        .amazon-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(255, 153, 0, 0.4);
        }
        
        .amazon-link:active {
          transform: translateY(0);
        }
        
        .amazon-icon {
          height: 20px;
          width: auto;
          vertical-align: middle;
          background: transparent;
        }

        .amazon-icon-block {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 14px;
          background: #ffffff;
          border-radius: 20px 0 0 20px;
          border: none;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.18);
          min-height: 44px;
          min-width: 72px;
        }

        .amazon-text {
          display: inline-flex;
          align-items: center;
          padding: 0 18px;
          border-radius: 0 20px 20px 0;
          font-weight: 700;
        }

        .amazon-attr {
          margin-top: 10px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
        }

        /* 3 ステップ */
        .steps-block {
          background: #ffffff;
          border-radius: 14px;
          padding: 18px;
          margin: 18px 0;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 12px rgba(15, 44, 95, 0.08);
        }

        .steps-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary-navy);
          margin-bottom: 12px;
        }

        .steps-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .step-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .step-number {
          background: var(--accent-gold);
          color: #fff;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
          flex-shrink: 0;
        }

        .step-text {
          color: var(--text-dark);
          line-height: 1.55;
        }

        /* サンプルプレビュー */
        .preview-block {
          background: linear-gradient(135deg, #f5f7fb 0%, #eef2f7 100%);
          border-radius: 14px;
          padding: 16px;
          margin: 18px 0;
          border: 1px solid var(--border-light);
        }

        .preview-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary-navy);
          margin-bottom: 10px;
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .preview-card {
          background: #fff;
          border-radius: 10px;
          padding: 12px;
          border: 1px solid var(--border-light);
          min-height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-medium);
          font-size: 0.9rem;
          overflow: hidden;
        }

        .preview-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
        }

        /* モバイル固定CTA */
        .cta-sticky {
          position: fixed;
          bottom: 16px;
          left: 12px;
          right: 12px;
          z-index: 9999;
          display: none;
        }

        @media (max-width: 599px) {
          .preview-grid {
            grid-template-columns: 1fr;
          }
          .cta-sticky {
            display: block;
          }
        }
        
        /* 特徴リスト */
        .feature-container {
          margin: 24px 0;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--border-light);
        }
        
        .feature-item:last-child {
          border-bottom: none;
        }
        
        .feature-icon {
          background: var(--light-beige);
          color: var(--accent-gold);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          flex-shrink: 0;
          font-weight: bold;
        }
        
        .feature-text {
          flex: 1;
        }
        
        .feature-text strong {
          color: var(--primary-navy);
          display: block;
          margin-bottom: 4px;
        }
        
        /* 投資家向けハイライト */
        .highlights-block {
          background: #0f2036;
          color: #f4f6fb;
          border-radius: 16px;
          padding: 22px 18px;
          margin: 18px 0 6px;
          box-shadow: 0 6px 20px rgba(12, 35, 64, 0.25);
        }
        
        .highlights-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: 0.4px;
        }
        
        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .highlights-icon {
          color: var(--accent-gold);
          font-weight: 800;
          margin-top: 1px;
        }
        
        /* 学習項目 */
        .learning-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 20px;
        }
        
        .learning-card {
          background: linear-gradient(135deg, #ffffff 0%, var(--light-beige) 100%);
          border-left: 4px solid var(--accent-gold);
          padding: 20px 18px;
          border-radius: 0 10px 10px 0;
          box-shadow: 0 2px 8px rgba(15, 44, 95, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .learning-card:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(15, 44, 95, 0.12);
        }
        
        .learning-card h4 {
          color: var(--primary-navy);
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.4;
        }
        
        .learning-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-medium);
        }
        
        /* プロフィール */
        .profile-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }
        
        .profile-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #5d6d7e 0%, #2c3e50 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.8rem;
          font-weight: 600;
        }
        
        .profile-content h3 {
          color: var(--primary-navy);
          font-size: 1.2rem;
          margin-bottom: 6px;
        }
        
        .profile-role {
          color: var(--accent-gold);
          font-weight: 600;
          margin-bottom: 12px;
          font-size: 0.95rem;
        }
        
        /* 出版情報 */
        .publishing-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }
        
        .info-box {
          background: #f8f9fa;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid var(--border-light);
        }
        
        .info-box h4 {
          color: var(--primary-navy);
          font-size: 1rem;
          margin-bottom: 8px;
        }
        
        /* コンタクト */
        .contact-section {
          background: linear-gradient(160deg, var(--dark-charcoal) 0%, #34495e 100%);
          color: white;
          padding: 28px 20px;
          border-radius: 16px;
          margin: 24px 0;
          text-align: center;
        }
        
        .contact-title {
          font-size: 1.3rem;
          margin-bottom: 20px;
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }
        
        .contact-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        
        .contact-link {
          color: var(--accent-gold);
          text-decoration: none;
          font-weight: 600;
        }
        
        .contact-link:hover {
          text-decoration: underline;
        }
        
        /* 会社情報 */
        .company-info {
          background: #f8f9fa;
          padding: 24px 20px;
          border-radius: 12px;
          margin: 20px 0;
          border: 1px solid var(--border-light);
        }
        
        .company-info h4 {
          color: var(--primary-navy);
          font-size: 1.1rem;
          margin-bottom: 16px;
          font-weight: 700;
        }
        
        .info-grid {
          display: grid;
          gap: 12px;
        }
        
        .info-row {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 12px;
          font-size: 0.9rem;
        }
        
        .info-label {
          color: var(--text-medium);
          font-weight: 600;
        }
        
        .info-value {
          color: var(--text-dark);
        }
        
        /* フッター */
        .page-footer {
          background: var(--dark-charcoal);
          color: rgba(255, 255, 255, 0.85);
          padding: 30px 0 20px;
          font-size: 0.85rem;
        }
        
        .disclaimer-section {
          margin-bottom: 24px;
        }
        
        .disclaimer-section h4 {
          color: #ffffff;
          font-size: 1rem;
          margin-bottom: 12px;
        }
        
        .legal-notice {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 20px;
          margin-top: 20px;
        }
        
        .copyright-area {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
        }
        
        /* レスポンシブ調整 */
        @media (min-width: 480px) {
          .page-container {
            padding: 0 24px;
          }
          
          .learning-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 479px) {
          .publishing-info {
            grid-template-columns: 1fr;
          }
          
          .learning-card {
            padding: 18px 16px;
          }
          
          .info-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }
        
        @media (min-width: 600px) {
          .page-container {
            max-width: 600px;
          }
        }
      `}
      </style>

      {/* 左上角联盟标识角标 */}
      <div className="affiliate-badge">
        アフィリエイト紹介
      </div>

      {/* ページヘッダー */}
      <header className="page-header">
        <div className="page-container">
          <div className="header-inner">
            <div className="brand-title">書籍紹介ページ</div>
            <h1 className="main-heading">
              買い時・売り時がひと目でわかる
              <br />
              株価チャート大全
            </h1>
            <p className="heading-sub">100のチャートパターンで「待つ・仕掛ける・引く」の判断軸を体系化。個人投資家の武器になる実践ガイド。</p>
            <div className="price-badge">参考 ¥1,650</div>
            <div className="operator-banner">
              <strong>【重要】本ページについて</strong>
              本ページはアフィリエイト（紹介）プログラムに参加している独立した運営者が運営する紹介ページです。Amazon.co.jp の公式ページではありません。書籍の購入・決済・配送・返品等はすべて Amazon.co.jp で行われます。本ページの運営者は書籍の出版・販売・配送を行っておらず、投資アドバイスや金融サービスも提供しておりません。
            </div>
            <div className="affiliate-note">※ 広告（アフィリエイト）リンクを含みます。価格・在庫はAmazonで最新情報をご確認ください。</div>
            <div className="badge-row">
              <span className="mini-badge">100パターン</span>
              <span className="mini-badge">ドリル付き</span>
              <span className="mini-badge">リスク管理</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="page-container">
        {/* 購入CTA */}
        <section className="cta-section">
          <h2 className="cta-title">Amazonで価格・在庫を確認</h2>
          <div className="price-display">
            <span className="currency">¥</span>
            <span>1,650</span>
          </div>
          <a
            href="https://www.amazon.co.jp/dp/4262174808?tag=awajiweb-22"
            data-track-conversion="true"
            target="_blank"
            rel="noopener noreferrer"
            className="amazon-link"
            style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)', color: 'white', fontSize: '1.05rem' }}
          >
            <span className="amazon-icon-block">
              <Image
                src="/stockbookseller/Amazon.co.jp_logo.svg"
                alt="Amazon.co.jp"
                className="amazon-icon"
                width={72}
                height={20}
              />
            </span>
            <span className="amazon-text">Amazonで詳しく見る</span>
          </a>
          <p className="delivery-note">※ 購入・決済は Amazon.co.jp で行われます</p>
          <p className="delivery-note">※ 広告（アフィリエイト）リンクを含みます。価格・在庫・配送条件はAmazonでご確認ください。</p>
        </section>

        {/* 投資家向けハイライト */}
        <section className="highlights-block">
          <div className="highlights-title">投資家にうれしいポイント</div>
          <ul className="highlights-list">
            <li>
              <span className="highlights-icon">●</span>
              <span>100のチャートパターンを網羅し、仕掛けどころと撤退ラインを明確化</span>
            </li>
            <li>
              <span className="highlights-icon">●</span>
              <span>図解メインで短時間でもサッと確認できる実践レイアウト</span>
            </li>
            <li>
              <span className="highlights-icon">●</span>
              <span>シナリオ別のドリルで「待つ/攻める/守る」を体で覚える</span>
            </li>
            <li>
              <span className="highlights-icon">●</span>
              <span>リスク管理とエントリー/イグジット基準を明確化する実践チャート例を多数収録</span>
            </li>
          </ul>
        </section>

        {/* ステップ */}
        <section className="steps-block">
          <div className="steps-title">最短で使いこなす3ステップ</div>
          <div className="steps-list">
            <div className="step-item">
              <span className="step-number">1</span>
              <div className="step-text">パターン別に自分の弱点を確認し、気になる章から拾い読み</div>
            </div>
            <div className="step-item">
              <span className="step-number">2</span>
              <div className="step-text">ドリルでエントリー/イグジットの判断軸を反復、マイルールをメモ</div>
            </div>
            <div className="step-item">
              <span className="step-number">3</span>
              <div className="step-text">実トレード前に該当パターンを再確認し、リスク許容度と併せて実行</div>
            </div>
          </div>
        </section>

        {/* プレビュー */}
        <section className="preview-block">
          <div className="preview-title">誌面イメージ（抜粋イメージ）</div>
          <div className="preview-grid">
            <div className="preview-card">
              <Image
                src="/stockbookseller/images/81a4WOeHlQL._SL1500_.jpg"
                alt="チャートパターン図解例"
                className="preview-img"
                width={400}
                height={600}
              />
            </div>
            <div className="preview-card">
              <Image
                src="/stockbookseller/images/81GSeX3d1DL._SL1500_.jpg"
                alt="エントリー損切り位置取り例"
                className="preview-img"
                width={400}
                height={600}
              />
            </div>
            <div className="preview-card">
              <Image
                src="/stockbookseller/images/81LboNAlQFL._SL1500_.jpg"
                alt="シナリオ別ドリル問題例"
                className="preview-img"
                width={400}
                height={600}
              />
            </div>
            <div className="preview-card">
              <Image
                src="/stockbookseller/images/81kdzHnVKvL._SL1500_.jpg"
                alt="メモ欄活用例"
                className="preview-img"
                width={400}
                height={600}
              />
            </div>
          </div>
        </section>

        {/* 書籍概要 */}
        <section className="content-block">
          <h2 className="section-title">書籍紹介</h2>
          <div className="book-display">
            <div className="cover-container">
              <Image
                src="/stockbookseller/images/71vIEA17pjL._SL1500_.jpg"
                alt="買い時・売り時がひと目でわかる 株価チャート大全 表紙"
                className="cover-img"
                width={240}
                height={340}
              />
            </div>
            <div className="book-details">
              <h2 className="book-name">
                買い時・売り時がひと目でわかる
                <br />
                株価チャート大全
              </h2>
              <div className="author-info">監修：戸松 信博</div>
            </div>
          </div>

          <div className="feature-container">
            <div className="feature-item">
              <div className="feature-icon">1</div>
              <div className="feature-text">
                <strong>プロが厳選！頻出「買い・売りパターン」を網羅</strong>
                相場を生き抜く最強の武器。株の入門書は数多くあるが、意外と少ないチャート網羅本
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">2</div>
              <div className="feature-text">
                <strong>パターンの数は100</strong>
                チャート図をふんだんに盛り込み、直感的にわかる誌面で、100種類の買い・売りパターンを紹介
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">3</div>
              <div className="feature-text">
                <strong>投資家の心理をイラストで解説</strong>
                「ここで買いが集まったのか」「みんな、売るのをためらっているなぁ…」など、投資家の気持ちをわかりやすく解説
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">4</div>
              <div className="feature-text">
                <strong>ドリルで実戦力アップ</strong>
                簡単なおさらいではなく、市場を読めるような問題で実践力を身につける
              </div>
            </div>
          </div>
        </section>

        {/* 学習内容 */}
        <section className="content-block">
          <h2 className="section-title">本書の構成</h2>
          <div className="learning-grid">
            <div className="learning-card">
              <h4>第1章 チャートから読み取れる基本の判断材料</h4>
              <p>チャート分析の基礎となる判断材料を学び、相場の動きを読み取る基本を身につける</p>
            </div>
            <div className="learning-card">
              <h4>第2章 チャートを構成する基本の要素</h4>
              <p>チャートを構成する基本的な要素を理解し、値動きを分析するための基礎知識を習得</p>
            </div>
            <div className="learning-card">
              <h4>第3章 ローソク足を見て値動きの基本を知る</h4>
              <p>ローソク足の見方と値動きの基本パターンを学び、相場の動きを把握する力を養う</p>
            </div>
            <div className="learning-card">
              <h4>第4章 ローソク足でつくられる基本のチャートパターン</h4>
              <p>ローソク足で形成される基本的なチャートパターンを理解し、買い時・売り時を見極める</p>
            </div>
            <div className="learning-card">
              <h4>第5章 ローソク足＋移動平均線で値動きを分析する</h4>
              <p>移動平均線とローソク足を組み合わせた分析方法を学び、トレンドを正確に把握する</p>
            </div>
            <div className="learning-card">
              <h4>第6章 テクニカル指標を使って値動きを分析する</h4>
              <p>ボリンジャーバンド、エンベロープ、サイコロジカル・ラインなど、テクニカル指標の活用法を習得</p>
            </div>
            <div className="learning-card">
              <h4>第7章 状況別にチャートを見て特徴を分析する</h4>
              <p>増資発表、経済ショック、セルインメイのアノマリーなど、様々な状況下でのチャート分析手法を学ぶ</p>
            </div>
          </div>
        </section>

        {/* 監修者 */}
        <section className="content-block">
          <h2 className="section-title">監修者について</h2>
          <div className="profile-area">
            <div className="profile-image">戸松</div>
            <div className="profile-content">
              <h3>戸松 信博</h3>
              <div className="profile-role">監修</div>
              <p>本書は、「投資が必要だと思い株式投資を始めたものの、思うように利益を出せていない」方や、「自分の武器を増やしたい」方に向けた本です。噂や市場の雰囲気に流されず、冷静かつ柔軟に対応することができるよう、プロが厳選した100の買い・売りパターンを網羅しています。</p>
            </div>
          </div>
        </section>

        {/* 書籍情報 */}
        <section className="content-block">
          <h2 className="section-title">書籍詳細情報</h2>
          <div className="publishing-info">
            <div className="info-box">
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
            <div className="info-box">
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
        <section className="contact-section">
          <h3 className="contact-title">購入について</h3>
          <div className="contact-details">
            <div className="contact-line">
              <strong>購入先</strong>
              <a
                href="https://www.amazon.co.jp/dp/4262174808?tag=awajiweb-22"
                data-track-conversion="true"
                target="_blank"
                rel="noopener noreferrer"
                className="amazon-link"
                style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)', color: 'white', fontSize: '1.05rem' }}
              >
                <span className="amazon-icon-block">
                  <Image
                    src="/stockbookseller/Amazon.co.jp_logo.svg"
                    alt="Amazon.co.jp"
                    className="amazon-icon"
                    width={72}
                    height={20}
                  />
                </span>
                <span className="amazon-text">Amazonで詳しく見る</span>
              </a>
            </div>
            <div className="contact-line">
              <strong>サポート</strong>
              <span>購入・配送・返品に関するお問い合わせはAmazon.co.jpのヘルプをご確認ください。</span>
            </div>
          </div>
        </section>

        {/* 購入CTA */}
        <section className="cta-section">
          <h2 className="cta-title">Amazonで価格・在庫を確認</h2>
          <div className="price-display">
            <span className="currency">¥</span>
            <span>1,650</span>
          </div>
          <a
            href="https://www.amazon.co.jp/dp/4262174808?tag=awajiweb-22"
            data-track-conversion="true"
            target="_blank"
            rel="noopener noreferrer"
            className="amazon-link"
            style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)', color: 'white', fontSize: '1.05rem' }}
          >
            <span className="amazon-icon-block">
              <Image
                src="/stockbookseller/Amazon.co.jp_logo.svg"
                alt="Amazon.co.jp"
                className="amazon-icon"
                width={72}
                height={20}
              />
            </span>
            <span className="amazon-text">Amazonで詳しく見る</span>
          </a>
          <p className="delivery-note">※ 購入・決済は Amazon.co.jp で行われます</p>
          <p className="delivery-note">※ 広告（アフィリエイト）リンクを含みます。価格・在庫・配送条件はAmazonでご確認ください。</p>
        </section>
      </main>

      {/* ページフッター */}
      <footer className="page-footer">
        <div className="page-container">
          <div className="disclaimer-section">
            <h4>注意事項</h4>
            <p>本書籍は投資に関する教育資料であり、特定の金融商品の推奨や投資勧誘を目的とするものではありません。記載内容は一般的な情報提供を目的としており、個別の投資判断の根拠となるものではありません。投資に関する決定は、お客様ご自身の責任において行っていただきますようお願いいたします。</p>
          </div>

          <div className="disclaimer-section">
            <h4>リスクについて</h4>
            <p>株式投資には価格変動リスク、流動性リスク、為替リスクなど様々なリスクが存在します。投資元本は保証されておらず、市場環境の変化により損失が生じる可能性があります。過去の実績は将来の成果を保証するものではありません。</p>
          </div>

          <div className="disclaimer-section">
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

          <div className="disclaimer-section">
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

          <div className="disclaimer-section">
            <h4>アフィリエイトプログラムについて</h4>
            <p>本ページは、Amazonアソシエイト・プログラムその他のアフィリエイトプログラムに参加しており、適切なリンク設定により紹介料を得ています。本ページの運営者は、Amazon.co.jp をはじめとする販売サイトから独立した第三者であり、販売サイトの商品やサービスについて一切の責任を負いません。</p>
          </div>

          <div className="legal-notice">
            <p>本書籍に記載の会社名、商品名は、各社の商標または登録商標です。本書籍の内容の一部または全部を無断で複製、転載することを禁じます。記載内容は発行時点の情報に基づいており、その後変更される場合があります。</p>
          </div>

          <p className="amazon-attr">
            Amazon.co.jp logo by Amazon -
            <a href="https://www.amazon.co.jp/" target="_blank" rel="noopener noreferrer">https://www.amazon.co.jp/</a>
            , Public Domain,
            <a href="https://commons.wikimedia.org/w/index.php?curid=49782418" target="_blank" rel="noopener noreferrer">Link</a>
          </p>

          <div className="copyright-area">
            <p>© 2024 アフィリエイト紹介ページ運営者</p>
          </div>
        </div>
      </footer>

      {/* モバイル固定CTA */}
      <div className="cta-sticky">
        <a
          href="https://www.amazon.co.jp/dp/4262174808?tag=awajiweb-22"
          data-track-conversion="true"
          target="_blank"
          rel="noopener noreferrer"
          className="amazon-link"
          style={{ width: '100%', background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)', color: 'white', fontSize: '1.05rem' }}
        >
          <span className="amazon-icon-block">
            <Image
              src="/stockbookseller/Amazon.co.jp_logo.svg"
              alt="Amazon.co.jp"
              className="amazon-icon"
              width={72}
              height={20}
            />
          </span>
          <span className="amazon-text">Amazonで詳しく見る</span>
        </a>
      </div>
    </>
  )
}
