import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative bg-dark-charcoal py-16 border-t border-primary-red/30 bg-japanese-solid overflow-hidden">
      {/* Background red gradient at bottom - animated */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary-red/20 to-transparent pointer-events-none"
        style={{ animation: 'section-pulse 6s ease-in-out infinite' }}
      ></div>

      {/* Central red glow - animated */}
      <div
        className="absolute inset-0 bg-glow-red pointer-events-none"
        style={{ animation: 'section-pulse 5s ease-in-out infinite', animationDelay: '-2s' }}
      ></div>

      {/* Side glows */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 0% 50%, rgba(220, 38, 38, 0.2) 0%, transparent 70%)',
          animation: 'corner-glow 5s ease-in-out infinite'
        }}
      ></div>
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 100% 50%, rgba(220, 38, 38, 0.2) 0%, transparent 70%)',
          animation: 'corner-glow 5s ease-in-out infinite',
          animationDelay: '-2.5s'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Center Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/characters/Dark Maga Cat (6).png"
            alt="Agent Yuri"
            width={80}
            height={80}
            className="drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]"
          />
        </div>

        {/* Japanese Text */}
        <div className="text-center mb-6">
          <span className="text-japanese text-2xl text-primary-red">サイバ</span>
          <span className="text-white text-lg font-display font-bold tracking-widest ml-2">AGENT YURI</span>
        </div>

        {/* Tagline */}
        <p className="text-text-secondary text-xs text-center uppercase tracking-widest mb-8">
          Your Go-To Agent Network for All Things Prediction
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://x.com/Chet_Rippo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-dark-black border border-primary-red/30 text-text-secondary hover:text-white hover:border-primary-red transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://github.com/yuri-os-org/yuriOS16z"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-dark-black border border-primary-red/30 text-text-secondary hover:text-white hover:border-primary-red transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs">
          <a
            href="https://x.com/Chet_Rippo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white uppercase tracking-wider transition-colors"
          >
            Join Community
          </a>
          <a
            href="https://www.yurios.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white uppercase tracking-wider transition-colors"
          >
            Official Page
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-red/20 text-center">
          <p className="text-xs text-text-secondary uppercase tracking-wider">
            © 2026 Agent Yuri. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
