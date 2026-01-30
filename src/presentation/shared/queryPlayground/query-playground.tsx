'use client';

import { useState } from 'react';

import { queryPlaygroundStyles as s } from './query-playground.styles';

import { Sidebar } from './components/sidebar/sidebar';
import { EditorPanel } from './components/editor-panel/editor-panel';
import { ResultsPanel } from './components/results-panel/results-panel';
import { HeaderBar } from './components/header-bar/header-bar';
import { RunBar } from './components/run-bar/run-bar';

const DEFAULT_QUERY = `CREATE TABLE IF NOT EXISTS "chats" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "title" text,
  "atlas_user_id" uuid NOT NULL,
  "created_at" timestamp DEFAULT now()
);`;

function QueryPlayground() {
  const [query, setQuery] = useState(DEFAULT_QUERY);

  const mockColumns = 5;
  const mockRows = 5;

  return (
    <div className={s.wrapper}>
      <HeaderBar />

      <div className={s.grid}>
        <Sidebar
          schemesLabel="Database Schemes"
          schemeValue="db_scheme_1"
          tables={['table_1', 'table_2', 'table_3', 'table_4']}
          selectedTable="table_1"
          onSelectTable={() => {}}
          onChangeScheme={() => {}}
        />

        <div className={s.right}>
          <EditorPanel
            title="Introduce your SQL query below:"
            query={query}
            onChangeQuery={setQuery}
          />

          <RunBar onRun={() => {}} />

          <ResultsPanel title="Results:" columns={mockColumns} rows={mockRows} />
        </div>
      </div>
    </div>
  );
}

export { QueryPlayground };
