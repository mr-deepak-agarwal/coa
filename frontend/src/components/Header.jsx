import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, BookOpen, Zap } from 'lucide-react';

const Header = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'units', label: 'Units' },
    { id: 'interactive', label: 'Interactive Lab' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white border-b-2 border-[#0a0e1a]'
        : 'bg-white border-b border-slate-100'
    }`} style={{ fontFamily: 'Outfit, sans-serif' }}>

      {/* Top amber line — always visible */}
      <div className="h-1 bg-amber-400 w-full absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-[#0a0e1a] rounded-lg flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-200">
              <Cpu className="w-4.5 h-4.5 text-white group-hover:text-[#0a0e1a]" style={{width:'18px',height:'18px'}} />
            </div>
            <div>
              <div className="text-[#0a0e1a] font-black text-lg leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                code.compyl
              </div>
              <div className="text-[9px] text-slate-400 uppercase tracking-widest">by Deepak Agarwal</div>
            </div>
          </button>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#0a0e1a] text-white'
                    : 'text-slate-600 hover:text-[#0a0e1a] hover:bg-slate-50'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded" />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onNavigate('units')}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#0a0e1a] font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow"
            >
              <BookOpen className="w-4 h-4" />
              Start Learning
            </button>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2 rounded-lg border-2 border-[#0a0e1a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#0a0e1a]" /> : <Menu className="w-5 h-5 text-[#0a0e1a]" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-[#0a0e1a] shadow-xl">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMobileMenuOpen(false); }}
              className={`block w-full text-left px-6 py-4 text-sm font-semibold border-b border-slate-100 ${
                activeSection === item.id ? 'bg-amber-50 text-[#0a0e1a] border-l-4 border-l-amber-400' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="p-4">
            <button
              onClick={() => { onNavigate('units'); setMobileMenuOpen(false); }}
              className="w-full bg-amber-400 hover:bg-amber-500 text-[#0a0e1a] font-bold py-3 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Start Learning
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
