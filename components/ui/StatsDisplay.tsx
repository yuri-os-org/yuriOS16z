interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface StatsDisplayProps {
  stats: StatItem[];
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className="text-neutral-black">
              {stat.icon}
            </div>
          </div>

          {/* Value */}
          <div className="text-5xl font-bold text-neutral-black mb-2 font-display">
            {stat.value}
          </div>

          {/* Label */}
          <div className="text-sm uppercase tracking-wider text-text-secondary font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
