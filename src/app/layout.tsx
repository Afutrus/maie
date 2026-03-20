import './globals.css';
import { Providers } from './providers';
import { Inter, Libre_Baskerville } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const baskerville = Libre_Baskerville({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-baskerville' 
});

export const metadata = {
  title: 'Enshrined | Fair Mint on Tempo',
  description: 'Minting portal for ENSH tokens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${baskerville.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
