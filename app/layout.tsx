import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yuri OS - AI-Powered Prediction Markets",
    template: "%s | Yuri OS"
  },
  description: "Predict, Analyze, and Earn with Yuri OS. Advanced AI model trained on thousands of sources provides intelligent forecasts and market insights for prediction markets on Solana and Ethereum.",
  keywords: [
    "prediction markets",
    "AI analysis",
    "ElizaOS",
    "Polymarket",
    "crypto trading",
    "market forecasting",
    "Solana",
    "Ethereum",
    "DeFi",
    "YURI token",
    "AI trading",
    "market intelligence"
  ],
  authors: [
    {
      name: "Yuri OS Team",
      url: "https://yuriosai.com"
    }
  ],
  creator: "Yuri OS",
  publisher: "Yuri OS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yuriosai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yuriosai.com",
    title: "Yuri OS - AI-Powered Prediction Markets",
    description: "Predict, Analyze, and Earn with Yuri OS. Advanced AI model trained on thousands of sources provides intelligent forecasts and market insights.",
    siteName: "Yuri OS",
    images: [
      {
        url: "/images/backgrounds/sky-clouds.png",
        width: 1200,
        height: 630,
        alt: "Yuri OS - AI-Powered Prediction Markets"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri OS - AI-Powered Prediction Markets",
    description: "Predict, Analyze, and Earn with Yuri OS. Advanced AI forecasts for prediction markets.",
    creator: "@yuriOS16z",
    site: "@yuriOS16z",
    images: ["/images/backgrounds/sky-clouds.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  applicationName: "Yuri OS",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Yuri OS",
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ff5722" />
        <meta name="msapplication-TileColor" content="#ff5722" />
      </head>
      <body className="antialiased bg-white text-text-primary">
        {children}
      </body>
    </html>
  );
}
