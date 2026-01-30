import { cn } from '@/lib/cn';
import { IconButton } from '../icon-button';
import { queriesPanelStyles as styled } from './saved-panel.styles';
import type { SavedPanelProps } from './saved-panel.types';

function SavedPanel({ saved, onRunSaved, onDeleteSaved }: SavedPanelProps) {
  return (
    <div className={styled.panel}>
      <header className={styled.header}>
        <h3 className={styled.title}>Guardadas</h3>
      </header>
      <div className={styled.body}>
        {saved.length === 0 ? (
          <p className={styled.empty}>No hay consultas guardadas.</p>
        ) : (
          saved.map((item) => (
            <div key={item.id} className={styled.item}>
              <div className={styled.itemHeader}>
                <p className={styled.query}>{item.query}</p>
                <div className={styled.actions}>
                  <IconButton label="Ejecutar consulta" onClick={() => onRunSaved(item)}>
                    <svg
                      viewBox="0 0 24 24"
                      className={cn('h-4 w-4')}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
                    </svg>
                  </IconButton>
                  <IconButton label="Eliminar consulta" onClick={() => onDeleteSaved(item)}>
                    <svg
                      viewBox="0 0 24 24"
                      className={cn('h-4 w-4')}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 3h6l1 2h4v2H4V5h4l1-2Zm1 6h2v8h-2V9Zm4 0h2v8h-2V9ZM7 9h2v8H7V9Z" />
                    </svg>
                  </IconButton>
                </div>
              </div>
              <p className={styled.meta}>
                {item.dataset} · Guardada {new Date(item.savedAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { SavedPanel };
