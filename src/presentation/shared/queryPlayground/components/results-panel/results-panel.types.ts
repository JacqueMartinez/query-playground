import type { QueryResultRow } from '@/domain/query/types';

export type ResultsPanelProps = {
  results: QueryResultRow[];
  error?: string | null;
  isLoading?: boolean;
};
