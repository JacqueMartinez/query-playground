const WORD_CHARS = /[A-Za-z0-9_]/;

const CONTEXT_TABLE = new Set(['from', 'join', 'update', 'into', 'delete']);

const CONTEXT_COLUMN = new Set([
  'select',
  'where',
  'on',
  'and',
  'or',
  'order',
  'group',
  'having',
  'by',
]);

export { WORD_CHARS, CONTEXT_TABLE, CONTEXT_COLUMN };
