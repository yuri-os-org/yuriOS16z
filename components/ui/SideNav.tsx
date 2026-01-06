'use client';

import { useState } from 'react';

const navItems = [
  'Binary Markets',
  'Multi-Outcome',
  'Long-Term Forecasts',
  'Real-Time Analysis',
  'Edge Detection',
  'Sentiment Analysis'
];

export function SideNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="space-y-2">
      {navItems.map((item, index) => (
        <button
          key={item}
          onClick={() => setActiveIndex(index)}
          className={`
            w-full text-left px-4 py-3 rounded-lg transition-all font-medium text-lg
            ${activeIndex === index
              ? 'text-primary-orange bg-primary-orange bg-opacity-10 border-l-4 border-primary-orange'
              : 'text-gray-400 hover:text-white hover:bg-gray-800 border-l-4 border-transparent'
            }
          `}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
