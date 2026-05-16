import { useState, useEffect, useCallback } from 'react';

const THEME_KEY = 'theme';
const MANUAL_KEY = 'theme-manual';

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function useTheme() {
  const [isDark, setIsDarkRaw] = useState(() => {
    const manual = localStorage.getItem(MANUAL_KEY);
    if (manual === '1') {
      // User previously toggled manually — respect their saved choice
      return localStorage.getItem(THEME_KEY) === 'dark';
    }
    // First visit or no manual override — follow system preference
    return getSystemDark();
  });

  const applyTheme = useCallback((dark: boolean) => {
    document.documentElement.classList[dark ? 'add' : 'remove']('dark');
    // Keep browser chrome theme-color in sync
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0a0a0b' : '#ffffff');
  }, []);

  // Manual toggle — marks preference as user-chosen
  const setIsDark = useCallback((dark: boolean) => {
    localStorage.setItem(MANUAL_KEY, '1');
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    setIsDarkRaw(dark);
  }, []);

  // Apply class whenever isDark changes
  useEffect(() => {
    applyTheme(isDark);
  }, [isDark, applyTheme]);

  // Listen for system preference changes (only affects non-manual users)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(MANUAL_KEY) !== '1') {
        setIsDarkRaw(e.matches);
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return { isDark, setIsDark };
}
