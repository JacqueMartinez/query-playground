import { useCallback, useSyncExternalStore } from 'react';

// Cachea el JSON parseado para evitar recomputar y para que getSnapshot sea estable.
const storageCache = new Map<string, { raw: string | null; parsed: unknown }>();

function readStoredValue<T>(key: string, fallback: T): T {
  const stored = window.localStorage.getItem(key);
  const cached = storageCache.get(key);

  if (cached && cached.raw === stored) {
    return cached.parsed as T;
  }

  if (stored === null) {
    storageCache.set(key, { raw: stored, parsed: fallback });
    return fallback;
  }

  try {
    const parsed = JSON.parse(stored) as T;
    storageCache.set(key, { raw: stored, parsed });
    return parsed;
  } catch {
    storageCache.set(key, { raw: stored, parsed: fallback });
    return fallback;
  }
}

function useLocalStorageState<T>(key: string, fallback: T) {
  // Suscripción para sincronizar cambios entre pestañas y dentro de la misma pestaña.
  const subscribe = useCallback((listener: () => void) => {
    if (typeof window === 'undefined') {
      return () => {};
    }

    // Escucha cambios del storage nativo y del evento interno para la misma pestaña.
    const handler = () => listener();
    window.addEventListener('storage', handler);
    window.addEventListener('local-storage', handler);

    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('local-storage', handler);
    };
  }, []);

  const getSnapshot = useCallback(() => readStoredValue(key, fallback), [key, fallback]);
  const getServerSnapshot = useCallback(() => fallback, [fallback]);

  // useSyncExternalStore evita problemas de hidratación y estados desincronizados.
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      if (typeof window === 'undefined') {
        return;
      }

      // Se resuelve con el snapshot actual para mantener consistencia entre renders.
      const prev = getSnapshot();
      const resolved = typeof next === 'function' ? (next as (v: T) => T)(prev) : next;
      const raw = JSON.stringify(resolved);
      window.localStorage.setItem(key, raw);
      storageCache.set(key, { raw, parsed: resolved });
      window.dispatchEvent(new Event('local-storage'));
    },
    [getSnapshot, key],
  );

  return [value, setValue] as const;
}

export { useLocalStorageState };
