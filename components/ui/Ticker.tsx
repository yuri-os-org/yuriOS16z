export function Ticker() {
  const message = "LIVE PREDICTION MARKETS • AI-POWERED ANALYSIS • REAL-TIME FORECASTS • GET EDGE OPPORTUNITIES";

  return (
    <div className="relative overflow-hidden bg-primary-orange text-white py-3 border-b border-primary-orangeDark">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling Text */}
        <div className="flex-1 overflow-hidden mr-4">
          <div className="flex animate-ticker-scroll">
            <span className="inline-block text-sm font-bold tracking-wider whitespace-nowrap px-8">
              {message}
            </span>
            <span className="inline-block text-sm font-bold tracking-wider whitespace-nowrap px-8">
              {message}
            </span>
            <span className="inline-block text-sm font-bold tracking-wider whitespace-nowrap px-8">
              {message}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#markets"
          className="flex-shrink-0 px-6 py-2 bg-neutral-black hover:bg-gray-800 text-white text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          Try Now
        </a>
      </div>
    </div>
  );
}
