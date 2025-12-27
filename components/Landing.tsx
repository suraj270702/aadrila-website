"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail } from 'lucide-react';

const AnimatedNavbarLanding = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStage(1), 1000),
      setTimeout(() => setAnimationStage(2), 2200),
      setTimeout(() => setAnimationStage(3), 3800),
      setTimeout(() => setAnimationStage(4), 5400),
      setTimeout(() => setAnimationStage(5), 5800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const navLinks = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: Info },
    { name: 'Services', icon: Briefcase },
    { name: 'Contact', icon: Mail },
  ];

  // Calculate logo position based on animation stage
  const getLogoPosition = () => {
    if (animationStage < 2) {
      return 'translate-x-0'; // Centered
    } else if (animationStage === 2) {
      return '-translate-x-20'; // Move left for name
    } else if (animationStage >= 3) {
      return 'translate-x-0'; // Will be positioned by fixed positioning
    }
    return 'translate-x-0';
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 transition-all duration-1000 ${
          animationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16 relative">
            {/* Logo Section in Navbar - Hidden, just placeholder for spacing */}
            <div className="absolute left-0 flex items-center space-x-3 opacity-0 pointer-events-none">
              <div className="w-10 h-10"></div>
              <span className="text-xl">NexusLab</span>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={`#${link.name.toLowerCase()}`}
                    className={`text-gray-300 hover:text-white transition-all duration-700 flex items-center space-x-2 hover:scale-110 ${
                      animationStage >= 5
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button - Absolute positioned on right */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden absolute right-0 text-white transition-all duration-700 ${
                animationStage >= 5 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={`#${link.name.toLowerCase()}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Animated Logo */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Animated Logo Journey */}
        <div
          className={`fixed transition-all duration-1200 ease-in-out z-50 ${
            animationStage < 3
              ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              : ''
          }`}
          style={
            animationStage >= 3
              ? {
                  top: '1rem',
                  left: 'max(2rem, calc((100vw - 1280px) / 2 + 1rem))',
                }
              : {}
          }
        >
          <div className="flex items-center">
            {/* Logo - Always centered initially, then moves left */}
            <div
              className={`transition-all duration-1000 ${
                animationStage >= 1 ? 'scale-100' : 'scale-0'
              } ${getLogoPosition()}`}
            >
              <div
                className={`bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-1000 ${
                  animationStage >= 3 ? 'w-10 h-10 rounded-lg' : 'w-24 h-24'
                }`}
              >
                <span
                  className={`text-white font-bold transition-all duration-1000 ${
                    animationStage >= 3 ? 'text-xl' : 'text-5xl'
                  }`}
                >
                  N
                </span>
              </div>
            </div>

            {/* Logo Name - Appears as logo moves left */}
            <div
              className={`ml-4 overflow-hidden transition-all duration-1000 ${
                animationStage >= 2 ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              <h1
                className={`text-white font-bold whitespace-nowrap transition-all duration-1000 ${
                  animationStage >= 3 ? 'text-xl' : 'text-5xl'
                }`}
              >
                NexusLab
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content - Container */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div
                className={`hidden lg:block transition-all duration-1000 ${
                  animationStage >= 4
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 max-w-xs">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-purple-400 font-semibold mb-2 text-lg">Fast Performance</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Lightning-fast load times and smooth animations for the best user experience
                  </p>
                </div>
              </div>

              {/* Center Content */}
              <div
                className={`text-center flex-1 max-w-3xl mx-auto px-4 transition-all duration-1000 ${
                  animationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Welcome to NexusLab
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Where innovation meets excellence in digital transformation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                    Get Started
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-purple-500 text-white rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Content */}
              <div
                className={`hidden lg:block transition-all duration-1000 ${
                  animationStage >= 4
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20 max-w-xs">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-pink-400 font-semibold mb-2 text-lg">Modern Design</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Beautiful interfaces built with the latest technologies and design trends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNavbarLanding;