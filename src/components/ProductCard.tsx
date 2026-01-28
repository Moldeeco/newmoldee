import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(product.price);

    return (
        <div className={styles.card}>
            <Link href={`/product/${product.id}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {product.isNew && <span className={styles.badge}>Nuevo</span>}
                    {product.isBestSeller && <span className={styles.badge}>Más Vendido</span>}
                </div>
            </Link>
            <div className={styles.info}>
                <Link href={`/product/${product.id}`}>
                    <h3 className={styles.title}>{product.name}</h3>
                </Link>
                <p className={styles.price}>{formattedPrice}</p>
                <div className={styles.swatches}>
                    {product.colors.slice(0, 3).map((color) => (
                        <span
                            key={color}
                            className={styles.swatch}
                            style={{ backgroundColor: getColorCode(color) }}
                            title={color}
                        />
                    ))}
                    {product.colors.length > 3 && <span className={styles.moreColors}>+</span>}
                </div>
            </div>
        </div>
    );
}

function getColorCode(color: string): string {
    const map: Record<string, string> = {
        'Blanco': '#ffffff',
        'Negro': '#212a2f',
        'Gris': '#808080',
        'Rojo': '#d32f2f',
        'Azul': '#1976d2',
        'Verde': '#388e3c',
    };
    return map[color] || '#ccc';
}
