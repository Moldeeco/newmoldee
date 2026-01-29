import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Product } from '@/types/product';
import styles from './ProductCard.module.css';
import { StaggerItem } from './Motion';
import { motion } from 'framer-motion';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [currentImage, setCurrentImage] = useState(product.images[0]);

    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(product.price);

    return (
        <StaggerItem className={styles.card}>
            <Link href={`/product/${product.id}`} className={styles.imageLink}>
                <motion.div
                    className={styles.imageWrapper}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={currentImage}
                        alt={product.name}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {product.isNew && <span className={styles.badge}>Nuevo</span>}
                    {product.isBestSeller && <span className={styles.badge}>Más Vendido</span>}
                </motion.div>
            </Link>
            <div className={styles.info}>
                <Link href={`/product/${product.id}`}>
                    <h3 className={styles.title}>{product.name}</h3>
                </Link>
                <p className={styles.price}>{formattedPrice}</p>
                <div className={styles.swatches}>
                    {product.colors.slice(0, 3).map((color) => (
                        <button
                            key={color}
                            className={styles.swatch}
                            style={{ backgroundColor: getColorCode(color) }}
                            title={color}
                            onClick={(e) => {
                                e.preventDefault(); // Prevent navigation
                                e.stopPropagation();
                                if (product.colorImages && product.colorImages[color]) {
                                    setCurrentImage(product.colorImages[color]);
                                }
                            }}
                        />
                    ))}
                    {product.colors.length > 3 && <span className={styles.moreColors}>+</span>}
                </div>
            </div>
        </StaggerItem>
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
