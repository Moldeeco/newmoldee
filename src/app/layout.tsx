import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://moldee.co'),
  title: 'Moldee.co | Impresión 3D Premium en Colombia',
  description: 'Objetos de diseño únicos impresos en 3D. Accesorios para escritorio, hogar y coleccionables. Envíos a todo el país.',
  openGraph: {
    title: 'Moldee.co | Impresión 3D Premium',
    description: 'Objetos de diseño impresos en 3D bajo demanda en Colombia.',
    url: 'https://moldee.co',
    siteName: 'Moldee.co',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moldee.co | Impresión 3D Premium',
    description: 'Objetos de diseño impresos en 3D bajo demanda en Colombia.',
  },
};

import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <CartDrawer />
          <WhatsAppButton />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  );
}
