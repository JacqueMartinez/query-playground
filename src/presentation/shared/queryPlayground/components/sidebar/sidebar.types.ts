import type { DatasetMock } from '@/mocks/datasets.types';

export type SidebarProps = {
  label: string;
  datasets: DatasetMock[];
  selectedDatasetName: DatasetMock['name'];
  onChangeDataset: (name: DatasetMock['name']) => void;
};
