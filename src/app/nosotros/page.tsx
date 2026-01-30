import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <main>
            <PageHeader
                title="Nuestra Historia"
                subtitle="Fusionamos tecnología y artesanía digital."
                microline="Diseño Colombiano · Sostenible · Innovador"
            />

            <div className={`container ${styles.container}`}>
                <section className={styles.content}>
                    <div className={styles.textBlock}>
                        <h2>Creamos lo que imaginas</h2>

                        <p className={styles.paragraph}>
                            Diseñamos y fabricamos piezas personalizadas para tu hogar desde Bogotá, combinando tecnología 3D y diseño local.
                        </p>

                        <p className={styles.paragraph}>
                            Colaboramos con creadores colombianos y producimos bajo demanda con PLA (derivado del maíz), un material biodegradable. El resultado: objetos únicos, sostenibles y con un acabado limpio y preciso.
                        </p>

                        <Link href="/catalogo" className={`btn btn-primary ${styles.ctaBtn}`}>
                            Explorar Catálogo
                        </Link>
                    </div>
                    <div className={styles.imageBlock}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/taller-moldee-v2.png"
                                alt="Taller Moldee - Impresión 3D y Diseño"
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.values}>
                    <div className={styles.valueCard}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M8 11h8" />
                                <path d="M12 15V7" />
                            </svg>
                        </div>
                        <h3>Sostenibilidad</h3>
                        <p>Materiales biodegradables y producción bajo demanda para un futuro sostenible.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <h3>Diseño Local</h3>
                        <p>Talento 100% colombiano que fusiona la tecnología moderna con la artesanía digital.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <h3>Calidad</h3>
                        <p>Garantía de excelencia mediante una revisión meticulosa de cada capa y cada pieza.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
