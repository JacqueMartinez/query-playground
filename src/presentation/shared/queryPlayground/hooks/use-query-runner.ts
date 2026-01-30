import { useCallback, useState } from 'react';
import type { QueryRequest, QueryResultRow } from '@/domain/query/types';
import { runQuery } from '@/data/query/query.api';

function useQueryRunner() {
  const [results, setResults] = useState<QueryResultRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Ejecuta la consulta y actualiza resultados/errores de forma centralizada.
  const execute = useCallback(async (request: QueryRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await runQuery(request);
      if (response.error) {
        setError(response.error);
        setResults([]);
        return;
      }
      setResults(response.results ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    results,
    error,
    isLoading,
    runQuery: execute,
  };
}

export { useQueryRunner };
