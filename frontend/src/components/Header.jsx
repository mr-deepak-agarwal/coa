import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-slate-900 p-2 rounded-lg">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">code.compyl</h1>
              <p className="text-[10px] text-slate-400 tracking-widest uppercase">by Deepak Agarwal</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate('units')}
              className="bg-slate-900 hover:bg-slate-700 text-white font-medium px-5 rounded-lg transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Start Learning
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg border border-slate-200 bg-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg py-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileMenuOpen(false); }}
                className={`block w-full text-left px-6 py-3 text-sm font-medium ${
                  activeSection === item.id ? 'text-slate-900 bg-slate-50' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-3 pb-1">
              <Button
                onClick={() => { onNavigate('units'); setMobileMenuOpen(false); }}
                className="w-full bg-slate-900 hover:bg-slate-700 text-white font-medium"
              >
                <BookOpen className="w-4 h-4 mr-2" />Start Learning
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
