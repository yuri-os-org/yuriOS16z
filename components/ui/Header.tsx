'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const contractAddress = 'w9wm7HNCsot3BxsKu59C5jrvAnEcDYdDzgqi6HVpump';

  const copyAddress = () => {
    if (contractAddress) {
      navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-black border-b border-primary-red/30">
      {/* Contract Address Bar */}
      <div className="bg-dark-charcoal border-b border-primary-red/20 py-1 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-secondary font-mono">CA:</span>
            <code className="text-xs text-text-primary font-mono">{contractAddress}</code>
            <button
              onClick={copyAddress}
              className={`px-2 py-0.5 text-xs font-bold uppercase ${
                'bg-primary-red hover:bg-primary-redLight text-white cursor-pointer'
              } transition-colors`}
            >
              {copied ? 'COPIED' : 'COPY'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="red-bar">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Logo - Left on desktop */}
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/images/characters/Dark Maga Cat (6).png"
              alt="Agent Yuri"
              width={32}
              height={32}
              className="drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]"
            />
            <span className="text-white font-bold text-sm tracking-widest">AGENT YURI</span>
          </a>

          {/* Desktop Navigation - Right */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#markets" className="px-4 py-1 text-xs font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-wider">
              Markets
            </a>
            <span className="text-white/50">|</span>
            <a href="#about" className="px-4 py-1 text-xs font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-wider">
              About
            </a>
            <span className="text-white/50">|</span>
            <a href="#lore" className="px-4 py-1 text-xs font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-wider">
              The Lore
            </a>
            <span className="text-white/50">|</span>
            <a href="https://x.com/Chet_Rippo" target="_blank" rel="noopener noreferrer" className="px-4 py-1 text-xs font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-wider">
              Join Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-charcoal border-t border-primary-red/30">
          <nav className="flex flex-col">
            <a href="#markets" className="px-6 py-3 text-sm font-bold text-white hover:bg-primary-red/20 transition-colors uppercase tracking-wider border-b border-primary-red/20">
              Markets
            </a>
            <a href="#about" className="px-6 py-3 text-sm font-bold text-white hover:bg-primary-red/20 transition-colors uppercase tracking-wider border-b border-primary-red/20">
              About
            </a>
            <a href="#lore" className="px-6 py-3 text-sm font-bold text-white hover:bg-primary-red/20 transition-colors uppercase tracking-wider border-b border-primary-red/20">
              The Lore
            </a>
            <a href="https://x.com/Chet_Rippo" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm font-bold text-white hover:bg-primary-red/20 transition-colors uppercase tracking-wider">
              Join Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
