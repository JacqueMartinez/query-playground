import type { SuggestionGroups } from '../code-editor/code-editor.types';

export type EditorPanelProps = {
  title: string;
  query: string;
  onChangeQuery: (value: string) => void;
  suggestions: SuggestionGroups;
};
