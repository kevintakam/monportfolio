'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('home');

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true' || 
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId!;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Mon Portfolio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-link px-3 py-2 text-sm font-medium ${activeLink === link.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-100'}`}
                >
                  {link.label}
                </Link>
              ))}
              
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full focus:outline-none"
                aria-label={darkMode ? 'Désactiver le mode sombre' : 'Activer le mode sombre'}
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full focus:outline-none"
              aria-label={darkMode ? 'Désactiver le mode sombre' : 'Activer le mode sombre'}
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </button>
            
            <button
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pb-3 px-4`}>
        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link px-3 py-2 text-sm font-medium ${activeLink === link.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-100'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
