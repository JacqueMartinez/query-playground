import { Button } from '@/presentation/ui';
import { runBarStyles as styled } from './run-bar.styles';

type RunBarProps = {
  onRun: () => void;
  label?: string;
};

function RunBar({ onRun, label = 'Run' }: RunBarProps) {
  return (
    <div className={styled.wrapper}>
      <Button variant="outline" onClick={onRun} className="w-[220px]">
        <span className="text-white/90">✦</span> {label}
      </Button>
    </div>
  );
}

export { RunBar };
