import Link from 'next/link';
import PrintingText from './PrintingText';
import styles from './Hero.module.css';
import { FadeIn } from './Motion';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <FadeIn delay={0.2} direction="up">
                    <PrintingText text="Moldeamos tus ideas" className={styles.title} />
                </FadeIn>
                <FadeIn delay={0.4} direction="up">
                    <p className={styles.subtitle}>
                        Objetos impresos en 3D con materiales sostenibles. <br />
                        Hechos en Colombia, pensados para ti.
                    </p>
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
