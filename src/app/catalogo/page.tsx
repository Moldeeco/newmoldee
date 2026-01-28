import { products } from '@/lib/data';
import { Metadata } from 'next';
import { Suspense } from 'react';
import CatalogContent from '@/components/CatalogContent';

export const metadata: Metadata = {
    title: 'Catálogo | Moldee.co',
    description: 'Explora nuestra colección completa de impresiones 3D personalizables.',
};

export default function CatalogPage() {
    return (
        <main>
            <Suspense fallback={<div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Cargando...</div>}>
                <CatalogContent products={products} />
            </Suspense>
        </main>
    );
}
