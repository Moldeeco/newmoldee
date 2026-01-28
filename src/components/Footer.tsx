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
                    <a href="#" className={styles.link}>Envíos y Devoluciones</a>
                    <a href="#" className={styles.link}>Contacto</a>
                </div>
                <div className={styles.copy}>
                    &copy; {new Date().getFullYear()} Moldee.co. Hecho en Colombia 🇨🇴
                </div>
            </div>
        </footer>
    );
}
