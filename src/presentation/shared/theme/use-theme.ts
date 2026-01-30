'use client';

import { useEffect, useState } from 'react';
import { THEME_DARK, THEME_LIGHT, THEME_STORAGE_KEY } from './theme.constants';

type Theme = typeof THEME_DARK | typeof THEME_LIGHT;

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return THEME_DARK;
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === THEME_LIGHT || stored === THEME_DARK) {
    return stored;
  }

  return THEME_DARK;
}

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') {
    return;
  }

  const body = document.body;
  body.classList.remove('theme-dark', 'theme-light');
  body.classList.add(theme === THEME_LIGHT ? 'theme-light' : 'theme-dark');
}

function useTheme() {
  // Estado de tema con persistencia en localStorage.
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    // Sincroniza la clase del body y el storage cuando cambia el tema.
    applyTheme(theme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, [theme]);

  // Alterna entre modo claro y oscuro.
  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME_LIGHT ? THEME_DARK : THEME_LIGHT));
  };

  return { theme, toggleTheme };
}

export { useTheme };
