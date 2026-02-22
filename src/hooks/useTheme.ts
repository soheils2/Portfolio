import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    // Default: light mode on first visit. Only dark if user explicitly chose it before.
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const updateTheme = useCallback((dark: boolean) => {
    // Simply add or remove the dark class
    document.documentElement.classList[dark ? 'add' : 'remove']('dark');
  }, []);

  useEffect(() => {
    // Apply theme immediately
    updateTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark, updateTheme]);

  return { isDark, setIsDark };
}