import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RT Destination - Where Your Success Finds Fulfilment',
  description:
    'RT Destination, your gateway to unprecedented success in the world of Amazon and Walmart automation!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-0">{children}</main>
      </body>
    </html>
  );
}
