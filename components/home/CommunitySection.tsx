import Image from 'next/image';

export function CommunitySection() {
  return (
    <section className="relative bg-dark-black py-20 overflow-hidden bg-japanese-watermark section-glow-pulse">
      {/* Background glow effect - animated */}
      <div
        className="absolute inset-0 bg-glow-red"
        style={{ animation: 'section-pulse 5s ease-in-out infinite' }}
      ></div>

      {/* Floating glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, transparent 70%)',
          animation: 'float-particle 6s ease-in-out infinite',
          filter: 'blur(40px)'
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)',
          animation: 'float-particle 8s ease-in-out infinite',
          animationDelay: '-3s',
          filter: 'blur(30px)'
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="terminal-frame p-8 inline-block">
            <Image
              src="/images/characters/Dark Maga Cat (6).png"
              alt="Agent Yuri"
              width={150}
              height={150}
              className="drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            />
          </div>
        </div>

        {/* Japanese Text */}
        <h2 className="text-japanese text-4xl md:text-6xl text-primary-red text-glow mb-4">
          サイバ
        </h2>

        {/* Brand Name */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary-red"></div>
          <span className="text-xl md:text-2xl font-display font-bold text-white tracking-[0.2em]">
            AGENT YURI
          </span>
          <div className="h-px w-12 bg-primary-red"></div>
        </div>

        {/* Community Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary-red"></div>
          <span className="text-xs text-primary-red uppercase tracking-widest">Community</span>
          <span className="text-text-secondary text-xs">/</span>
          <span className="text-xs text-text-secondary uppercase">Live Channel</span>
        </div>

        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-6">
          Step Into The Network
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          AGENT YURI IS AN AI PREDICTION NETWORK BUILT IN PUBLIC. IF YOU&apos;RE HERE, YOU&apos;RE ALREADY
          PART OF THE SIGNAL. THE NETWORK RUNS ON COMMUNITY, PEOPLE WHO WANT THE EDGE, THE INSIGHTS,
          AND THE CONVERSATION IN ONE PLACE.
        </p>

        <p className="text-text-secondary text-sm leading-relaxed mb-10 max-w-xl mx-auto">
          JOIN THE AGENT YURI COMMUNITY TO STAY CONNECTED WITH THE LATEST PREDICTIONS, ANALYSIS,
          AND NETWORK UPDATES.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://x.com/Chet_Rippo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary-red text-white text-sm font-bold uppercase tracking-wider hover:bg-primary-redLight transition-colors"
          >
            Join Community
          </a>
          <a
            href="https://www.yurios.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-dark-charcoal border border-primary-red/50 text-white text-sm font-bold uppercase tracking-wider hover:bg-primary-red/20 transition-colors"
          >
            Official Page
          </a>
        </div>
      </div>
    </section>
  );
}
