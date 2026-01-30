import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
};

function Button({
  className,
  variant = 'outline',
  size = 'md',
  loading = false,
  disabled,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition outline-none',
        'focus-visible:ring-2 focus-visible:ring-white/25',
        disabled || loading ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-95',
        variant === 'primary' && 'bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.10)]',
        variant === 'outline' &&
          'border border-[#9bffb7]/60 bg-transparent text-white shadow-[0_0_0_1px_rgba(155,255,183,0.18)] hover:border-[#9bffb7]/90 hover:shadow-[0_0_24px_rgba(155,255,183,0.12)]',

        variant === 'ghost' && 'bg-transparent text-white/80 hover:bg-white/5 hover:text-white',
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-12 px-5 text-sm',
        size === 'lg' && 'h-14 px-6 text-base',
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className="animate-pulse">…</span> : null}
      {children}
    </button>
  );
}

export { Button };
