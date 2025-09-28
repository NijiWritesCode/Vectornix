import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../../public/vc-logo.png';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme classes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex justify-between items-center">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" width={35} />
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          Vectornix
        </span>
      </div>

      {/* Middle: Desktop Nav Links */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
        <li className="hover:text-blue-600 cursor-pointer transition">Docs</li>
        <li className="hover:text-blue-600 cursor-pointer transition">Examples</li>
        <li className="hover:text-blue-600 cursor-pointer transition">Blog</li>
        <li className="hover:text-blue-600 cursor-pointer transition">Community</li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center space-x-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? (
            <SunIcon className="h-5 w-5 text-yellow-400" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-800" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-800 md:hidden transform transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 dark:text-gray-300 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">Docs</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Examples</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Blog</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Community</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;