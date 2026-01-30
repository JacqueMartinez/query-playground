const QUERY_STORAGE_KEYS = {
  query: 'arkham.queryPlayground.query',
  dataset: 'arkham.queryPlayground.dataset',
  history: 'arkham.queryPlayground.history',
  saved: 'arkham.queryPlayground.savedQueries',
} as const;

const QUERY_HISTORY_LIMIT = 5;

export { QUERY_HISTORY_LIMIT, QUERY_STORAGE_KEYS };
