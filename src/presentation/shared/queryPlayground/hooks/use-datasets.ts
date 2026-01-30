import { useCallback, useEffect, useState } from 'react';
import type { Dataset } from '@/domain/datasets/types';
import { fetchDatasets } from '@/data/datasets/datasets.api';

function useDatasets() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Carga datasets desde la API y expone estados de carga y error.
  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchDatasets();
      setDatasets(response ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
      setDatasets([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Dispara la carga inicial al montar el componente.
    void load();
  }, [load]);

  return {
    datasets,
    error,
    isLoading,
    reload: load,
  };
}

export { useDatasets };
