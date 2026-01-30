export const sidebarStyles = {
  aside: 'space-y-8 pt-2',
  label: 'text-lg text-white/80',
  nav: 'space-y-2 pt-4',
  tableItem: {
    base: 'w-full rounded-lg px-4 py-3 text-left text-sm transition',
    active: 'bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]',
    idle: 'text-white/70 hover:bg-white/5 hover:text-white',
  },
} as const;
