import styles from './legal.module.css';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`container ${styles.wrapper}`}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
