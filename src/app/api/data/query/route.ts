import { NextResponse } from 'next/server';
import { DATASETS, RESULTS_BY_DATASET } from '@/mocks/datasets';
import { randomInt, sleep, shouldFail } from '@/mocks/mockUtils';

type QueryBody = {
  query: string;
  dataset: string;
};

type ParsedQuery = {
  dataset: string;
  columns: string[] | '*';
  where?: {
    column: string;
    value: string | number;
  };
};

function parseBasicQuery(input: string): ParsedQuery | null {
  const cleaned = input.trim().replace(/;$/, '');
  const match = cleaned.match(
    /^select\s+(.+?)\s+from\s+([a-zA-Z_][a-zA-Z0-9_]*)(?:\s+where\s+(.+))?$/i,
  );

  if (!match) {
    return null;
  }

  const [, rawColumns, rawDataset, rawWhere] = match;
  const dataset = rawDataset.trim();

  const columns =
    rawColumns.trim() === '*'
      ? '*'
      : rawColumns
          .split(',')
          .map((col) => col.trim())
          .filter(Boolean)
          .map((col) => col.split('.').pop() ?? col);

  let where: ParsedQuery['where'];

  if (rawWhere) {
    // Soporta únicamente comparación simple: columna = valor (string o número).
    const whereMatch = rawWhere.match(
      /^\s*([a-zA-Z_][a-zA-Z0-9_.]*)\s*=\s*(?:'([^']*)'|"([^"]*)"|([0-9]+(?:\.[0-9]+)?))\s*$/i,
    );

    if (!whereMatch) {
      return null;
    }

    const column = (whereMatch[1]?.split('.').pop() ?? '').trim();
    const stringValue = whereMatch[2] ?? whereMatch[3];
    const numberValue = whereMatch[4];

    where = {
      column,
      value: numberValue !== undefined ? Number(numberValue) : (stringValue ?? ''),
    };
  }

  return { dataset, columns, where };
}

function applyQuery({
  parsed,
  rows,
  schema,
}: {
  parsed: ParsedQuery;
  rows: Array<Record<string, unknown>>;
  schema: Record<string, string>;
}) {
  // Valida columnas y filtra resultados sin motor real de SQL.
  const columns = parsed.columns === '*' ? Object.keys(schema) : parsed.columns;

  if (columns.length === 0) {
    return {
      error: 'No se seleccionaron columnas',
      results: [] as Array<Record<string, unknown>>,
    };
  }

  for (const column of columns) {
    if (!schema[column]) {
      return {
        error: `Columna desconocida: ${column}`,
        results: [] as Array<Record<string, unknown>>,
      };
    }
  }

  let filtered = rows;

  if (parsed.where) {
    const { column, value } = parsed.where;
    if (!schema[column]) {
      return {
        error: `Columna desconocida en WHERE: ${column}`,
        results: [] as Array<Record<string, unknown>>,
      };
    }

    // Comparación estricta por igualdad; se fuerza a número cuando corresponde.
    filtered = rows.filter((row) => {
      const rowValue = row[column];
      if (typeof value === 'number') {
        return Number(rowValue) === value;
      }
      return String(rowValue ?? '') === value;
    });
  }

  const results =
    parsed.columns === '*'
      ? filtered
      : filtered.map((row) =>
          columns.reduce<Record<string, unknown>>((acc, column) => {
            acc[column] = row[column];
            return acc;
          }, {}),
        );

  return { error: null, results };
}

export async function POST(req: Request) {
  await sleep(randomInt(500, 1200));

  let body: QueryBody | null = null;

  try {
    body = (await req.json()) as QueryBody;
  } catch {
    return NextResponse.json({ results: [], error: 'JSON inválido en el body' }, { status: 400 });
  }

  const query = body?.query?.trim();
  const dataset = body?.dataset?.trim();

  if (!query) {
    return NextResponse.json({ results: [], error: 'La consulta es requerida' }, { status: 400 });
  }

  if (!dataset) {
    return NextResponse.json({ results: [], error: 'El dataset es requerido' }, { status: 400 });
  }

  const datasetMeta = DATASETS.find((d) => d.name === dataset);

  if (!datasetMeta) {
    return NextResponse.json(
      { results: [], error: `Dataset desconocido: ${dataset}` },
      { status: 400 },
    );
  }

  // Simular error 500
  if (shouldFail(query, 0.1)) {
    return NextResponse.json(
      { results: [], error: 'Error de servidor mock: motor de consultas no disponible' },
      { status: 500 },
    );
  }

  // Interpretar SQL básico (SELECT ... FROM ... WHERE col = value)
  const parsed = parseBasicQuery(query);

  if (!parsed) {
    return NextResponse.json(
      {
        results: [],
        error: 'SQL no soportado. Usa: SELECT ... FROM <dataset> [WHERE columna = valor]',
      },
      { status: 400 },
    );
  }

  if (parsed.dataset !== dataset) {
    return NextResponse.json(
      { results: [], error: `Dataset no coincide. Body: ${dataset}, SQL: ${parsed.dataset}` },
      { status: 400 },
    );
  }

  const rows = RESULTS_BY_DATASET[dataset] ?? [];
  const { results, error } = applyQuery({ parsed, rows, schema: datasetMeta.schema });

  if (error) {
    return NextResponse.json({ results: [], error }, { status: 400 });
  }

  return NextResponse.json({ results, error: null });
}
