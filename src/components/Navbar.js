import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'CV', path: '/cv' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  // إغلاق القائمة عند الضغط خارجها
  React.useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClick = (e) => {
      if (e.target.closest('#mobileSidebar') || e.target.closest('#mobileMenuBtn')) return;
      setIsMobileMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${location.pathname === item.path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500" />
                )}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            id="mobileMenuBtn"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 shadow-lg"
            style={{ fontSize: '1.5rem' }}
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Sidebar + Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Sidebar */}
          <div
            id="mobileSidebar"
            className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-gray-950 via-blue-900 to-purple-950 shadow-2xl z-50 flex flex-col transform translate-x-0 transition-transform duration-200 md:hidden`}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white text-2xl focus:outline-none"
                aria-label="Close sidebar"
              >
                &times;
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-4 px-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-4 rounded-xl text-xl font-bold transition-colors duration-200 ${location.pathname === item.path ? 'text-blue-400 bg-blue-900/40' : 'text-gray-100 hover:text-blue-400 hover:bg-gray-800/80'}`}
                  style={{ letterSpacing: '0.04em' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar; 