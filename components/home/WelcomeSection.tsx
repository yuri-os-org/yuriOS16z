import Image from 'next/image';
import { SideNav } from '../ui/SideNav';

export function WelcomeSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-neutral-black overflow-hidden">
      {/* Cyber eyes background accent */}
      <div className="absolute top-0 right-0 w-full h-48 sm:h-64 opacity-20 z-0">
        <Image
          src="/images/backgrounds/cyber-eyes.png"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6 sm:mb-8">
              Welcome to <span className="text-primary-orange">Agent Yuri</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                The first AI prediction layer agent on Polymarket — powered by Claude.
                Choose, Predict, and Earn with intelligent market analysis that helps you identify edge opportunities before they become obvious.
              </p>

              <p>
                Unlike traditional prediction markets, we don't just show you the odds. We analyze them.
                Powered by Claude, Agent Yuri examines thousands of data points, historical patterns, and market sentiment to generate forecasts that complement human judgment.
              </p>

              <p>
                Whether you're a researcher, trader, or curious observer, Agent Yuri gives you the tools to understand not just what the market thinks, but why — and where it might be wrong.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <a
                href="#markets"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-orange hover:bg-primary-orangeDark text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                Start Exploring
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Side Navigation (1/3 width) */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <h3 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">
              Analysis Types
            </h3>
            <SideNav />
          </div>
        </div>
      </div>
    </section>
  );
}
