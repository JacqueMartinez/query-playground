import type { ResultsPanelProps } from './results-panel.types';
import { resultsPanelStyles as styled } from './results-panel.styles';
import { Alert, Table, TableRoot, Td, Th } from '@/presentation/ui';

function ResultsPanel({ results, error, isLoading }: ResultsPanelProps) {
  const columns = results[0] ? Object.keys(results[0]) : [];

  return (
    <div className={styled.wrapper}>
      <p className={styled.title}>Resultados:</p>
      {isLoading ? (
        <Alert className="mt-4">Ejecutando consulta...</Alert>
      ) : error ? (
        <Alert className="mt-4" variant="error">
          {error}
        </Alert>
      ) : results.length === 0 ? (
        <Alert className="mt-4">Aún no hay resultados. Ejecuta una consulta.</Alert>
      ) : (
        <TableRoot className={styled.tableRoot}>
          <Table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <Th key={column}>{column}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <Td key={`${index}-${column}`}>{String(row[column] ?? '')}</Td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </TableRoot>
      )}
    </div>
  );
}

export { ResultsPanel };
