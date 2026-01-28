'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import styles from './ProductGrid.module.css';
import { StaggerContainer } from './Motion';

interface ProductGridProps {
    products: Product[];
    showFilters?: boolean;
}

export default function ProductGrid({ products, showFilters = true }: ProductGridProps) {
    // Extract unique categories
    const categories = ['Todos', ...Array.from(new Set(products.map((p) => p.category)))];
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const filteredProducts = selectedCategory === 'Todos'
        ? products
        : products.filter((p) => p.category === selectedCategory);

    // If filters are hidden, just show exact passed products (or maybe we still want logic? User said move buttons).
    // If showFilters is false, we ignore component-level category state and just show what was passed.
    const displayProducts = showFilters ? filteredProducts : products;

    return (
        <div className={styles.wrapper}>
            {showFilters && (
                <div className={styles.filters}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            <StaggerContainer className={styles.grid}>
                {displayProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </StaggerContainer>

            {displayProducts.length === 0 && (
                <p className={styles.empty}>No hay productos.</p>
            )}
        </div>
    );
}
