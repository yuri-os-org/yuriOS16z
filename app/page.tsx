'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { getMarkets, searchMarkets } from '@/services/polymarket';
import { MarketWithForecast } from '@/types/market';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { LoreSection } from '@/components/home/LoreSection';
import { CommunitySection } from '@/components/home/CommunitySection';
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

  return (
    <div className="min-h-screen bg-dark-black">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Prediction Markets Section - Main Feature */}
      <section id="markets" className="relative py-16 bg-dark-black bg-japanese-watermark">
        {/* Red Bar Header */}
        <div className="red-bar mb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg font-bold tracking-widest">PREDICTION NETWORK</h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Search Bar - hide while loading */}
          {!loading && (
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search any market... (e.g., Bitcoin, Trump, AI)"
                  className="input-dark w-full px-6 py-4 text-white placeholder-text-secondary"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  {searching ? (
                    <div className="w-5 h-5 border-2 border-primary-red border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Results Count - hide while loading */}
          {!loading && (
            <div className="flex items-center justify-between text-xs text-text-secondary mb-6 uppercase tracking-wider">
              <span>
                Showing <strong className="text-primary-red">{markets.length}</strong> market{markets.length !== 1 ? 's' : ''}
                {searchQuery && ` for "${searchQuery}"`}
              </span>
              {!searchQuery && hasMore && (
                <span className="text-primary-red">More available below</span>
              )}
            </div>
          )}

          {/* Markets Grid */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-text-secondary font-medium uppercase tracking-wider">Initializing Network...</p>
              </div>
            </div>
          ) : markets.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 opacity-20">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-primary-red">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 uppercase">No Markets Found</h3>
              <p className="text-text-secondary">Try different search terms</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      className="px-8 py-4 bg-primary-red hover:bg-primary-redLight text-white font-bold text-sm uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loadingMore ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Loading...
                        </span>
                      ) : (
                        'Load More Markets'
                      )}
                    </button>
                  ) : (
                    <p className="text-text-secondary text-xs uppercase tracking-wider">End of transmission</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Lore Section */}
      <LoreSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
