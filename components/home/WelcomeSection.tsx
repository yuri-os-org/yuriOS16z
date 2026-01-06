import { SideNav } from '../ui/SideNav';

export function WelcomeSection() {
  return (
    <section className="relative py-24 bg-neutral-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">
              Welcome to <span className="text-primary-orange">Yuri OS</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                The next evolution of prediction markets — combining the wisdom of crowds with cutting-edge AI analysis.
                Our platform leverages a custom AI model inspired by ElizaOS, trained on thousands of data sources to provide deep insights into market trends and help you identify edge opportunities before they become obvious.
              </p>

              <p>
                Unlike traditional prediction markets, we don't just show you the odds. We analyze them.
                Our proprietary AI model examines thousands of data points, historical patterns, and market sentiment to generate forecasts that complement human judgment.
              </p>

              <p>
                Whether you're a researcher, trader, or curious observer, Yuri OS gives you the tools to understand not just what the market thinks, but why — and where it might be wrong.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#markets"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-orange hover:bg-primary-orangeDark text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Start Exploring
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Side Navigation (1/3 width) */}
          <div className="lg:col-span-1">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">
              Analysis Types
            </h3>
            <SideNav />
          </div>
        </div>
      </div>
    </section>
  );
}
