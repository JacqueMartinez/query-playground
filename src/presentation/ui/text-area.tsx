import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={cn(
        'w-full resize-none rounded-xl border border-white/10 bg-[#0a0d2a] p-6 text-sm leading-6 text-white/85 outline-none',
        'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]',
        'focus:border-white/20 focus-visible:ring-2 focus-visible:ring-white/15',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
