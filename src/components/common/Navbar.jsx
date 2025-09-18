import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Define nav items with section IDs
  const navItems = [
    { label: 'HOME', id: 'hero' },
    { label: 'ABOUT US', id: 'about' },
    { label: 'STATS', id: 'stats' },
    { label: 'PORTFOLIO', id: 'portfolio' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // close menu after click
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 backdrop-blur-sm text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-light tracking-wider cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => handleNavClick('hero')}
          >
            <span className="text-gray-800 ml-2">D LUXURIO</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-light tracking-wider hover:text-gray-600 transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Center Divider with Text */}
          <div className="relative flex items-center justify-center">
            <span className="absolute w-full border-t border-gray-500 top-1/2"></span>
            <span className="bg-gray-900 px-2 text-sm text-gray-100">DESIGN</span>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 border-t border-gray-200 backdrop-blur-lg shadow-md"
          >
            <div className="flex flex-col py-4 space-y-4 px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-gray-700 hover:text-gray-900 text-sm font-light tracking-wider"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
