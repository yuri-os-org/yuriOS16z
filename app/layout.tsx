import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Agent Yuri - AI Prediction Layer on Polymarket",
    template: "%s | Agent Yuri"
  },
  description: "Choose, Predict, and Earn - powered by Claude. Agent Yuri is the first AI prediction layer agent on Polymarket.",
  keywords: [
    "prediction markets",
    "AI agent",
    "Claude",
    "Polymarket",
    "crypto trading",
    "market forecasting",
    "Solana",
    "DeFi",
    "YURI token",
    "AI trading",
    "market intelligence",
    "Agent Yuri"
  ],
  authors: [
    {
      name: "Agent Yuri Team",
      url: "https://www.yurios.app"
    }
  ],
  creator: "Agent Yuri",
  publisher: "Agent Yuri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.yurios.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yurios.app",
    title: "Agent Yuri - AI Prediction Layer on Polymarket",
    description: "Choose, Predict, and Earn - powered by Claude. The first AI prediction layer agent on Polymarket.",
    siteName: "Agent Yuri",
    images: [
      {
        url: "/images/backgrounds/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Agent Yuri - AI Prediction Network"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Yuri - AI Prediction Layer on Polymarket",
    description: "Choose, Predict, and Earn - powered by Claude. The first AI prediction layer agent on Polymarket.",
    creator: "@Chet_Rippo",
    site: "@Chet_Rippo",
    images: ["/images/backgrounds/og-preview.png"],
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
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  applicationName: "Agent Yuri",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Agent Yuri",
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
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
      </head>
      <body className="antialiased bg-dark-black text-text-primary">
        {children}
      </body>
    </html>
  );
}
