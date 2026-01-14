import { Market } from '@/types/market';

interface ManifoldMarket {
  id: string;
  question: string;
  probability?: number;
  outcomeType: string;
  isResolved: boolean;
}

export async function getMarkets(limit: number = 20): Promise<Market[]> {
  try {
    // Fetch markets - limit controls how many we fetch
    const res = await fetch(`https://api.manifold.markets/v0/markets?limit=${Math.min(limit * 5, 500)}`);

    if (!res.ok) {
      throw new Error('Failed to fetch markets');
    }

    const manifoldMarkets: ManifoldMarket[] = await res.json();

    // Filter for binary markets (Yes/No) that aren't resolved
    const binaryMarkets = manifoldMarkets.filter(
      m => m.outcomeType === 'BINARY' && !m.isResolved && m.probability !== undefined
    );

    // Convert to our Market format
    const markets: Market[] = binaryMarkets.map(m => ({
      id: m.id,
      question: m.question,
      outcomes: '["Yes", "No"]',
      outcomePrices: `[${m.probability}, ${1 - (m.probability || 0)}]`
    }));

    return markets.slice(0, limit);
  } catch (error) {
    console.error('Failed to fetch markets:', error);
    throw error;
  }
}

export async function getMarketById(id: string): Promise<Market | null> {
  try {
    const res = await fetch(`https://api.manifold.markets/v0/market/${id}`);

    if (!res.ok) {
      return null;
    }

    const m = await res.json();

    if (m.outcomeType !== 'BINARY' || m.probability === undefined) {
      return null;
    }

    return {
      id: m.id,
      question: m.question,
      outcomes: '["Yes", "No"]',
      outcomePrices: `[${m.probability}, ${1 - (m.probability || 0)}]`
    };
  } catch (error) {
    console.error('Failed to fetch market by ID:', error);
    return null;
  }
}

export async function searchMarkets(query: string): Promise<Market[]> {
  try {
    // Search Manifold Markets API
    const res = await fetch(`https://api.manifold.markets/v0/search-markets?term=${encodeURIComponent(query)}&limit=50`);

    if (!res.ok) {
      throw new Error('Failed to search markets');
    }

    const manifoldMarkets: ManifoldMarket[] = await res.json();

    // Filter for binary markets (Yes/No) that aren't resolved
    const binaryMarkets = manifoldMarkets.filter(
      m => m.outcomeType === 'BINARY' && !m.isResolved && m.probability !== undefined
    );

    // Convert to our Market format
    const markets: Market[] = binaryMarkets.map(m => ({
      id: m.id,
      question: m.question,
      outcomes: '["Yes", "No"]',
      outcomePrices: `[${m.probability}, ${1 - (m.probability || 0)}]`
    }));

    return markets;
  } catch (error) {
    console.error('Failed to search markets:', error);
    throw error;
  }
}
