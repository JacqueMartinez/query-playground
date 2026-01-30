import type { QueryHistoryItem } from '@/domain/query/types';

type HistoryPanelProps = {
  history: QueryHistoryItem[];
  onRunHistory: (item: QueryHistoryItem) => void;
  onDeleteHistory: (item: QueryHistoryItem) => void;
};

export type { HistoryPanelProps };
