import { SchemaViewer } from '../schema-viewer';
import { Select } from '@/presentation/ui';
import type { SidebarProps } from './sidebar.types';
import { sidebarStyles as s } from './sidebar.styles';

function Sidebar({ label, datasets, selectedDatasetName, onChangeDataset }: SidebarProps) {
  const selectedDataset = datasets.find((d) => d.name === selectedDatasetName);

  return (
    <aside className={s.aside}>
      <div className="space-y-2">
        <p className={s.label}>{label}</p>

        <Select
          value={selectedDatasetName}
          onChange={(e) => onChangeDataset(e.target.value as typeof selectedDatasetName)}
        >
          {datasets.map((d) => (
            <option key={d.name} value={d.name}>
              {d.name}
            </option>
          ))}
        </Select>
      </div>
      <SchemaViewer selectedDataset={selectedDataset?.schema} />
    </aside>
  );
}

export { Sidebar };
