import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '仮想通貨Lab',
  description: '仮想通貨・NFT情報',
  openGraph: { title: '仮想通貨Lab', description: '仮想通貨・NFT情報', type: 'website', locale: 'ja_JP', siteName: '仮想通貨Lab' },
  twitter: { card: 'summary_large_image', title: '仮想通貨Lab', description: '仮想通貨・NFT情報' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="8c64b1447c588760" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "仮想通貨Lab", "description": "仮想通貨・NFT情報", "url": "https://crypto-lab-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}