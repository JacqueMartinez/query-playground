import { requestJson } from '@/network/http-client';
import type { Dataset } from '@/domain/datasets/types';

async function fetchDatasets(): Promise<Dataset[]> {
  return requestJson<Dataset[]>('/api/data/datasets', {
    method: 'GET',
  });
}

export { fetchDatasets };
