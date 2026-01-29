'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Product, ProductColor, ProductMaterial } from '@/types/product';
import { useCart } from '@/context/CartContext';
import styles from './ProductDetails.module.css';

export default function ProductDetails({ product }: { product: Product }) {
    const { addItem } = useCart();
    const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
    const [selectedMaterial, setSelectedMaterial] = useState<ProductMaterial>(
        product.materials.length > 0 ? product.materials[0] : 'PLA'
    );
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(product.price);

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.gallery}>
                <div className={styles.mainImageWrapper}>
                    <Image
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        fill
                        className={styles.image}
                        priority
                    />
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                    <div className={styles.thumbnails}>
                        {product.images.map((img, index) => (
                            <button
                                key={index}
                                className={`${styles.thumbnailBtn} ${currentImageIndex === index ? styles.activeThumbnail : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            >
                                <Image
                                    src={img}
                                    alt={`${product.name} view ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className={styles.thumbnailImg}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className={styles.info}>
                <h1 className={styles.title}>{product.name}</h1>
                <p className={styles.price}>{formattedPrice}</p>

                <p className={styles.description}>{product.description}</p>

                <div className={styles.selector}>
                    <h3 className={styles.label}>Material</h3>
                    <div className={styles.options}>
                        {product.materials.map((mat) => (
                            <button
                                key={mat}
                                className={`${styles.optionBtn} ${selectedMaterial === mat ? styles.selected : ''}`}
                                onClick={() => setSelectedMaterial(mat)}
                            >
                                {mat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.selector}>
                    <h3 className={styles.label}>Color: {selectedColor}</h3>
                    <div className={styles.colors}>
                        {product.colors.map((color) => (
                            <button
                                key={color}
                                className={`${styles.colorBtn} ${selectedColor === color ? styles.selectedColor : ''}`}
                                style={{ backgroundColor: getColorCode(color) }}
                                onClick={() => {
                                    setSelectedColor(color);
                                    if (product.colorImages && product.colorImages[color]) {
                                        const imgUrl = product.colorImages[color];
                                        const index = product.images.indexOf(imgUrl);
                                        if (index !== -1) {
                                            setCurrentImageIndex(index);
                                        }
                                    }
                                }}
                                aria-label={`Seleccionar color ${color}`}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className={`btn btn-primary ${styles.addToCart}`}
                    onClick={() => addItem(product, {
                        color: selectedColor,
                        material: selectedMaterial,
                        quantity: 1
                    })}
                >
                    Agregar al Carrito - {formattedPrice}
                </button>

                <div className={styles.shippingInfo}>
                    <p>🚚 Envíos a todo Colombia</p>
                    <p>⏱️ Tiempo de producción: 2-3 días hábiles</p>
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
