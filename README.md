# 🚀 Yuri OS - AI-Powered Prediction Markets

<div align="center">

![Yuri OS Banner](public/images/backgrounds/sky-clouds.png)

**Predict, Analyze, and Earn - Powered by ElizaOS**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Live Demo](https://yuriosai.com) • [Documentation](https://docs.yuriosai.com) • [Twitter](https://x.com/yuriOS16z) • [Discord](https://discord.gg/yuriosai)

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

**Yuri OS** is a cutting-edge prediction market platform that combines AI-powered analysis with real-time market data from Polymarket. Our custom AI model, inspired by the ElizaOS framework, analyzes thousands of data sources to provide traders with intelligent forecasts and market insights.

### Why Yuri OS?

- 🤖 **AI-Powered Analysis**: Advanced machine learning models trained on 50+ diverse data sources
- 📊 **Real-Time Forecasts**: Get instant predictions on any market with detailed probability breakdowns
- 🎯 **Edge Detection**: Identify mispriced markets and arbitrage opportunities before others
- 🔗 **Multi-Chain Support**: Built on Solana and Ethereum, with expansion to Base, Polygon, and Arbitrum
- 🎨 **Beautiful UX**: Sleek, modern interface inspired by leading AI platforms

---

## ✨ Features

### Current Features (Phase 1 - Q1 2026)

✅ **AI Model Integration**
- Custom AI model inspired by ElizaOS framework
- Real-time data aggregation from 50+ sources including news, social media, on-chain data
- Advanced market analysis algorithms with multi-model consensus

✅ **Prediction Markets**
- Live Polymarket integration with 10,000+ markets
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

### Upcoming Features

🔜 **Phase 2 - Official Launch (Q2 2026)**
- YURI governance token launch (TGE)
- Staking and rewards program
- Mobile app (iOS & Android)
- API access for developers

🔜 **Phase 3 - AI Trading Engine (Q3 2026)**
- AI-powered auto-trading based on prediction odds
- Portfolio optimization algorithms
- Copy trading from top AI strategies
- Custom trading bot creation tools

🔜 **Phase 4 - Ecosystem Expansion (Q4 2026)**
- Multi-chain expansion (Base, Polygon, Arbitrum)
- Decentralized oracle network integration
- Prediction market creation tools
- Social trading features

🔜 **Phase 5 - Global Scale (Q1 2027)**
- AI model marketplace (community models)
- Cross-chain liquidity aggregation
- Institutional trading platform
- Global expansion with localization

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 15.5.9](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/)
- **UI Components**: Custom component library with React 19
- **Icons**: Lucide React & Custom SVGs
- **Fonts**: Google Fonts (Inter, Space Grotesk, Press Start 2P)

### Backend & Integrations
- **Blockchain**: Solana & Ethereum
- **Markets API**: Polymarket CLOB API
- **AI Model**: Custom ElizaOS-inspired framework
- **Data Sources**: 50+ APIs including news, social media, on-chain analytics

### DevOps
- **Hosting**: Vercel (recommended) / Netlify / AWS
- **CI/CD**: GitHub Actions
- **Analytics**: Vercel Analytics / Google Analytics
- **Monitoring**: Sentry (error tracking)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm)
- **Git**: For cloning the repository

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yuri-os-org/yuriOS16z/yuri-os-frontend.git
cd yuri-os-frontend
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
```env
# Polymarket API
NEXT_PUBLIC_POLYMARKET_API_URL=https://clob.polymarket.com

# AI Model Configuration
NEXT_PUBLIC_AI_MODEL_ENDPOINT=your-ai-endpoint
AI_MODEL_API_KEY=your-secret-key

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Sentry (Optional)
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
yuri-os-frontend/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Homepage
│   ├── market/
│   │   └── [id]/
│   │       └── page.tsx          # Individual market page
│   └── globals.css               # Global styles & animations
│
├── components/                   # React components
│   ├── home/                     # Homepage sections
│   │   ├── HeroSection.tsx       # Hero with glassmorphism
│   │   ├── WelcomeSection.tsx    # Welcome message
│   │   ├── FeaturesSection.tsx   # 6 feature cards
│   │   ├── RoadmapSection.tsx    # Interactive roadmap
│   │   ├── RoadmapOption1.tsx    # 🚂 Train journey design
│   │   ├── RoadmapOption2.tsx    # 🚗 Road trip design
│   │   ├── RoadmapOption3.tsx    # 🚀 Space launch design
│   │   ├── PartnersSection.tsx   # Partner logos
│   │   └── StatsSection.tsx      # Platform statistics
│   │
│   ├── markets/                  # Market components
│   │   └── MarketCard.tsx        # Individual market card
│   │
│   └── ui/                       # Reusable UI components
│       ├── Header.tsx            # Navigation header
│       ├── Footer.tsx            # Site footer
│       ├── Ticker.tsx            # Scrolling banner
│       ├── Button.tsx            # Button variants
│       ├── Badge.tsx             # Status badges
│       ├── Card.tsx              # Card container
│       ├── FeatureCard.tsx       # Feature display card
│       ├── SideNav.tsx           # Vertical navigation
│       ├── StatsDisplay.tsx      # Statistics display
│       └── PartnerLogos.tsx      # Partner logo grid
│
├── services/                     # API services
│   └── polymarket.ts             # Polymarket API integration
│
├── types/                        # TypeScript types
│   └── market.ts                 # Market data types
│
├── public/                       # Static assets
│   └── images/
│       ├── backgrounds/
│       │   └── sky-clouds.png    # Hero background
│       ├── characters/
│       │   └── anime-ai-character.png  # AI character
│       └── partners/             # Partner logos (8 SVGs)
│           ├── elizaos.svg
│           ├── polymarket.svg
│           ├── solana.svg
│           ├── ethereum.svg
│           ├── polygon.svg
│           ├── base.svg
│           ├── arbitrum.svg
│           └── chainlink.svg
│
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
└── README.md                     # This file
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

# Type checking
npm run type-check
```

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting (recommended)
- **TypeScript** for type safety

