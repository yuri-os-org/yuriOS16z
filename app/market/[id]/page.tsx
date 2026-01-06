'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Market } from '@/types/market';
import { generateForecast } from '@/services/anthropic';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

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
  const [aiForecast, setAiForecast] = useState<string>('');
  const [generatingForecast, setGeneratingForecast] = useState(false);

  useEffect(() => {
    // Get market data from sessionStorage
    const marketId = params.id as string;
    const storedData = sessionStorage.getItem(`market_${marketId}`);

    if (storedData) {
      try {
        const marketData = JSON.parse(storedData);
        setMarket(marketData);
        setLoading(false);
      } catch (e) {
        console.error('Failed to parse market data:', e);
        router.push('/');
      }
    } else {
      // If no data, redirect back to home
      router.push('/');
    }
  }, [params.id, router]);

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

  if (loading || !market) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium">Loading market...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const outcomes = JSON.parse(market.outcomes);
  const prices = JSON.parse(market.outcomePrices);
  const aiData = aiForecast ? parseAIForecast(aiForecast) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Markets
        </button>

        {/* Market Question */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {market.question}
          </h1>
          <div className="flex items-center gap-3">
            <Badge variant="neutral">Binary Market</Badge>
            <Badge variant="success">Active</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Market Data */}
          <div className="lg:col-span-1 space-y-6">
            {/* Current Market Odds */}
            <Card>
              <CardContent>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Current Market Odds</h2>
                <div className="space-y-3">
                  {outcomes.map((outcome: string, idx: number) => {
                    const prob = parseFloat(prices[idx]) * 100;
                    return (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{outcome}</span>
                          <span className="text-2xl font-bold text-gray-900">{prob.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all"
                            style={{ width: `${prob}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Generate AI Analysis Button */}
            {!aiForecast && (
              <Card>
                <CardContent>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">AI Analysis</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Get detailed AI-powered probability forecasts and analysis from Claude AI.
                  </p>
                  <Button
                    onClick={handleGenerateForecast}
                    isLoading={generatingForecast}
                    className="w-full"
                    variant="primary"
                  >
                    Generate AI Forecast
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* AI vs Market Comparison */}
            {aiData && (
              <Card>
                <CardContent>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">AI vs Market</h2>
                  <div className="space-y-4">
                    {outcomes.map((outcome: string, idx: number) => {
                      const marketProb = parseFloat(prices[idx]) * 100;
                      const aiProb = Object.values(aiData.probabilities)[idx] * 100;
                      const edge = aiProb - marketProb;

                      return (
                        <div key={idx} className="border-b border-gray-200 pb-3 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">{outcome}</span>
                            <Badge
                              variant={edge > 5 ? 'success' : edge < -5 ? 'error' : 'neutral'}
                            >
                              {edge > 0 ? '+' : ''}{edge.toFixed(1)}%
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="text-gray-500">Market:</span>
                              <span className="ml-1 font-semibold text-gray-900">{marketProb.toFixed(1)}%</span>
                            </div>
                            <div>
                              <span className="text-gray-500">AI:</span>
                              <span className="ml-1 font-semibold text-blue-600">{aiProb.toFixed(1)}%</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - AI Analysis */}
          <div className="lg:col-span-2">
            {!aiData ? (
              <Card>
                <CardContent className="text-center py-16">
                  <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No AI Analysis Yet</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Click "Generate AI Forecast" to get detailed probability analysis, reasoning, and key factors from Claude AI.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* AI Probabilities */}
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-gray-900">AI Probability Forecast</h2>
                      <Badge
                        variant={
                          aiData.confidence.toLowerCase() === 'high' ? 'success' :
                          aiData.confidence.toLowerCase() === 'medium' ? 'warning' :
                          'neutral'
                        }
                      >
                        {aiData.confidence} Confidence
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      {outcomes.map((outcome: string, idx: number) => {
                        const aiProb = Object.values(aiData.probabilities)[idx] * 100;
                        return (
                          <div key={idx}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">{outcome}</span>
                              <span className="text-3xl font-bold text-blue-600">{aiProb.toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all"
                                style={{ width: `${aiProb}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* AI Reasoning */}
                <Card>
                  <CardContent>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">AI Reasoning</h2>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                      <p className="text-gray-800 leading-relaxed text-base">
                        {aiData.reasoning}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Factors */}
                <Card>
                  <CardContent>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Key Factors Considered</h2>
                    <div className="space-y-3">
                      {aiData.keyFactors.map((factor, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                            {idx + 1}
                          </div>
                          <p className="text-gray-800 leading-relaxed flex-1 pt-1">
                            {factor}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Edge Analysis Explanation */}
                <Card>
                  <CardContent>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Understanding the Edge</h2>
                    <div className="prose prose-sm max-w-none text-gray-700">
                      <p className="mb-3">
                        The <strong>edge</strong> represents the difference between AI's probability forecast and the current market odds.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="success">Positive Edge</Badge>
                          </div>
                          <p className="text-sm">
                            AI thinks this outcome is <strong>more likely</strong> than the market suggests. Potential buy opportunity.
                          </p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="error">Negative Edge</Badge>
                          </div>
                          <p className="text-sm">
                            AI thinks this outcome is <strong>less likely</strong> than the market suggests. Potential sell opportunity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Regenerate Button */}
                <Button
                  onClick={handleGenerateForecast}
                  isLoading={generatingForecast}
                  variant="outline"
                  className="w-full"
                >
                  Regenerate AI Forecast
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
