import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900 p-2.5 rounded-xl border border-cyan-500/30">
                <Cpu className="w-7 h-7 text-cyan-400" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                code.compyl
              </h1>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase">by Deepak Agarwal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-cyan-500/10 rounded-lg border border-cyan-500/30" />
                )}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate('units')}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-900 font-semibold px-6 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Start Learning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-slate-800/50 border border-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-cyan-400" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-cyan-500/20 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <Button
                onClick={() => {
                  onNavigate('units');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-semibold"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Start Learning
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;