'use client';

import { useState } from 'react';
import { DATASETS } from '@/mocks/datasets';

import { queryPlaygroundStyles as s } from './query-playground.styles';

import { Sidebar } from './components/sidebar/sidebar';
import { EditorPanel } from './components/editor-panel/editor-panel';
import { ResultsPanel } from './components/results-panel/results-panel';
import { HeaderBar } from './components/header-bar/header-bar';
import { RunBar } from './components/run-bar/run-bar';

function QueryPlayground() {
  const [query, setQuery] = useState('SELECT * FROM customers;');
  const [selectedDatasetName, setSelectedDatasetName] = useState(DATASETS[0].name);

  return (
    <div className={s.wrapper}>
      <HeaderBar />

      <div className={s.grid}>
        <Sidebar
          label="Database Schemes"
          datasets={DATASETS}
          selectedDatasetName={selectedDatasetName}
          onChangeDataset={setSelectedDatasetName}
        />

        <div className={s.right}>
          <EditorPanel
            title="Introduce your SQL query below:"
            query={query}
            onChangeQuery={setQuery}
          />
          <RunBar onRun={() => {}} />

          <ResultsPanel columns={5} rows={6} />
        </div>
      </div>
    </div>
  );
}

export { QueryPlayground };
