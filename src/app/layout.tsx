import '@/styles/globals.css';

export const metadata = {
  title: 'Arkham Query Playground',
  description: 'SQL Query Playground',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="theme-dark min-h-screen bg-[var(--app-bg)] text-[var(--text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
