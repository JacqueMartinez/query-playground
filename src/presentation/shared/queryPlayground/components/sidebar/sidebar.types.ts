export type SidebarProps = {
  schemesLabel: string;
  schemeValue: string;
  onChangeScheme: (value: string) => void;
  tables: string[];
  selectedTable: string;
  onSelectTable: (table: string) => void;
};
