'use client';

import { useState } from 'react';
import { DATASETS } from '@/mocks/datasets';

import { queryPlaygroundStyles as styled } from './query-playground.styles';

import { Sidebar } from './components/sidebar/sidebar';
import { EditorPanel } from './components/editor-panel/editor-panel';
import { ResultsPanel } from './components/results-panel/results-panel';
import { HeaderBar } from './components/header-bar/header-bar';
import { RunBar } from './components/run-bar/run-bar';

function QueryPlayground() {
  const [query, setQuery] = useState('SELECT * FROM customers;');
  const [selectedDatasetName, setSelectedDatasetName] = useState(DATASETS[0].name);
  const selectedDataset = DATASETS.find((dataset) => dataset.name === selectedDatasetName);

  const sqlKeywords = [
    'SELECT',
    'FROM',
    'WHERE',
    'INSERT',
    'INTO',
    'VALUES',
    'UPDATE',
    'SET',
    'DELETE',
    'RETURNING',
    'JOIN',
    'LEFT',
    'RIGHT',
    'INNER',
    'OUTER',
    'ON',
    'GROUP BY',
    'ORDER BY',
    'LIMIT',
    'OFFSET',
    'AS',
    'AND',
    'OR',
    'NOT',
    'IN',
    'IS',
    'NULL',
    'LIKE',
    'DISTINCT',
    'HAVING',
    'BETWEEN',
    'EXISTS',
    'CASE',
    'WHEN',
    'THEN',
    'ELSE',
    'END',
  ];

  const sqlFunctions = [
    'COUNT',
    'SUM',
    'AVG',
    'MIN',
    'MAX',
    'COALESCE',
    'NULLIF',
    'GREATEST',
    'LEAST',
    'ROUND',
    'CEIL',
    'FLOOR',
    'UPPER',
    'LOWER',
    'LENGTH',
    'SUBSTRING',
    'CONCAT',
    'NOW',
    'CURRENT_DATE',
    'CURRENT_TIMESTAMP',
    'DATE_TRUNC',
    'EXTRACT',
    'TO_CHAR',
  ];

  const tableNames = DATASETS.map((dataset) => dataset.name);
  const columnNames = Object.keys(selectedDataset?.schema ?? {});
  const qualifiedColumns = DATASETS.flatMap((dataset) =>
    Object.keys(dataset.schema).map((column) => `${dataset.name}.${column}`),
  );

  const autocompleteSuggestions = {
    tables: tableNames,
    columns: columnNames,
    qualifiedColumns,
    keywords: sqlKeywords,
    functions: sqlFunctions,
  };

  return (
    <div className={styled.wrapper}>
      <HeaderBar />

      <div className={styled.grid}>
        <Sidebar
          label="Database Schemes"
          datasets={DATASETS}
          selectedDatasetName={selectedDatasetName}
          onChangeDataset={setSelectedDatasetName}
        />

        <div className={styled.right}>
          <EditorPanel
            title="Introduce your SQL query below:"
            query={query}
            onChangeQuery={setQuery}
            suggestions={autocompleteSuggestions}
          />
          <RunBar onRun={() => {}} />

          <ResultsPanel columns={5} rows={6} />
        </div>
      </div>
    </div>
  );
}

export { QueryPlayground };
