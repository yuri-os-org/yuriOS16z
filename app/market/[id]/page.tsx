'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Market } from '@/types/market';
import { generateForecast } from '@/services/anthropic';
import { getMarketById } from '@/services/polymarket';
import { Header } from '@/components/ui/Header';

interface AIForecastData {
  probabilities: { [key: string]: number };
  reasoning: string;
  keyFactors: string[];
  confidence: string;
}

function parseAIForecast(text: string): AIForecastData | null {
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.error('Failed to parse AI forecast:', e);
  }
  return null;
}

export default function MarketAnalysisPage() {
  const params = useParams();
  const router = useRouter();
  const [market, setMarket] = useState<Market | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [aiForecast, setAiForecast] = useState<string>('');
  const [generatingForecast, setGeneratingForecast] = useState(false);

  useEffect(() => {
    async function loadMarket() {
      const marketId = params.id as string;

      // First try sessionStorage
      const storedData = sessionStorage.getItem(`market_${marketId}`);
      if (storedData) {
        try {
          const marketData = JSON.parse(storedData);
          setMarket(marketData);
          setLoading(false);
          return;
        } catch (e) {
          console.error('Failed to parse market data:', e);
        }
      }

      // If no sessionStorage data, fetch from API
      try {
        const marketData = await getMarketById(marketId);
        if (marketData) {
          setMarket(marketData);
          // Store in sessionStorage for future use
          sessionStorage.setItem(`market_${marketId}`, JSON.stringify(marketData));
        } else {
          setError(true);
        }
      } catch (e) {
        console.error('Failed to fetch market:', e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadMarket();
  }, [params.id]);

  const handleGenerateForecast = async () => {
    if (!market) return;

    setGeneratingForecast(true);
    try {
      const outcomes = JSON.parse(market.outcomes);
      const forecast = await generateForecast(market.question, outcomes);
      setAiForecast(forecast);
    } catch (error) {
      console.error('Error generating forecast:', error);
      alert('Failed to generate AI forecast. Please check your API key.');
    } finally {
      setGeneratingForecast(false);
    }
  };

  const outcomes = market ? JSON.parse(market.outcomes) : [];
  const prices = market ? JSON.parse(market.outcomePrices) : [];
  const aiData = aiForecast ? parseAIForecast(aiForecast) : null;

  // Loading state content
  const renderLoading = () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-text-secondary font-medium uppercase tracking-wider">Loading market...</p>
      </div>
    </div>
  );

  // Error state content
  const renderError = () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <svg className="w-16 h-16 text-primary-red/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h3 className="text-xl font-bold text-white mb-2 uppercase">Market Not Found</h3>
        <p className="text-text-secondary mb-6">This market may no longer exist or is unavailable.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-black">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-text-secondary hover:text-white mb-6 transition-colors uppercase text-sm tracking-wider"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Network
        </button>

        {/* Loading State */}
        {loading && renderLoading()}

        {/* Error State */}
        {!loading && (error || !market) && renderError()}

        {/* Market Content */}
        {!loading && market && (
          <>
        {/* Market Question */}
        <div className="mb-8 terminal-frame p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse"></div>
            <span className="text-xs text-primary-red uppercase tracking-widest">Live Analysis</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {market.question}
          </h1>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-dark-charcoal border border-primary-red/30 text-xs text-text-secondary uppercase">Binary Market</span>
            <span className="px-3 py-1 bg-primary-red/20 border border-primary-red/50 text-xs text-primary-red uppercase">Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Market Data */}
          <div className="lg:col-span-1 space-y-6">
            {/* Current Market Odds */}
            <div className="bg-dark-charcoal border border-primary-red/30 p-6">
              <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Current Market Odds</h2>
              <div className="space-y-4">
                {outcomes.map((outcome: string, idx: number) => {
                  const prob = parseFloat(prices[idx]) * 100;
                  return (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-text-secondary uppercase">{outcome}</span>
                        <span className="text-2xl font-bold text-primary-red">{prob.toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-dark-black h-2">
                        <div
                          className="bg-primary-red h-2 transition-all"
                          style={{ width: `${prob}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Generate AI Analysis Button */}
            {!aiForecast && (
              <div className="bg-dark-charcoal border border-primary-red/30 p-6">
                <h2 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">AI Analysis</h2>
                <p className="text-xs text-text-secondary mb-4 uppercase">
                  Get detailed AI-powered probability forecasts and analysis from Claude AI.
                </p>
                <button
                  onClick={handleGenerateForecast}
                  disabled={generatingForecast}
                  className="w-full px-4 py-3 bg-primary-red hover:bg-primary-redLight text-white font-bold text-sm uppercase tracking-wider transition-all disabled:opacity-50"
                >
                  {generatingForecast ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Generating...
                    </span>
                  ) : (
                    'Generate AI Forecast'
                  )}
                </button>
              </div>
            )}

            {/* AI vs Market Comparison */}
            {aiData && (
              <div className="bg-dark-charcoal border border-primary-red/30 p-6">
                <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">AI vs Market</h2>
                <div className="space-y-4">
                  {outcomes.map((outcome: string, idx: number) => {
                    const marketProb = parseFloat(prices[idx]) * 100;
                    const aiProb = Object.values(aiData.probabilities)[idx] * 100;
                    const edge = aiProb - marketProb;

                    return (
                      <div key={idx} className="border-b border-primary-red/20 pb-3 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-text-secondary uppercase">{outcome}</span>
                          <span className={`px-2 py-0.5 text-xs font-bold uppercase ${
                            edge > 5 ? 'bg-green-500/20 text-green-400' :
                            edge < -5 ? 'bg-red-500/20 text-red-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {edge > 0 ? '+' : ''}{edge.toFixed(1)}%
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-text-secondary">Market:</span>
                            <span className="ml-1 font-bold text-white">{marketProb.toFixed(1)}%</span>
                          </div>
                          <div>
                            <span className="text-text-secondary">AI:</span>
                            <span className="ml-1 font-bold text-primary-red">{aiProb.toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - AI Analysis */}
          <div className="lg:col-span-2">
            {!aiData ? (
              <div className="bg-dark-charcoal border border-primary-red/30 p-12 text-center">
                <svg className="w-20 h-20 text-primary-red/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2 uppercase">No AI Analysis Yet</h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto">
                  Click &quot;Generate AI Forecast&quot; to get detailed probability analysis, reasoning, and key factors from Claude AI.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* AI Probabilities */}
                <div className="bg-dark-charcoal border border-primary-red/30 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">AI Probability Forecast</h2>
                    <span className={`px-3 py-1 text-xs font-bold uppercase ${
                      aiData.confidence.toLowerCase() === 'high' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                      aiData.confidence.toLowerCase() === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                      'bg-gray-500/20 text-gray-400 border border-gray-500/50'
                    }`}>
                      {aiData.confidence} Confidence
                    </span>
                  </div>
                  <div className="space-y-4">
                    {outcomes.map((outcome: string, idx: number) => {
                      const aiProb = Object.values(aiData.probabilities)[idx] * 100;
                      return (
                        <div key={idx}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-text-secondary uppercase">{outcome}</span>
                            <span className="text-3xl font-bold text-primary-red">{aiProb.toFixed(1)}%</span>
                          </div>
                          <div className="w-full bg-dark-black h-3">
                            <div
                              className="bg-gradient-to-r from-primary-red to-red-400 h-3 transition-all"
                              style={{ width: `${aiProb}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* AI Reasoning */}
                <div className="bg-dark-charcoal border border-primary-red/30 p-6">
                  <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">AI Reasoning</h2>
                  <div className="red-accent-left">
                    <p className="text-text-secondary leading-relaxed">
                      {aiData.reasoning}
                    </p>
                  </div>
                </div>

                {/* Key Factors */}
                <div className="bg-dark-charcoal border border-primary-red/30 p-6">
                  <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Key Factors Considered</h2>
                  <div className="space-y-3">
                    {aiData.keyFactors.map((factor, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-dark-black border border-primary-red/20"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-red flex items-center justify-center text-white font-bold text-sm">
                          {idx + 1}
                        </div>
                        <p className="text-text-secondary leading-relaxed flex-1 pt-1 text-sm">
                          {factor}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regenerate Button */}
                <button
                  onClick={handleGenerateForecast}
                  disabled={generatingForecast}
                  className="w-full px-4 py-3 bg-dark-black border border-primary-red/50 text-white font-bold text-sm uppercase tracking-wider hover:bg-primary-red/20 transition-all disabled:opacity-50"
                >
                  {generatingForecast ? 'Regenerating...' : 'Regenerate AI Forecast'}
                </button>
              </div>
            )}
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
}
