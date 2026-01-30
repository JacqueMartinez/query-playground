import { cn } from '@/lib/cn';
import type { ResultsPanelProps } from './results-panel.types';
import { resultsPanelStyles as styled } from './results-panel.styles';

function ResultsPanel({ columns, rows }: ResultsPanelProps) {
  return (
    <div className={styled.wrapper}>
      <p className={cn(styled.title, 'mt-10')}>Results:</p>
      <div className={styled.resultsGrid}>
        {Array.from({ length: columns }).map((_, col) => (
          <div key={col} className="space-y-4">
            <p className={styled.columnTitle}>Column</p>
            {Array.from({ length: rows }).map((__, row) => (
              <p key={row} className={styled.cell}>
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
