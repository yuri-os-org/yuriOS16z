import { PartnerLogos } from '../ui/PartnerLogos';

export function PartnersSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-neutral-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4 sm:mb-6">
            Powered By
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Built on ElizaOS framework with real-time prediction market data and blockchain technology
          </p>
        </div>

        <PartnerLogos />
      </div>
    </section>
  );
}
