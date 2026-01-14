'use client';

import { useRouter } from 'next/navigation';
import { MarketWithForecast } from '@/types/market';

interface MarketCardProps {
  market: MarketWithForecast;
  onForecastUpdate: (marketId: string, forecast: string, loading: boolean) => void;
}

export function MarketCard({ market }: MarketCardProps) {
  const router = useRouter();
  const outcomes = JSON.parse(market.outcomes);
  const prices = JSON.parse(market.outcomePrices);

  const handleAnalyze = () => {
    // Store market data in sessionStorage and navigate
    sessionStorage.setItem(`market_${market.id}`, JSON.stringify(market));
    router.push(`/market/${market.id}`);
  };

  return (
    <div
      onClick={handleAnalyze}
      className="group relative p-4 sm:p-6 cursor-pointer transition-all duration-300 bg-dark-charcoal border border-primary-red/30 hover:border-primary-red hover:shadow-red-glow h-full flex flex-col"
    >
      {/* Red accent line on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-red opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Question */}
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 line-clamp-3 leading-snug">
          {market.question}
        </h3>

        {/* Spacer to push odds and button to bottom */}
        <div className="flex-1"></div>

        {/* Market Odds */}
        <div className="mb-3 sm:mb-4">
          <div className="text-xs font-medium mb-2 text-text-secondary uppercase tracking-wide">Current Odds</div>
          <div className="flex flex-col sm:flex-row gap-2">
            {outcomes.map((outcome: string, idx: number) => {
              const prob = parseFloat(prices[idx]) * 100;
              return (
                <div key={idx} className="flex-1">
                  <div className="p-2 sm:p-3 bg-dark-black border border-primary-red/20 transition-all group-hover:border-primary-red/50">
                    <div className="text-xs mb-1 text-text-secondary truncate uppercase">{outcome}</div>
                    <div className="text-xl sm:text-2xl font-bold text-primary-red">{prob.toFixed(1)}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Analyze Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAnalyze();
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wider transition-all bg-primary-red hover:bg-primary-redLight text-white"
        >
          Analyze
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
