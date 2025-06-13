'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="glass interactable mt-2 px-4 py-2 text-xs font-medium text-neutral-900 dark:text-white backdrop-blur-md"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
} 