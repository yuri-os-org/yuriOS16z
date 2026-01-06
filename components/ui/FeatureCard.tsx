import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Icon Circle */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full bg-primary-orange flex items-center justify-center">
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-neutral-black mb-3 font-display">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
