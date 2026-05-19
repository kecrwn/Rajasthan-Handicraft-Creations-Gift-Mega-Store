import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Rajasthan Handicraft Creations | Gift Mega Store',
  description: 'Direct from the Manufacturer & Wholesaler to your home. Discover our exclusive collection of return gifts, toys, and premium decorations.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body className="font-sans antialiased bg-[#fdfbf7] text-[#3d2b1f]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
