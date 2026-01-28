import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Diseño que Moldea el Futuro</h1>
                <p className={styles.subtitle}>
                    Objetos impresos en 3D con materiales sostenibles. <br />
                    Hechos en Colombia, pensados para ti.
                </p>
                <div className={styles.buttons}>
                    <Link href="/catalogo" className={`btn btn-primary ${styles.ctaBtn}`}>
                        Ver Colección
                    </Link>
                    <Link href="/nosotros" className={`btn btn-outline ${styles.secondaryBtn}`}>
                        Nuestra Historia
                    </Link>
                </div>
            </div>
            <div className={styles.overlay}></div>
        </section>
    );
}
