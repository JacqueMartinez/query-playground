import { Card } from '@/presentation/ui';

import { resultsPanelStyles as s } from './results-panel.styles';
import type { ResultsPanelProps } from './results-panel.types';

function ResultsPanel({ title, columns, rows }: ResultsPanelProps) {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>{title}</p>

      <Card className={s.card}>
        <div className={s.grid}>
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
      </Card>
    </div>
  );
}

export { ResultsPanel };
