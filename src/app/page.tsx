import { LayoutShell } from '@/presentation/layout/LayoutShell';
import { QueryPlayground } from '@/presentation/shared/queryPlayground';

export default function Page() {
  return (
    <LayoutShell>
      <QueryPlayground />
    </LayoutShell>
  );
}
