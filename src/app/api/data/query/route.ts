import { NextResponse } from 'next/server';
import { DATASETS, RESULTS_BY_DATASET } from '@/mocks/datasets';
import { randomInt, sleep, shouldFail } from '@/mocks/mockUtils';

type QueryBody = {
  query: string;
  dataset: string;
};

export async function POST(req: Request) {
  await sleep(randomInt(500, 1200));

  let body: QueryBody | null = null;

  try {
    body = (await req.json()) as QueryBody;
  } catch {
    return NextResponse.json({ results: [], error: 'Invalid JSON body' }, { status: 400 });
  }

  const query = body?.query?.trim();
  const dataset = body?.dataset?.trim();

  if (!query) {
    return NextResponse.json({ results: [], error: 'Query is required' }, { status: 400 });
  }

  if (!dataset) {
    return NextResponse.json({ results: [], error: 'Dataset is required' }, { status: 400 });
  }

  const exists = DATASETS.some((d) => d.name === dataset);

  if (!exists) {
    return NextResponse.json(
      { results: [], error: `Unknown dataset: ${dataset}` },
      { status: 400 },
    );
  }

  // Simular error 500
  if (shouldFail(query, 0.1)) {
    return NextResponse.json(
      { results: [], error: 'Mock server error: query engine unavailable' },
      { status: 500 },
    );
  }

  // Simular resultados - mock default
  const results = RESULTS_BY_DATASET[dataset] ?? [];

  return NextResponse.json({
    results,
    error: null,
  });
}
