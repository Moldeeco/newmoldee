import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.section}>
                    <h4 className={styles.title}>Moldee.co</h4>
                    <p className={styles.text}>Diseño e impresión 3D a medida en Colombia.</p>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.title}>Ayuda</h4>
                    <Link href="/politicas/envios-devoluciones" className={styles.link}>Envíos y Devoluciones</Link>
                    <Link href="/politicas/privacidad" className={styles.link}>Privacidad</Link>
                    <Link href="/politicas/terminos" className={styles.link}>Términos y Condiciones</Link>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.title}>Síguenos</h4>
                    <a href="https://instagram.com/moldee.co" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                    <a href="https://wa.me/573102302832" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp</a>
                </div>
                <div className={styles.copy}>
                    &copy; {new Date().getFullYear()} Moldee.co. Hecho en Colombia 🇨🇴
                </div>
            </div>
        </footer>
    );
}
