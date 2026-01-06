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
      className="group relative rounded-xl p-6 cursor-pointer transition-all duration-300 bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary-orange hover:border-l-4"
    >
      <div className="relative z-10">
        {/* Question */}
        <h3 className="text-lg font-semibold text-neutral-black mb-4 line-clamp-3 leading-snug">
          {market.question}
        </h3>

        {/* Market Odds */}
        <div className="mb-4">
          <div className="text-xs font-medium mb-2 text-text-muted uppercase tracking-wide">Current Odds</div>
          <div className="flex gap-2">
            {outcomes.map((outcome: string, idx: number) => {
              const prob = parseFloat(prices[idx]) * 100;
              return (
                <div key={idx} className="flex-1">
                  <div className="rounded-lg p-3 bg-gray-50 border border-gray-200 transition-all group-hover:bg-orange-50 group-hover:border-orange-200">
                    <div className="text-xs mb-1 text-text-muted">{outcome}</div>
                    <div className="text-2xl font-bold text-primary-orange">{prob.toFixed(1)}%</div>
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
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all bg-primary-orange hover:bg-primary-orangeDark text-white shadow-sm hover:shadow-md"
        >
          Analyze with AI
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
