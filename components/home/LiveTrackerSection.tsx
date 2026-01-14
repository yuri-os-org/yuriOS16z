export function LiveTrackerSection() {
  return (
    <section className="relative bg-dark-black py-16">
      {/* Red Bar Header */}
      <div className="red-bar mb-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-widest">LIVE TRACKER</h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Status Bar */}
        <div className="flex items-center justify-between mb-8 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse"></div>
            <span className="text-primary-red uppercase tracking-wider">Token Feed</span>
            <span className="text-text-secondary">/</span>
            <span className="text-text-secondary uppercase">Live</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-text-secondary uppercase">Updated: Just Now</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Price */}
          <div className="bg-dark-charcoal border border-primary-red/30 p-6">
            <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Price</div>
            <div className="text-3xl font-bold text-white font-mono">$0.00</div>
            <div className="text-xs text-text-secondary uppercase mt-1">USD</div>
          </div>

          {/* Market Cap */}
          <div className="bg-dark-charcoal border border-primary-red/30 p-6">
            <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Market Cap</div>
            <div className="text-3xl font-bold text-white font-mono">$0.00</div>
            <div className="text-xs text-text-secondary uppercase mt-1">USD</div>
          </div>

          {/* Volume */}
          <div className="bg-dark-charcoal border border-primary-red/30 p-6">
            <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Volume (24h)</div>
            <div className="text-3xl font-bold text-white font-mono">$0.00</div>
            <div className="text-xs text-text-secondary uppercase mt-1">USD</div>
          </div>

          {/* Holders */}
          <div className="bg-dark-charcoal border border-primary-red/30 p-6">
            <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Holders</div>
            <div className="text-3xl font-bold text-white font-mono">--</div>
            <div className="text-xs text-text-secondary uppercase mt-1">Total</div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mt-8 text-center">
          <p className="text-text-secondary text-xs uppercase tracking-wider mb-2">Contract Address</p>
          <code className="text-primary-red font-mono text-sm">w9wm7HNCsot3BxsKu59C5jrvAnEcDYdDzgqi6HVpump</code>
        </div>
      </div>
    </section>
  );
}
