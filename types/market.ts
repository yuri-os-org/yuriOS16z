export interface Market {
  id: string;
  question: string;
  outcomes: string; // JSON string
  outcomePrices: string; // JSON string
}

export interface MarketWithForecast extends Market {
  aiForecast?: string;
  loading?: boolean;
}
