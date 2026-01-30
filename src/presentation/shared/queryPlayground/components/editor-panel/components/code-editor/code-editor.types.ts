type SuggestionGroups = {
  tables: string[];
  columns: string[];
  qualifiedColumns: string[];
  keywords: string[];
  functions: string[];
};

type CodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
  suggestions: SuggestionGroups;
  placeholder?: string;
  rows?: number;
};

type TokenInfo = {
  token: string;
  start: number;
  end: number;
};

export type { TokenInfo, CodeEditorProps, SuggestionGroups };
