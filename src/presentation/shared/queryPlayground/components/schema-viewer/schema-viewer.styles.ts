export const schemaViewerStyles = {
  wrapper:
    'mt-6 rounded-lg border border-white/10 bg-[#070924]/40 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]',
  datasetsRow: 'mt-3 flex flex-wrap gap-2',
  datasetBtn: {
    base: 'rounded-lg px-3 py-2 text-sm transition border',
    active: 'border-white/20 bg-white/10 text-white',
    idle: 'border-white/10 bg-transparent text-white/70 hover:bg-white/5 hover:text-white',
  },

  schemaBox:
    'mt-6 rounded-lg border border-white/10 bg-[#070924]/50 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]',
  schemaTitle: 'text-xs font-semibold tracking-wide text-white/60',
  schemaRow: 'mt-3 grid grid-cols-[1fr_auto] gap-4 text-sm',
  colName: 'text-white/85',
  colType:
    'rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-white/70',
} as const;
