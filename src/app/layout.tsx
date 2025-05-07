import React, { ReactNode } from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'Chord Finder',
  description: 'Find chord progressions for your songs',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"> 
      <body>
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl">Chord Finder</h1>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-blue-500 text-white p-4 mt-4">
          <p>&copy; 2025 Chord Finder. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}