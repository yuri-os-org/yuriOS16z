import Image from 'next/image';

// Technologies and platforms that power Yuri OS
const partners = [
  { name: 'ElizaOS', logo: '/images/partners/elizaos.svg', width: 120, height: 40 },
  { name: 'Polymarket', logo: '/images/partners/polymarket.svg', width: 140, height: 40 },
  { name: 'Solana', logo: '/images/partners/solana.svg', width: 120, height: 40 },
  { name: 'Ethereum', logo: '/images/partners/ethereum.svg', width: 120, height: 40 },
  { name: 'Polygon', logo: '/images/partners/polygon.svg', width: 120, height: 40 },
  { name: 'Base', logo: '/images/partners/base.svg', width: 100, height: 40 },
  { name: 'Arbitrum', logo: '/images/partners/arbitrum.svg', width: 120, height: 40 },
  { name: 'Chainlink', logo: '/images/partners/chainlink.svg', width: 130, height: 40 }
];

export function PartnerLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={partner.width}
            height={partner.height}
            className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  );
}
