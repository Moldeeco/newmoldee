import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <div className={`container ${styles.container}`}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Creamos lo que imaginas.</h1>
                <p className={styles.subtitle}>
                    Moldee.co es un estudio de diseño e impresión 3D nacido en Colombia.
                    Fusionamos tecnología y artesanía digital.
                </p>
            </section>

            <section className={styles.content}>
                <div className={styles.textBlock}>
                    <h2>Nuestra Historia</h2>
                    <p>
                        Todo comenzó con una impresora 3D en un pequeño estudio de Bogotá.
                        Nos dimos cuenta de que la personalización era el futuro del diseño de interiores y accesorios.
                        Queríamos ofrecer productos únicos, sostenibles y accesibles, sin sacrificar la calidad.
                    </p>
                    <p>
                        Hoy, Moldee.co colabora con diseñadores locales para traer objetos exclusivos a tu hogar.
                        Utilizamos materiales biodegradables como el PLA (ácido poliláctico), derivado del maíz,
                        para asegurar que nuestra huella en el planeta sea positiva.
                    </p>
                </div>
                <div className={styles.imageBlock}>
                    <div className={styles.placeholderImage}>
                        {/* Placeholder for About Us Image */}
                        <span>Taller Moldee</span>
                    </div>
                </div>
            </section>

            <section className={styles.values}>
                <div className={styles.valueCard}>
                    <h3>Sostenibilidad</h3>
                    <p>Materiales eco-amigables y producción bajo demanda para reducir desperdicios.</p>
                </div>
                <div className={styles.valueCard}>
                    <h3>Diseño Local</h3>
                    <p>Apoyamos el talento colombiano y la creatividad sin límites.</p>
                </div>
                <div className={styles.valueCard}>
                    <h3>Calidad</h3>
                    <p>Cada capa cuenta. Revisamos meticulosamente cada pieza antes de enviarla.</p>
                </div>
            </section>
        </div>
    );
}
