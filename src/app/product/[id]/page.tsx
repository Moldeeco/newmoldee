import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import ProductDetails from '@/components/ProductDetails';
import { Metadata } from 'next';

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: 'Producto no encontrado | Moldee.co',
        };
    }

    return {
        title: `${product.name} | Moldee.co`,
        description: product.description,
    };
}

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return <ProductDetails product={product} />;
}
