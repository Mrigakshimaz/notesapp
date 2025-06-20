import './globals.css';
import { ThemeProvider } from 'next-themes';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="max-w-4xl mx-auto p-4 min-h-screen bg-background text-foreground">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}