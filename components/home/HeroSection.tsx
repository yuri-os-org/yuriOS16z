'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] bg-dark-black overflow-hidden bg-japanese-animated">
      {/* Animated floating particles */}
      <div className="bg-particles"></div>

      {/* Scanning line effect */}
      <div className="scan-line"></div>

      {/* Background red glow effect */}
      <div className="absolute inset-0 bg-glow-red opacity-40"></div>

      {/* Additional corner glows */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 80% 30%, rgba(220, 38, 38, 0.4) 0%, transparent 50%)'
        }}
      ></div>
      <div
        className="absolute left-0 bottom-0 w-1/2 h-1/2 opacity-20"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Live Feed Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse"></div>
            <span className="text-xs font-bold text-primary-red uppercase tracking-widest">Live Feed</span>
          </div>
          <span className="text-text-secondary text-xs">/</span>
          <span className="text-xs font-bold text-white uppercase tracking-widest">Agent Network</span>
          <div className="flex-1"></div>
          <span className="text-xs text-text-secondary uppercase">No Signal</span>
          <span className="text-xs text-text-secondary uppercase">Decoding</span>
        </div>

        {/* Terminal TV Frame */}
        <div className="terminal-tv p-8 md:p-12 relative tv-flicker">
          {/* Terminal header dots */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary-red animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary-red/50"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary-red/50"></div>

          {/* TV Vignette effect */}
          <div className="tv-vignette"></div>

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            {/* Dark Maga Cat Image */}
            <div className="mb-8 animate-float">
              <Image
                src="/images/characters/Dark Maga Cat (6).png"
                alt="Agent Yuri"
                width={200}
                height={200}
                className="drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]"
              />
            </div>

            {/* Logo Text */}
            <div className="text-center mb-8">
              <h1 className="text-japanese text-5xl md:text-7xl text-primary-red text-glow mb-2 animate-glow-pulse">
                サイバ
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-red animate-expand-right"></div>
                <span className="text-2xl md:text-3xl font-display font-bold text-white tracking-[0.3em]">
                  AGENT YURI
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-red animate-expand-left"></div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-text-secondary text-sm md:text-base text-center max-w-xl mb-8 uppercase tracking-wider">
              The First AI Prediction Layer Agent on Polymarket
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#markets"
                className="px-8 py-4 bg-primary-red hover:bg-primary-redLight text-white font-bold text-sm uppercase tracking-wider transition-all shadow-red-glow hover:shadow-red-glow-lg"
              >
                Explore Markets
              </a>
              <a
                href="https://x.com/Chet_Rippo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white font-bold text-sm uppercase tracking-wider transition-all"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="mt-6 py-3 border-t border-b border-primary-red/30 overflow-hidden">
          <div className="flex items-center gap-4">
            <span className="bg-primary-red px-3 py-1 text-xs font-bold text-white uppercase flex-shrink-0">
              Breaking
            </span>
            <div className="overflow-hidden flex-1">
              <p className="text-sm text-text-secondary uppercase tracking-wider whitespace-nowrap animate-ticker-scroll">
                // AGENT YURI LIVE // CHOOSE, PREDICT, AND EARN // POWERED BY CLAUDE // ARE YOU READY? //
                // AGENT YURI LIVE // CHOOSE, PREDICT, AND EARN // POWERED BY CLAUDE // ARE YOU READY? //
              </p>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center gap-3 px-4 py-2 bg-dark-charcoal border border-primary-red/30">
            <span className="text-xs text-text-secondary uppercase">Contract:</span>
            <code className="text-xs font-mono text-primary-red">w9wm7HNCsot3BxsKu59C5jrvAnEcDYdDzgqi6HVpump</code>
            <button className="px-2 py-1 bg-primary-red/20 text-primary-red text-xs font-bold uppercase hover:bg-primary-red hover:text-white transition-colors">
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
