import ProductGrid from '@/components/ProductGrid';
import { products } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Catálogo | Moldee.co',
    description: 'Explora nuestra colección completa de impresiones 3D personalizables.',
};

export default function CatalogPage() {
    return (
        <main>
            <div className="container" style={{ padding: 'var(--spacing-16) var(--spacing-4)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-8)' }}>
                    <h1>Catálogo Completo</h1>
                    <p style={{ color: '#666', marginTop: 'var(--spacing-2)' }}>
                        Encuentra el diseño perfecto para ti.
                    </p>
                </div>

                <ProductGrid products={products} showFilters={true} />
            </div>
        </main>
    );
}
