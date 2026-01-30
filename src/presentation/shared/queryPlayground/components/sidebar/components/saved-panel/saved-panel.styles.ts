export const queriesPanelStyles = {
  panel:
    'flex min-h-0 flex-1 flex-col rounded-2xl border border-[var(--border-1)] bg-[var(--surface-1)] shadow-[inset_0_0_0_1px_var(--border-2)]',
  header: 'flex items-center justify-between border-b border-[var(--border-1)] px-5 py-4',
  title: 'text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-[0.08em]',
  body: 'min-h-0 flex-1 overflow-auto px-5 py-4 space-y-3',
  item: 'rounded-xl border border-[var(--border-1)] bg-[var(--surface-2)] px-4 py-3',
  itemHeader: 'flex items-center justify-between gap-3',
  actions: 'flex items-center gap-2',
  query: 'text-xs text-[var(--text-primary)] font-mono break-all',
  meta: 'text-[11px] text-[var(--text-muted)]',
  empty: 'text-sm text-[var(--text-muted)]',
  iconButton:
    'inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-1)] bg-[var(--surface-2)] text-[var(--text-secondary)] transition hover:border-[var(--border-1)] hover:text-[var(--text-primary)]',
} as const;
