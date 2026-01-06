import { PartnerLogos } from '../ui/PartnerLogos';

export function PartnersSection() {
  return (
    <section className="py-24 bg-neutral-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Powered By
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Built on ElizaOS framework with real-time prediction market data and blockchain technology
          </p>
        </div>

        <PartnerLogos />
      </div>
    </section>
  );
}
