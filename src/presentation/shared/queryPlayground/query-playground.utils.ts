import type { Dataset } from '@/domain/datasets/types';
import type { SuggestionGroups } from './components/editor-panel/components/code-editor/code-editor.types';
import { SQL_FUNCTIONS, SQL_KEYWORDS } from './query-playground.constants';

function buildAutocompleteSuggestions(
  datasets: Dataset[],
  selectedDataset?: Dataset,
): SuggestionGroups {
  const tableNames = datasets.map((dataset) => dataset.name);
  const columnNames = Object.keys(selectedDataset?.schema ?? {});
  const qualifiedColumns = datasets.flatMap((dataset) =>
    Object.keys(dataset.schema).map((column) => `${dataset.name}.${column}`),
  );

  return {
    tables: tableNames,
    columns: columnNames,
    qualifiedColumns,
    keywords: SQL_KEYWORDS,
    functions: SQL_FUNCTIONS,
  };
}

export { buildAutocompleteSuggestions };
