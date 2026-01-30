import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

function CardSection({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />;
}

export { CardSection };
