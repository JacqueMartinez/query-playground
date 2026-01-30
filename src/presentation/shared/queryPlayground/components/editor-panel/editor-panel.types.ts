import type { SuggestionGroups } from './components/code-editor/code-editor.types';

export type EditorPanelProps = {
  title: string;
  query: string;
  onChangeQuery: (value: string) => void;
  suggestions: SuggestionGroups;
};
