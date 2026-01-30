export const sidebarStyles = {
  aside:
    'h-full rounded-none border border-[var(--border-1)] bg-[var(--surface-3)] px-6 py-6 shadow-[inset_0_0_0_1px_var(--border-2)] flex flex-col gap-6',
  label: 'text-lg text-[var(--text-secondary)]',
  section: 'flex min-h-0 flex-1 flex-col gap-4',
  schemaBody: 'flex min-h-0 flex-1 flex-col gap-4',
  schemaScroll: 'min-h-0 flex-[2] overflow-auto',
} as const;
