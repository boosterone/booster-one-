import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOOSTER ONE｜集客を加速させる、あなたのビジネスパートナー",
  description:
    "中小企業・飲食店・美容室・パーソナルジム・整体院の集客をトータルサポート。ホームページ制作・LP制作・SNS運用・Googleマップ対策まで、低コスト・スピード対応でワンストップ支援。",
  keywords:
    "ホームページ制作, 集客支援, LP制作, SNS運用, Googleマップ対策, ショート動画編集, 中小企業, 飲食店, 美容室",
  authors: [{ name: "BOOSTER ONE" }],
  other: {
    "contact-email": "riku05221818@yahoo.co.jp",
    "contact-phone": "070-4535-3126",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://booster-one.jp",
    siteName: "BOOSTER ONE",
    title: "BOOSTER ONE｜集客を加速させる、あなたのビジネスパートナー",
    description:
      "中小企業・飲食店・美容室・パーソナルジム・整体院の集客をトータルサポート。ホームページ制作からSNS運用まで、プロが低コスト・スピード対応でサポートします。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BOOSTER ONE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOSTER ONE｜集客を加速させる、あなたのビジネスパートナー",
    description: "中小企業・飲食店・美容室・パーソナルジムの集客をトータルサポート。",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#080808" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
