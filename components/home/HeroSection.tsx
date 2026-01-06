import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Sky background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/sky-clouds.png"
          alt="Sky background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-white/15 z-[1]"></div>

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 dotted-bg opacity-10 z-[2]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-gray-700 font-medium">Live AI Analysis • Powered by ElizaOS</span>
          </div>

          <div className="bg-white/80 backdrop-blur-md px-12 py-8 rounded-2xl shadow-2xl mb-8">
            <h1 className="text-5xl md:text-7xl font-black font-display mb-4 leading-tight">
              <span className="text-neutral-black">Predict, Analyze,</span>
              <br />
              <span className="text-primary-orange">and Earn</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-black leading-relaxed font-semibold">
              Advanced AI model trained on thousands of prediction sources. Get edge opportunities in real-time markets.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#markets"
              className="px-8 py-4 bg-primary-orange hover:bg-primary-orangeDark text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
            >
              Explore Markets
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-primary-orange border-2 border-primary-orange text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-center"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-[2]"></div>
    </section>
  );
}
