export function LoreSection() {
  return (
    <section id="lore" className="relative bg-dark-charcoal py-16 bg-japanese-solid overflow-hidden">
      {/* Animated corner glows */}
      <div
        className="absolute left-0 top-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 0% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 60%)',
          animation: 'corner-glow 4s ease-in-out infinite'
        }}
      ></div>
      <div
        className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 100% 100%, rgba(220, 38, 38, 0.15) 0%, transparent 60%)',
          animation: 'corner-glow 4s ease-in-out infinite',
          animationDelay: '-2s'
        }}
      ></div>
      {/* Red Bar Header */}
      <div className="red-bar mb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold tracking-widest">THE LORE</h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="md:col-span-2">
            {/* Field Report Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse"></div>
                <span className="text-xs text-primary-red uppercase tracking-wider">Field Report</span>
              </div>
              <span className="text-text-secondary text-xs">/</span>
              <span className="text-xs text-text-secondary uppercase">Origin File</span>
            </div>

            {/* Mission Statement */}
            <div className="red-accent-left mb-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">
                A Prediction Network Built on a Single Conviction: AI
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AGENT YURI WAS CREATED TO DELIVER THE WORLD&apos;S SIGNAL LIKE A BROADCAST YOU&apos;D ACTUALLY
                CHOOSE TO WATCH. NOT CLEAR, NOT SAFE, NOT SPONSORED. JUST THE TRUTH REPACKAGED AS
                CINEMATIC AI ANALYSIS. WHEN LEGACY MARKETS TURN EVERYTHING INTO NOISE, WE TURN IT
                INTO A SIGNAL.
              </p>
              <p className="text-text-secondary leading-relaxed">
                THE MISSION IS SIMPLE: EXPOSE THE MARKET SECRETS, THE POWER PLAYS, THE MANUFACTURED
                HEADLINES, AND DO IT THROUGH A LANGUAGE WE ALL UNDERSTAND: STYLE, DATA, AND AI-LEVEL
                PREDICTION. THIS ISN&apos;T ESCAPISM, IT&apos;S A NEW FORMAT FOR TRUTH.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 text-xs text-text-secondary uppercase tracking-wider">
              <span>// Agent Network</span>
              <span>// Polymarket Data</span>
              <span>// Live Signal</span>
              <span>// Build-to-Earn</span>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="md:col-span-1">
            {/* Official Links */}
            <div className="bg-dark-charcoal border border-primary-red/30 p-4 mb-6">
              <h4 className="text-xs font-bold text-primary-red uppercase tracking-wider mb-4">
                Official Links
              </h4>
              <div className="space-y-3">
                <a
                  href="https://www.yurios.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-text-secondary hover:text-white transition-colors"
                >
                  <span className="text-sm">Official Page</span>
                  <span className="text-primary-red">→</span>
                </a>
                <a
                  href="https://x.com/Chet_Rippo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-text-secondary hover:text-white transition-colors"
                >
                  <span className="text-sm">X (Twitter)</span>
                  <span className="text-primary-red">→</span>
                </a>
              </div>
            </div>

            {/* Contract Address */}
            <div className="bg-dark-charcoal border border-primary-red/30 p-4">
              <h4 className="text-xs font-bold text-primary-red uppercase tracking-wider mb-4">
                Contract Address
              </h4>
              <div className="flex items-center gap-2">
                <code className="text-xs font-mono text-white flex-1 truncate">w9wm7HNCsot3BxsKu59C5jrvAnEcDYdDzgqi6HVpump</code>
                <button className="px-2 py-1 bg-primary-red text-white text-xs font-bold uppercase hover:bg-primary-redLight transition-colors">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breaking Footer */}
      <div className="mt-12 py-3 border-t border-primary-red/30 text-center">
        <p className="text-xs text-text-secondary uppercase tracking-wider">
          Breaking // The Lore File is Live // Agent Yuri Network
        </p>
      </div>
    </section>
  );
}