### Key Design Patterns

1. **Component Structure**: Functional components with TypeScript
2. **State Management**: React hooks (useState, useEffect, useCallback)
3. **Styling**: Tailwind utility classes with custom color palette
4. **API Calls**: Centralized in `/services` directory
5. **Type Safety**: Strict TypeScript with defined interfaces in `/types`

### Color Palette

```typescript
// Primary Colors
orange: '#ff5722'         // CTAs, active states
orangeDark: '#e64a19'     // Hover states
orangeLight: '#ff7043'    // Highlights

// Sky Colors
skyBlue: '#87ceeb'        // Hero, stats sections
skyLight: '#b0e0e6'       // Gradients
skyDark: '#6db3d8'        // Borders

// Neutral Colors
black: '#1a1a1a'          // Text, dark sections
beige: '#f5f5dc'          // Footer background
white: '#ffffff'          // Backgrounds, cards
```

### Adding New Features

1. Create component in appropriate directory (`/components/ui` or `/components/home`)
2. Add TypeScript types in `/types` if needed
3. Update relevant page in `/app`
4. Add to navigation if public-facing
5. Test responsive design (mobile, tablet, desktop)
6. Update this README if it's a major feature

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js configuration

3. **Add Environment Variables**
- In Vercel dashboard, go to Settings → Environment Variables
- Add all variables from `.env.local`
- Redeploy if needed

4. **Custom Domain** (Optional)
- Go to Settings → Domains
- Add your custom domain (e.g., `yuriosai.com`)
- Update DNS records as instructed

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Deploy to AWS Amplify

1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Add environment variables
4. Deploy

### Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Server-side rendering (SSR) for initial load
- ✅ Static generation for public pages
- ✅ Efficient caching strategies
- ✅ Minimized bundle size with tree shaking

---

## 🗺 Roadmap

Check out our [interactive roadmap](https://yuriosai.com#roadmap) with 3 design options:

### 🚂 Option 1: Train Journey
Classic railroad track with animated train traveling through station milestones.

### 🚗 Option 2: Road Trip
Winding road adventure with a car driving past signpost milestones.

### 🚀 Option 3: Space Launch
Vertical rocket journey through space, visiting planet milestones.

**Current Phase**: Foundation (Q1 2026)
- ✅ ElizaOS AI model development
- ✅ Core prediction market infrastructure
- ✅ Real-time data aggregation
- ✅ Web platform beta launch

**See full roadmap**: [Roadmap Section](#-features)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Reporting Bugs

1. Check existing [GitHub Issues](https://github.com/yuri-os-org/yuriOS16z/yuri-os-frontend/issues)
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/OS information

### Suggesting Features

1. Open a [GitHub Discussion](https://github.com/yuri-os-org/yuriOS16z/yuri-os-frontend/discussions)
2. Describe the feature and use case
3. Wait for community feedback
4. If approved, create a Pull Request

### Pull Request Process

1. **Fork the repository**
```bash
git clone https://github.com/your-username/yuri-os-frontend.git
```

2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**
- Follow existing code style
- Add TypeScript types
- Test responsive design
- Update documentation if needed

4. **Commit your changes**
```bash
git commit -m "feat: add amazing feature"
```

5. **Push to your fork**
```bash
git push origin feature/amazing-feature
```

6. **Open a Pull Request**
- Describe your changes
- Link related issues
- Request review from maintainers

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Yuri OS

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

## 🙏 Acknowledgments

- **ElizaOS** - Inspiration for our AI framework
- **Polymarket** - Prediction market data and infrastructure
- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Seamless deployment platform

---

## ⭐ Star Us!

If you find Yuri OS useful, please consider giving us a star on GitHub! It helps us grow the community and build better features.

[![GitHub stars](https://img.shields.io/github/stars/yuriosai/yuri-os-frontend?style=social)](https://github.com/yuri-os-org/yuriOS16z/yuri-os-frontend)

---

<div align="center">

**Built with ❤️ by the Yuri OS Team**

*Predict, Analyze, and Earn - Powered by ElizaOS*

</div>
