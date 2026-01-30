import { Textarea } from '@/presentation/ui';
import { editorPanelStyles as s } from './editor-panel.styles';
import type { EditorPanelProps } from './editor-panel.types';

function EditorPanel({ title, query, onChangeQuery }: EditorPanelProps) {
  return (
    <div>
      <p className={s.title}>{title}</p>
      <Textarea value={query} onChange={(e) => onChangeQuery(e.target.value)} rows={6} />
    </div>
  );
}

export { EditorPanel };
