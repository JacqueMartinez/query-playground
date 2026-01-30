'use client';

import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { QueryHistoryItem, SavedQuery } from '@/domain/query/types';
import { useLocalStorageState } from '../hooks/use-local-storage-state';
import { createId } from './query-playground.utils';
import { QUERY_HISTORY_LIMIT, QUERY_STORAGE_KEYS } from './query-playground.constants';

type QueryPlaygroundContextValue = {
  query: string;
  setQuery: (value: string) => void;
  selectedDatasetName: string;
  setSelectedDatasetName: (value: string) => void;
  history: QueryHistoryItem[];
  saved: SavedQuery[];
  addHistory: (payload: { query: string; dataset: string }) => QueryHistoryItem;
  saveQuery: (payload: { query: string; dataset: string }) => SavedQuery;
  deleteHistory: (item: QueryHistoryItem) => void;
  deleteSaved: (item: SavedQuery) => void;
};

const QueryPlaygroundContext = createContext<QueryPlaygroundContextValue | null>(null);

function QueryPlaygroundProvider({ children }: { children: ReactNode }) {
  // Estado global persistente del playground (query, dataset, historial y guardadas).
  const [query, setQuery] = useLocalStorageState(
    QUERY_STORAGE_KEYS.query,
    'SELECT * FROM customers;',
  );

  const [selectedDatasetName, setSelectedDatasetName] = useLocalStorageState(
    QUERY_STORAGE_KEYS.dataset,
    '',
  );

  const [history, setHistory] = useLocalStorageState<QueryHistoryItem[]>(
    QUERY_STORAGE_KEYS.history,
    [],
  );

  const [saved, setSaved] = useLocalStorageState<SavedQuery[]>(QUERY_STORAGE_KEYS.saved, []);

  const addHistory = (payload: { query: string; dataset: string }) => {
    // Inserta al inicio y elimina duplicados por query+dataset.
    const entry: QueryHistoryItem = {
      id: createId(),
      query: payload.query,
      dataset: payload.dataset,
      ranAt: new Date().toISOString(),
    };

    setHistory((prev) => {
      const next = [
        entry,
        ...prev.filter((item) => item.query !== entry.query || item.dataset !== entry.dataset),
      ];
      return next.slice(0, QUERY_HISTORY_LIMIT);
    });

    return entry;
  };

  const saveQuery = (payload: { query: string; dataset: string }) => {
    const entry: SavedQuery = {
      id: createId(),
      query: payload.query,
      dataset: payload.dataset,
      savedAt: new Date().toISOString(),
    };

    setSaved((prev) => {
      const next = [
        entry,
        ...prev.filter((item) => item.query !== entry.query || item.dataset !== entry.dataset),
      ];
      return next.slice(0, QUERY_HISTORY_LIMIT);
    });

    return entry;
  };

  const deleteHistory = (item: QueryHistoryItem) => {
    setHistory((prev) => prev.filter((entry) => entry.id !== item.id));
  };

  const deleteSaved = (item: SavedQuery) => {
    setSaved((prev) => prev.filter((entry) => entry.id !== item.id));
  };

  return (
    <QueryPlaygroundContext.Provider
      value={{
        query,
        setQuery,
        selectedDatasetName,
        setSelectedDatasetName,
        history,
        saved,
        addHistory,
        saveQuery,
        deleteHistory,
        deleteSaved,
      }}
    >
      {children}
    </QueryPlaygroundContext.Provider>
  );
}

function useQueryPlayground() {
  const context = useContext(QueryPlaygroundContext);
  if (!context) {
    throw new Error('useQueryPlayground must be used within QueryPlaygroundProvider');
  }
  return context;
}

export { QueryPlaygroundProvider, useQueryPlayground };
