export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <a href="/" className="flex items-center gap-2 group">
            <h1 className="text-2xl font-bold font-display text-neutral-black">
              YURI<span className="text-os text-primary-orange">.OS</span>
            </h1>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#markets" className="text-sm font-medium text-neutral-black hover:text-primary-orange transition-colors uppercase tracking-wide">
              Markets
            </a>
            <a href="#features" className="text-sm font-medium text-neutral-black hover:text-primary-orange transition-colors uppercase tracking-wide">
              Features
            </a>
            <a href="https://github.com/yuri-os-org/yuriOS16z/blob/main/DOCUMENTATION.md" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-black hover:text-primary-orange transition-colors uppercase tracking-wide">
              Docs
            </a>
            <a
              href="https://github.com/yuri-os-org/yuriOS16z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-black hover:text-primary-orange transition-colors uppercase tracking-wide"
            >
              GitHub
            </a>
            <a
              href="https://x.com/yuriOS16z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-black hover:text-primary-orange transition-colors uppercase tracking-wide"
            >
              Twitter
            </a>
            <a
              href="#markets"
              className="px-6 py-2 text-sm font-semibold rounded-lg bg-primary-orange hover:bg-primary-orangeDark text-white shadow-sm hover:shadow-md transition-all"
            >
              Launch App
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
