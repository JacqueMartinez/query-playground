import { CONTEXT_COLUMN, CONTEXT_TABLE, WORD_CHARS } from './code-editor.constants';
import type { SuggestionGroups, TokenInfo } from './code-editor.types';

type KeyAction = 'next' | 'prev' | 'apply' | 'close' | 'none';

function getTokenAtCursor(value: string, cursor: number): TokenInfo {
  let start = cursor;
  let end = cursor;

  while (start > 0 && WORD_CHARS.test(value[start - 1] ?? '')) {
    start -= 1;
  }

  while (end < value.length && WORD_CHARS.test(value[end] ?? '')) {
    end += 1;
  }

  const token = value.slice(start, end);
  return { token, start, end };
}

function getLastKeyword(value: string, cursor: number) {
  const slice = value.slice(0, cursor);
  const tokens = slice
    .replace(/\s+/g, ' ')
    .split(/[\s,();]+/g)
    .filter(Boolean);
  return (tokens[tokens.length - 1] ?? '').toLowerCase();
}

// Traduce teclas a acciones del autocompletado para mantener la lógica centralizada.
function getKeyAction(key: string, showSuggestions: boolean): KeyAction {
  if (!showSuggestions) {
    return 'none';
  }

  switch (key) {
    case 'ArrowDown':
      return 'next';
    case 'ArrowUp':
      return 'prev';
    case 'Tab':
    case 'Enter':
      return 'apply';
    case 'Escape':
      return 'close';
    default:
      return 'none';
  }
}

// Calcula el siguiente índice de selección con wrap-around.
function getNextActiveIndex(currentIndex: number, total: number, action: KeyAction) {
  if (total === 0) {
    return 0;
  }

  if (action === 'next') {
    return (currentIndex + 1) % total;
  }

  if (action === 'prev') {
    return currentIndex === 0 ? total - 1 : currentIndex - 1;
  }

  return currentIndex;
}

function shouldOpenSuggestions(normalizedToken: string, count: number) {
  return normalizedToken.length > 0 && count > 0;
}

function getSuggestionPool({
  tokenInfo,
  value,
  cursor,
  suggestions,
}: {
  tokenInfo: TokenInfo;
  value: string;
  cursor: number;
  suggestions: SuggestionGroups;
}) {
  // Forma simple de contexto SQL: tabla tras FROM/JOIN, columnas en SELECT/WHERE,
  // y columnas calificadas si el token contiene "tabla.".

  const lastKeyword = getLastKeyword(value, cursor);
  const tokenHasDot = tokenInfo.token.includes('.');
  const [tablePrefix] = tokenInfo.token.split('.', 1);

  if (tokenHasDot) {
    const tableName = tablePrefix.toLowerCase();
    return suggestions.qualifiedColumns.filter((item) =>
      item.toLowerCase().startsWith(`${tableName}.`),
    );
  }

  if (CONTEXT_TABLE.has(lastKeyword)) {
    return suggestions.tables;
  }

  if (CONTEXT_COLUMN.has(lastKeyword)) {
    return [...suggestions.columns, ...suggestions.qualifiedColumns, ...suggestions.functions];
  }

  return [
    ...suggestions.keywords,
    ...suggestions.tables,
    ...suggestions.columns,
    ...suggestions.qualifiedColumns,
    ...suggestions.functions,
  ];
}

// Filtra por prefijo y elimina duplicados sin reordenar.
function filterSuggestions(pool: string[], normalizedToken: string, limit = 12) {
  const seen = new Set<string>();
  return pool
    .filter((item) => item.toLowerCase().startsWith(normalizedToken))
    .filter((item) => {
      if (seen.has(item)) {
        return false;
      }
      seen.add(item);
      return true;
    })
    .slice(0, limit);
}

export {
  filterSuggestions,
  getKeyAction,
  getLastKeyword,
  getNextActiveIndex,
  getSuggestionPool,
  getTokenAtCursor,
  shouldOpenSuggestions,
};
