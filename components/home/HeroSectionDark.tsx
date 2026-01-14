export function HeroSectionDark() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20"></div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-dark-card border border-dark-border">
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
          <span className="text-sm text-gray-400">Live AI Analysis • Powered by Claude</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-float">
          Prediction Markets
          <br />
          <span className="text-white">Meet AI</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Compare crowd wisdom with advanced AI forecasting.
          Discover edge opportunities in real-time prediction markets.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#markets"
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg font-semibold text-lg text-black hover:shadow-lg hover:shadow-neon-blue/50 transition-all transform hover:-translate-y-1"
          >
            <span className="relative z-10">Explore Markets</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-dark-card border-2 border-neon-blue/50 rounded-lg font-semibold text-lg text-white hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/30 transition-all transform hover:-translate-y-1"
          >
            How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-blue mb-1">10K+</div>
            <div className="text-sm text-gray-500">Markets</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-purple mb-1">Real-Time</div>
            <div className="text-sm text-gray-500">Data</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-green mb-1">100%</div>
            <div className="text-sm text-gray-500">Free</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  );
}
