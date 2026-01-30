import { CodeEditor } from './components/code-editor';
import { editorPanelStyles as styled } from './editor-panel.styles';
import type { EditorPanelProps } from './editor-panel.types';

function EditorPanel({ title, query, onChangeQuery, suggestions }: EditorPanelProps) {
  return (
    <div>
      <p className={styled.title}>{title}</p>
      <CodeEditor value={query} onChange={onChangeQuery} suggestions={suggestions} rows={6} />
    </div>
  );
}

export { EditorPanel };
