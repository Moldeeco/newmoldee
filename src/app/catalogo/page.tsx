import PageHeader from '@/components/PageHeader';
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
            <PageHeader
                title="Catálogo"
                subtitle="Objetos diseñados para transformar tu espacio."
                microline="Impresos en 3D · Materiales sostenibles · Hechos en Colombia"
            />
            <div className="container">
                <ProductGrid products={products} showFilters={true} />
            </div>
        </main>
    );
}
