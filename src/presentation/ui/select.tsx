import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Props = SelectHTMLAttributes<HTMLSelectElement>;

function Select({ className, children, ...props }: Props) {
  return (
    <div className="relative">
      <select
        className={cn(
          'w-full appearance-none rounded-lg border border-white/80 bg-[#0a0d2a] px-4 py-3 text-sm text-white/100 outline-none',
          'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]',
          'focus:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
        ▾
      </span>
    </div>
  );
}

export { Select };
