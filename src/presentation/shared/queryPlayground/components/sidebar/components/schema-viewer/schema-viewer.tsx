import type { SchemaViewerProps } from './schema-viewer.types';
import { schemaViewerStyles as styled } from './schema-viewer.styles';

function SchemaViewer({ selectedDataset }: SchemaViewerProps) {
  return (
    <div className={styled.schemaBox}>
      {Object.entries(selectedDataset ?? {}).map(([field, type]) => (
        <div key={field} className={styled.schemaRow}>
          <span className={styled.colName}>{field}</span>
          <span className={styled.colType}>{type}</span>
        </div>
      ))}
    </div>
  );
}

export { SchemaViewer };
