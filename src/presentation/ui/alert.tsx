import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: 'info' | 'error';
};

function Alert({ className, variant = 'info', ...props }: Props) {
  return (
    <div
      className={cn(
        'rounded-xl border px-4 py-3 text-sm',
        variant === 'info' && 'border-white/10 bg-white/5 text-white/80',
        variant === 'error' && 'border-red-500/30 bg-red-500/10 text-red-100',
        className,
      )}
      {...props}
    />
  );
}

export { Alert };
