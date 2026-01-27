import './globals.css';

export const metadata = {
  title: 'Arkham Query Playground',
  description: 'SQL Query Playground',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#0b1020] text-white antialiased">{children}</body>
    </html>
  );
}
