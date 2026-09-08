import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788850077185',
  description: 'La Cucina di Marco is an upscale Italian restaurant website that combines cinematic Tuscan storytelling with menu discovery, guest favorites, and a seamless Turso-powered reservation system. It presents Chef Marco’s three-generation culinary heritage while replacing phone bookings with real-time availability and automated confirmations.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F4EBDD', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
