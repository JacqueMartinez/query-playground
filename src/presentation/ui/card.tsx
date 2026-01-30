import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-[#070924] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]',
        className,
      )}
      {...props}
    />
  );
}

export { Card };
