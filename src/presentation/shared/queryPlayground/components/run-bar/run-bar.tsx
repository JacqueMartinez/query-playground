import { Button } from '@/presentation/ui';
import { runBarStyles as styled } from './run-bar.styles';

type RunBarProps = {
  onRun: () => void;
  label?: string;
  isLoading?: boolean;
  onSave?: () => void;
};

function RunBar({ onRun, label = 'Ejecutar', isLoading = false, onSave }: RunBarProps) {
  return (
    <div className={styled.wrapper}>
      {onSave ? (
        <Button variant="outline" onClick={onSave} className="w-[180px]" disabled={isLoading}>
          Guardar consulta
        </Button>
      ) : null}
      <Button variant="outline" onClick={onRun} className="w-[220px]" disabled={isLoading}>
        <span>✦</span> {isLoading ? 'Ejecutando...' : label}
      </Button>
    </div>
  );
}

export { RunBar };
