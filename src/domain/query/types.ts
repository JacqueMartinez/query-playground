type QueryRequest = {
  query: string;
  dataset: string;
};

type QueryResultRow = Record<string, unknown>;

type QueryResponse = {
  results: QueryResultRow[];
  error: string | null;
};

type QueryHistoryItem = {
  id: string;
  query: string;
  dataset: string;
  ranAt: string;
};

type SavedQuery = {
  id: string;
  query: string;
  dataset: string;
  savedAt: string;
};

export type { QueryRequest, QueryResponse, QueryResultRow, QueryHistoryItem, SavedQuery };
