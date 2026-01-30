import type { SchemaViewerProps } from './schema-viewer.types';
import { schemaViewerStyles as s } from './schema-viewer.styles';

function SchemaViewer({ selectedDataset }: SchemaViewerProps) {
  return (
    <div className={s.schemaBox}>
      {Object.entries(selectedDataset ?? {}).map(([field, type]) => (
        <div key={field} className={s.schemaRow}>
          <span className={s.colName}>{field}</span>
          <span className={s.colType}>{type}</span>
        </div>
      ))}
    </div>
  );
}

export { SchemaViewer };
