'use client';

import { QueryPlaygroundProvider } from './state/query-playground-context';
import { QueryPlaygroundContent } from './query-playground.content';

function QueryPlayground() {
  return (
    <QueryPlaygroundProvider>
      <QueryPlaygroundContent />
    </QueryPlaygroundProvider>
  );
}

export { QueryPlayground };
