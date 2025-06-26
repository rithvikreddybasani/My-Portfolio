import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { navigationItems } from '../data/data';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="group flex items-center gap-2 text-2xl font-bold transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-gold-400 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-cyan-400 to-gold-400 p-2 rounded-lg">
                  <Code2 className="w-6 h-6 text-slate-900" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-cyan-400 to-gold-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-gold-300 transition-all duration-300">
                BR
              </span>
              <Sparkles className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 group ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-gold-500/20 rounded-lg border border-cyan-500/30 animate-pulse" />
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800/0 to-slate-800/0 group-hover:from-slate-800/50 group-hover:to-slate-700/50 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Underline effect */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-gold-400 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-110"
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-xl rounded-lg border border-slate-700/50 mt-2 shadow-2xl">
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-102 flex items-center gap-3 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-gold-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                } ${isMobileMenuOpen ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-cyan-400 to-gold-400' 
                    : 'bg-gray-600 group-hover:bg-gray-400'
                }`} />
                {item.label}
                {activeSection === item.id && (
                  <Sparkles className="w-4 h-4 text-gold-400 ml-auto animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animated background line */}
      <div className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 ${
        isScrolled ? 'w-full opacity-30' : 'w-0 opacity-0'
      }`} />
    </nav>
  );
};

export default Navigation;