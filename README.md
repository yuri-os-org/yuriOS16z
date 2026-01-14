# 🚀 Agent Yuri - AI Prediction Layer on Polymarket

<div align="center">

![Agent Yuri Logo](./public/images/characters/Dark%20Maga%20Cat%20(6).png)

**Choose, Predict, and Earn - Powered by Claude**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Live Demo](https://www.yurios.app) • [Documentation](https://github.com/yuri-os-org/yuriOS16z/blob/main/DOCUMENTATION.md) • [Twitter](https://x.com/Chet_Rippo) • [GitHub](https://github.com/yuri-os-org/yuriOS16z)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Agent Yuri** is the first AI prediction layer agent on Polymarket, powered by Claude. Our platform combines AI-powered analysis with real-time market data to provide traders with intelligent forecasts and market insights.

### Why Agent Yuri?

- 🤖 **Powered by Claude**: Advanced AI analysis for prediction markets
- 📊 **Real-Time Forecasts**: Get instant predictions on any market with detailed probability breakdowns
- 🎯 **Edge Detection**: Identify mispriced markets and arbitrage opportunities before others
- 🔗 **Polymarket Integration**: Seamless access to thousands of prediction markets
- 🎨 **Beautiful UX**: Sleek, modern interface with mobile-first design

---

## ✨ Features

### Current Features

✅ **AI Model Integration**
- Powered by Claude AI for intelligent market analysis
- Real-time data aggregation from multiple sources
- Advanced market analysis algorithms

✅ **Prediction Markets**
- Live Polymarket integration with thousands of markets
- Binary and multi-outcome market support
- Real-time odds tracking and historical performance analysis

✅ **Intelligent Search**
- Instant market search with live results
- Category filtering (Politics, Sports, Crypto, Entertainment)
- Smart recommendations based on trending topics

✅ **Market Analysis**
- AI-generated forecasts with confidence scores
- Historical data visualization
- Risk assessment and volatility analysis
- Edge opportunity detection

### $YURI Token

The $YURI governance token powers the Agent Yuri ecosystem, enabling holders to participate in platform governance and earn rewards.

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 15.5.9](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/)
- **UI Components**: Custom component library with React 19

### Backend & Integrations
- **Blockchain**: Solana
- **Markets API**: Polymarket CLOB API
- **AI Model**: Claude by Anthropic

### DevOps
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm)
- **Git**: For cloning the repository

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yuri-os-org/yuriOS16z.git
cd yuriOS16z
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
agent-yuri/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles & animations
│
├── components/                   # React components
│   ├── home/                     # Homepage sections
│   │   ├── HeroSection.tsx       # Hero with token info
│   │   ├── WelcomeSection.tsx    # Welcome message
│   │   ├── FeaturesSection.tsx   # Feature cards
│   │   ├── PartnersSection.tsx   # Partner logos
│   │   └── StatsSection.tsx      # Platform statistics
│   │
│   ├── markets/                  # Market components
│   │   └── MarketCard.tsx        # Individual market card
│   │
│   └── ui/                       # Reusable UI components
│       ├── Header.tsx            # Navigation header
│       ├── Footer.tsx            # Site footer
│       └── Ticker.tsx            # Scrolling banner
│
├── public/                       # Static assets
│   └── images/
│
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
└── package.json                  # Dependencies
```

---

## 💻 Development

### Available Scripts

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
2. **Import to Vercel** at [vercel.com](https://vercel.com)
3. **Add custom domain** (e.g., `www.yurios.app`)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Agent Yuri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**Built with ❤️ by the Agent Yuri Team**

*Choose, Predict, and Earn - Powered by Claude*

</div>
