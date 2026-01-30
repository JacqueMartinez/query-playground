export const schemaViewerStyles = {
  wrapper:
    'mt-6 rounded-lg border border-[var(--border-1)] bg-[var(--surface-3)] p-4 shadow-[inset_0_0_0_1px_var(--border-2)]',
  datasetsRow: 'mt-3 flex flex-wrap gap-2',
  datasetBtn: {
    base: 'rounded-lg px-3 py-2 text-sm transition border',
    active: 'border-white/20 bg-white/10 text-white',
    idle: 'border-white/10 bg-transparent text-white/70 hover:bg-white/5 hover:text-white',
  },

  schemaBox:
    'mt-6 rounded-lg border border-[var(--border-1)] bg-[var(--surface-2)] p-4 shadow-[inset_0_0_0_1px_var(--border-2)]',
  schemaTitle: 'text-xs font-semibold tracking-wide text-[var(--text-secondary)]',
  schemaRow: 'mt-4 grid grid-cols-[1fr_auto] gap-1 text-sm',
  colName: 'text-[var(--text-primary)]',
  colType:
    'rounded-md border border-[var(--border-1)] bg-[var(--surface-2)] px-2 py-0.5 text-xs font-medium text-[var(--text-secondary)]',
} as const;
