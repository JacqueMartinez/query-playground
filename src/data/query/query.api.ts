import { requestJson } from '@/network/http-client';
import type { QueryRequest, QueryResponse } from '@/domain/query/types';

async function runQuery(request: QueryRequest): Promise<QueryResponse> {
  return requestJson<QueryResponse>('/api/data/query', {
    method: 'POST',
    body: JSON.stringify(request),
  });
}

export { runQuery };
