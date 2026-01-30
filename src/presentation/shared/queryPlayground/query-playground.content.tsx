'use client';

import { useMemo } from 'react';
import type { QueryHistoryItem, SavedQuery } from '@/domain/query/types';

import { queryPlaygroundStyles as styled } from './query-playground.styles';

import { Sidebar } from './components/sidebar/sidebar';
import { EditorPanel } from './components/editor-panel/editor-panel';
import { ResultsPanel } from './components/results-panel/results-panel';
import { HeaderBar } from './components/header-bar/header-bar';
import { RunBar } from './components/run-bar/run-bar';
import { useQueryRunner } from './hooks/use-query-runner';
import { useDatasets } from './hooks/use-datasets';
import { useQueryPlayground } from './state/query-playground-context';
import { buildAutocompleteSuggestions } from './query-playground.utils';

function QueryPlaygroundContent() {
  const { datasets, isLoading: isLoadingDatasets, error: datasetsError } = useDatasets();
  const {
    query,
    setQuery,
    selectedDatasetName,
    setSelectedDatasetName,
    history,
    saved,
    addHistory,
    saveQuery,
    deleteHistory,
    deleteSaved,
  } = useQueryPlayground();

  const effectiveDatasetName = useMemo(() => {
    if (datasets.length === 0) {
      return selectedDatasetName;
    }
    if (selectedDatasetName && datasets.some((d) => d.name === selectedDatasetName)) {
      return selectedDatasetName;
    }
    return datasets[0].name;
  }, [datasets, selectedDatasetName]);

  const selectedDataset = useMemo(
    () => datasets.find((dataset) => dataset.name === effectiveDatasetName),
    [datasets, effectiveDatasetName],
  );
  const { results, error, isLoading, runQuery } = useQueryRunner();

  const handleRun = (payload: { query: string; dataset: string }) => {
    const trimmed = payload.query.trim();
    if (!trimmed) {
      return;
    }

    addHistory({ query: trimmed, dataset: payload.dataset });
    runQuery(payload);
  };

  const handleSave = () => {
    const trimmed = query.trim();
    if (!trimmed || !effectiveDatasetName) {
      return;
    }

    saveQuery({ query: trimmed, dataset: effectiveDatasetName });
  };

  const handleRunHistory = (item: QueryHistoryItem) => {
    setQuery(item.query);
    setSelectedDatasetName(item.dataset);
    handleRun({ query: item.query, dataset: item.dataset });
  };

  const handleRunSaved = (item: SavedQuery) => {
    setQuery(item.query);
    setSelectedDatasetName(item.dataset);
    handleRun({ query: item.query, dataset: item.dataset });
  };

  const autocompleteSuggestions = buildAutocompleteSuggestions(datasets, selectedDataset);

  return (
    <div className={styled.wrapper}>
      <HeaderBar />

      <div className={styled.grid}>
        <Sidebar
          label="Esquemas de base de datos"
          datasets={datasets}
          selectedDatasetName={effectiveDatasetName}
          onChangeDataset={setSelectedDatasetName}
          isLoading={isLoadingDatasets}
          error={datasetsError}
          history={history}
          saved={saved}
          onRunHistory={handleRunHistory}
          onRunSaved={handleRunSaved}
          onDeleteHistory={deleteHistory}
          onDeleteSaved={deleteSaved}
        />

        <div className={styled.right}>
          <EditorPanel
            title="Introduce tu consulta SQL aquí:"
            query={query}
            onChangeQuery={setQuery}
            suggestions={autocompleteSuggestions}
          />
          <RunBar
            onRun={() => {
              if (!effectiveDatasetName) {
                return;
              }
              handleRun({ query, dataset: effectiveDatasetName });
            }}
            isLoading={isLoading || isLoadingDatasets}
            onSave={handleSave}
          />

          <ResultsPanel results={results} error={error} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export { QueryPlaygroundContent };
