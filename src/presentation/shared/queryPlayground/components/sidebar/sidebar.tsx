import { SchemaViewer } from './components/schema-viewer';
import { HistoryPanel } from './components/history-panel';
import { SavedPanel } from './components/saved-panel';

import { Alert, Select } from '@/presentation/ui';
import type { SidebarProps } from './sidebar.types';
import { sidebarStyles as styled } from './sidebar.styles';

function Sidebar({
  label,
  datasets,
  selectedDatasetName,
  onChangeDataset,
  isLoading = false,
  error,
  history,
  saved,
  onRunHistory,
  onRunSaved,
  onDeleteHistory,
  onDeleteSaved,
}: SidebarProps) {
  const selectedDataset = datasets.find((d) => d.name === selectedDatasetName);

  return (
    <aside className={styled.aside}>
      <section className={styled.section}>
        <div className={styled.schemaBody}>
          <p className={styled.label}>{label}</p>

          {isLoading ? (
            <p className="text-xs text-white/60">Cargando datasets...</p>
          ) : error ? (
            <Alert variant="error">{error}</Alert>
          ) : datasets.length === 0 ? (
            <p className="text-xs text-white/60">No hay datasets disponibles.</p>
          ) : (
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
          )}
          <div className={styled.schemaScroll}>
            <SchemaViewer selectedDataset={selectedDataset?.schema} />
          </div>
        </div>
      </section>

      <section className={styled.section}>
        <HistoryPanel
          history={history}
          onRunHistory={onRunHistory}
          onDeleteHistory={onDeleteHistory}
        />
      </section>

      <section className={styled.section}>
        <SavedPanel saved={saved} onRunSaved={onRunSaved} onDeleteSaved={onDeleteSaved} />
      </section>
    </aside>
  );
}

export { Sidebar };
