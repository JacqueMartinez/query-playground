'use client';

import { useEffect, useState } from 'react';
import { headerBarStyles as styled } from './header-bar.styles';
import { useTheme } from '@/presentation/shared/theme/use-theme';

function HeaderBar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const showLightIcon = mounted && theme === 'light';

  return (
    <header className={styled.wrapper}>
      <div>
        <img src="/Logo.svg" className={styled.logo} />
      </div>
      <button
        type="button"
        className={styled.themeButton}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {mounted && (
          <>
            {showLightIcon ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 3a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9-5a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1ZM6.5 12a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h1.5a1 1 0 0 1 1 1Zm11.364 6.364a1 1 0 0 1 0 1.414l-1.06 1.06a1 1 0 1 1-1.415-1.413l1.06-1.06a1 1 0 0 1 1.415 0ZM8.61 6.61a1 1 0 0 1 0 1.414L7.55 9.08A1 1 0 1 1 6.136 7.667l1.06-1.06a1 1 0 0 1 1.414 0Zm9.254-1.474a1 1 0 0 1 1.415 0l1.06 1.06a1 1 0 0 1-1.414 1.414l-1.06-1.06a1 1 0 0 1 0-1.414ZM6.136 16.333a1 1 0 0 1 1.414 0l1.06 1.06a1 1 0 1 1-1.414 1.414l-1.06-1.06a1 1 0 0 1 0-1.414Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M21 15.5A9 9 0 1 1 8.5 3a7 7 0 1 0 12.5 12.5Z" />
              </svg>
            )}
          </>
        )}
      </button>
    </header>
  );
}

export { HeaderBar };
