import type { SavedQuery } from '@/domain/query/types';

type SavedPanelProps = {
  saved: SavedQuery[];
  onRunSaved: (item: SavedQuery) => void;
  onDeleteSaved: (item: SavedQuery) => void;
};

export type { SavedPanelProps };
