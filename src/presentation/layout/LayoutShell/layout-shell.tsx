import type { ReactNode } from 'react';
import { Card, CardSection } from '@/presentation/ui';

function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="app-gradient absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(46,255,128,0.10),transparent_55%)]" />
        <div className="app-gradient absolute inset-0 bg-[radial-gradient(900px_circle_at_70%_30%,rgba(120,90,255,0.10),transparent_55%)]" />
        <div className="app-gradient absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_90%,rgba(0,0,0,0.35),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-8 py-10">
        <Card className="bg-transparent shadow-none">
          <CardSection className="p-0">{children}</CardSection>
        </Card>
      </div>
    </main>
  );
}

export { LayoutShell };
