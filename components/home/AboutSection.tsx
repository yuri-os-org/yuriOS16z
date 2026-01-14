'use client';

import dynamic from 'next/dynamic';

// Dynamically import ModelViewer to avoid SSR issues with Three.js
const ModelViewer = dynamic(
  () => import('../ui/ModelViewer').then((mod) => mod.ModelViewer),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-dark-charcoal/50">
        <div className="text-center">
          {/* Pulsing ring animation */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            {/* Outer pulsing ring */}
            <div className="absolute inset-0 border-2 border-primary-red/30 rounded-full animate-ping"></div>
            {/* Middle ring */}
            <div className="absolute inset-2 border-2 border-primary-red/50 rounded-full animate-pulse"></div>
            {/* Inner spinning ring */}
            <div className="absolute inset-4 border-4 border-primary-red border-t-transparent rounded-full animate-spin"></div>
            {/* Center dot */}
            <div className="absolute inset-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-primary-red rounded-full animate-pulse"></div>
          </div>
          <p className="text-primary-red text-xs font-bold uppercase tracking-widest mb-1">Rendering</p>
          <p className="text-text-secondary text-xs uppercase tracking-wider">3D Model</p>
        </div>
      </div>
    )
  }
);

export function AboutSection() {
  return (
    <section id="about" className="relative bg-dark-black py-16">
      {/* Red Bar Header */}
      <div className="red-bar mb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold tracking-widest">ABOUT: $YURI</h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              AGENT YURI WAS CREATED AS A NEW WAY TO EXPERIENCE PREDICTION MARKETS THROUGH AN
              AI AGENT NETWORK. IT MERGES INTELLIGENT ANALYSIS WITH REAL-TIME MARKET DATA,
              PRESENTING INFORMATION AS INSIGHTS, FORECASTS, AND OPPORTUNITIES RATHER THAN
              STATIC NUMBERS. THE PROJECT LIVES ON X AND GROWS THROUGH ITS COMMUNITY.
            </p>

            <p className="text-text-secondary text-base leading-relaxed mb-8">
              POWERED BY CLAUDE, AGENT YURI ANALYZES THOUSANDS OF DATA POINTS TO HELP YOU
              CHOOSE, PREDICT, AND EARN ON POLYMARKET.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.yurios.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-dark-charcoal border border-primary-red/50 text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-red/20 transition-colors"
              >
                Official Page
              </a>
              <a
                href="https://x.com/Chet_Rippo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-dark-charcoal border border-primary-red/50 text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-red/20 transition-colors"
              >
                X Community
              </a>
              <a
                href="#markets"
                className="px-4 py-2 bg-primary-red text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-redLight transition-colors"
              >
                Buy $YURI
              </a>
            </div>
          </div>

          {/* Right: 3D Character Model */}
          <div className="relative">
            <div className="terminal-frame aspect-[3/4] overflow-hidden">
              {/* 3D Model Viewer */}
              <ModelViewer modelUrl="/images/characters/yuri.glb" />

              {/* Overlay label */}
              <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <p className="text-text-secondary text-xs uppercase tracking-wider">Agent Yuri</p>
                <p className="text-primary-red text-xs uppercase tracking-wider mt-1">AI Prediction Agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
