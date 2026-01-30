import { cn } from '@/lib/cn';
import type { ResultsPanelProps } from './results-panel.types';
import { resultsPanelStyles as s } from './results-panel.styles';

function ResultsPanel({ columns, rows }: ResultsPanelProps) {
  return (
    <div className={s.wrapper}>
      <p className={cn(s.title, 'mt-10')}>Results:</p>
      <div className={s.resultsGrid}>
        {Array.from({ length: columns }).map((_, col) => (
          <div key={col} className="space-y-4">
            <p className={s.columnTitle}>Column</p>
            {Array.from({ length: rows }).map((__, row) => (
              <p key={row} className={s.cell}>
                Value
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export { ResultsPanel };
