import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Air Quality Monitoring Dashboard',
  description: 'Terminal-style air quality monitoring dashboard built with Next.js + TypeScript + SCSS.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
