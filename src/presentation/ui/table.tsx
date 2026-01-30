import { cn } from '@/lib/cn';

function TableRoot({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('overflow-auto rounded-xl border border-white/10', className)} {...props} />
  );
}

function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return <table className={cn('min-w-full text-sm', className)} {...props} />;
}

function Th({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        'px-4 py-3 text-left font-semibold text-white/85 border-b border-white/10',
        className,
      )}
      {...props}
    />
  );
}

function Td({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={cn('px-4 py-3 text-white/70 border-b border-white/5', className)} {...props} />
  );
}

export { Table, TableRoot, Th, Td };
