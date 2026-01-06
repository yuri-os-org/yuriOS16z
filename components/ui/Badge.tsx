interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'primary';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'primary', size = 'md' }: BadgeProps) {
  const variants = {
    primary: 'bg-primary-orange text-white border-primary-orangeDark',
    success: 'bg-success text-white border-green-700',
    warning: 'bg-warning text-white border-yellow-600',
    error: 'bg-error text-white border-red-600',
    info: 'bg-sky-blue text-white border-sky-dark',
    neutral: 'bg-gray-200 text-neutral-black border-gray-300'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm'
  };

  return (
    <span className={`inline-flex items-center rounded-full border font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}
