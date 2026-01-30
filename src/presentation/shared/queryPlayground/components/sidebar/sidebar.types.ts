import type { Dataset } from '@/domain/datasets/types';
import type { QueryHistoryItem, SavedQuery } from '@/domain/query/types';

export type SidebarProps = {
  label: string;
  datasets: Dataset[];
  selectedDatasetName: Dataset['name'];
  onChangeDataset: (name: Dataset['name']) => void;
  isLoading?: boolean;
  error?: string | null;
  history: QueryHistoryItem[];
  saved: SavedQuery[];
  onRunHistory: (item: QueryHistoryItem) => void;
  onRunSaved: (item: SavedQuery) => void;
  onDeleteHistory: (item: QueryHistoryItem) => void;
  onDeleteSaved: (item: SavedQuery) => void;
};
