'use client';

import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';
import { Product } from '@/types/product';

interface CatalogContentProps {
    products: Product[];
}

export default function CatalogContent({ products }: CatalogContentProps) {
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
