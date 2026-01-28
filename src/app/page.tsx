import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/lib/data';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container" style={{ padding: '4rem 1rem' }}>
        <div className={styles.sectionHeader}>
          <h2>Nuestros Favoritos</h2>
          <p>Diseños exclusivos para transformar tu espacio.</p>
        </div>

        <ProductGrid products={products.slice(0, 4)} showFilters={false} />
      </div>
    </main>
  );
}
