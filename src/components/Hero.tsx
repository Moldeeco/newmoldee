import Link from 'next/link';
import styles from './Hero.module.css';
import { FadeIn } from './Motion';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <FadeIn delay={0.2} direction="up">
                    <h1 className={styles.title}>Moldeamos tus ideas</h1>
                </FadeIn>
                <FadeIn delay={0.4} direction="up">
                    <div className={styles.subtitleWrapper}>
                        <p className={styles.subtitle}>
                            Objetos hechos a tu medida.
                        </p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.6} direction="up">
                    <div className={styles.buttons}>
                        <Link href="/catalogo" className={`btn btn-primary ${styles.ctaBtn}`}>
                            Ver Colección
                        </Link>
                        <Link href="/nosotros" className={`btn btn-outline ${styles.secondaryBtn}`}>
                            Nuestra Historia
                        </Link>
                    </div>
                </FadeIn>
            </div>
            <div className={styles.overlay}></div>
        </section>
    );
}
