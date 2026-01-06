'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { getMarkets, searchMarkets } from '@/services/polymarket';
import { MarketWithForecast } from '@/types/market';
import { Header } from '@/components/ui/Header';
import { Ticker } from '@/components/ui/Ticker';
import { Footer } from '@/components/ui/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { WelcomeSection } from '@/components/home/WelcomeSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { StatsSection } from '@/components/home/StatsSection';
import { MarketCard } from '@/components/markets/MarketCard';

export default function Home() {
  const [markets, setMarkets] = useState<MarketWithForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentLimit, setCurrentLimit] = useState(20);

  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  // Initial load
  useEffect(() => {
    getMarkets(20)
      .then(setMarkets)
      .finally(() => setLoading(false));
  }, []);

  // Live search with debounce
  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    if (searchQuery.trim().length > 0) {
      setSearching(true);
      searchTimeout.current = setTimeout(() => {
        searchMarkets(searchQuery)
          .then(setMarkets)
          .finally(() => setSearching(false));
      }, 500);
    } else {
      setSearching(true);
      getMarkets(currentLimit)
        .then(setMarkets)
        .finally(() => setSearching(false));
    }

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [searchQuery, currentLimit]);

  // Load more markets
  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore || searchQuery.trim().length > 0) return;

    setLoadingMore(true);
    const newLimit = currentLimit + 20;

    try {
      const newMarkets = await getMarkets(newLimit);
      if (newMarkets.length <= markets.length) {
        setHasMore(false);
      } else {
        setMarkets(newMarkets);
        setCurrentLimit(newLimit);
      }
    } catch (error) {
      console.error('Error loading more markets:', error);
    } finally {
      setLoadingMore(false);
    }
  }, [currentLimit, loadingMore, hasMore, markets.length, searchQuery]);

  const handleForecastUpdate = (marketId: string, forecast: string, isLoading: boolean) => {
    setMarkets(prev => prev.map(m =>
      m.id === marketId ? { ...m, aiForecast: forecast, loading: isLoading } : m
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <Ticker />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-text-secondary font-medium">Loading markets...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Ticker />

      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Markets Section */}
      <section id="markets" className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-black mb-4">
              Explore <span className="text-primary-orange">Live Markets</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Browse prediction markets and get instant AI analysis
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any market... (e.g., Bitcoin, Trump, AI)"
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl text-neutral-black placeholder-gray-400 focus:outline-none focus:border-primary-orange focus:shadow-lg transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            {searching && (
              <p className="text-sm text-text-muted mt-2">Searching markets...</p>
            )}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between text-sm text-text-muted mb-6">
            <span>
              Showing <strong className="text-primary-orange">{markets.length}</strong> market{markets.length !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
            </span>
            {!searchQuery && hasMore && (
              <span className="text-primary-orange">More available below</span>
            )}
          </div>

          {/* Markets Grid */}
          {markets.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 opacity-20">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-black mb-2">No markets found</h3>
              <p className="text-text-muted">Try different search terms</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {markets.map(market => (
                  <MarketCard
                    key={market.id}
                    market={market}
                    onForecastUpdate={handleForecastUpdate}
                  />
                ))}
              </div>

              {/* Manual Load More Button */}
              {!searchQuery && (
                <div className="flex items-center justify-center mt-12">
                  {hasMore ? (
                    <button
                      onClick={loadMore}
                      disabled={loadingMore}
                      className="px-8 py-4 bg-primary-orange hover:bg-primary-orangeDark text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loadingMore ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Loading more markets...
                        </span>
                      ) : (
                        'Load More Markets'
                      )}
                    </button>
                  ) : (
                    <p className="text-text-muted text-sm">No more markets to load</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
