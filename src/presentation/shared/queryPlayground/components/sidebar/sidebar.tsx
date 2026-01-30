import { cn } from '@/lib/cn';
import { Select } from '@/presentation/ui';
import { sidebarStyles as s } from './sidebar.styles';
import type { SidebarProps } from './sidebar.types';

function Sidebar({
  schemesLabel,
  schemeValue,
  onChangeScheme,
  tables,
  selectedTable,
  onSelectTable,
}: SidebarProps) {
  return (
    <aside className={s.aside}>
      <div className="space-y-2">
        <p className={s.label}>{schemesLabel}</p>

        <Select value={schemeValue} onChange={(e) => onChangeScheme(e.target.value)}>
          <option value="db_scheme_1">db_scheme_1</option>
        </Select>
      </div>

      <nav className={s.nav}>
        {tables.map((t) => (
          <button
            key={t}
            className={cn(
              s.tableItem.base,
              t === selectedTable ? s.tableItem.active : s.tableItem.idle,
            )}
            onClick={() => onSelectTable(t)}
          >
            {t}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export { Sidebar };
