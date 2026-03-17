'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem('theme');
    const isDark =
      savedTheme === 'dark' ||
      (!savedTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 120;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = sectionId || '';
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  if (!mounted) return null;

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Mon Portfolio
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeLink === link.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={
                darkMode
                  ? 'Désactiver le mode sombre'
                  : 'Activer le mode sombre'
              }
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-gray-700 dark:text-gray-200 text-lg" />
              )}
            </button>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={
                darkMode
                  ? 'Désactiver le mode sombre'
                  : 'Activer le mode sombre'
              }
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-gray-700 dark:text-gray-200 text-lg" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100 pb-4 px-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-2 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeLink === link.id
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={handleLinkClick}
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