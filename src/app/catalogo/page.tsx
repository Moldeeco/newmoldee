import ProductGrid from '@/components/ProductGrid';
import { products } from '@/lib/data';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Catálogo | Moldee.co',
    description: 'Explora nuestra colección completa de impresiones 3D personalizables.',
};

function CatalogContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    return (
        <div className="container" style={{ padding: 'var(--spacing-16) var(--spacing-4)' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-8)' }}>
                <h1>Catálogo Completo</h1>
                {query && (
                    <p style={{ marginTop: 'var(--spacing-2)' }}>
                        Resultados para: <strong>{query}</strong>
                    </p>
                )}
                <p style={{ color: '#666', marginTop: 'var(--spacing-2)' }}>
                    Encuentra el diseño perfecto para ti.
                </p>
            </div>

            <ProductGrid products={products} showFilters={true} searchQuery={query} />
        </div>
    );
}

export default function CatalogPage() {
    return (
        <main>
            <Suspense fallback={<div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Cargando...</div>}>
                <CatalogContent />
            </Suspense>
        </main>
    );
}
