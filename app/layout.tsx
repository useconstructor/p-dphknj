import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'La Cucina di Marco | Authentic Tuscan Dining',
  description: 'An intimate Italian restaurant inspired by the rustic elegance, flavors, and hospitality of Tuscany.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
