import styles from './PageHeader.module.css';
import { FadeIn } from './Motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    microline?: string;
}

export default function PageHeader({ title, subtitle, microline }: PageHeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <FadeIn direction="up" delay={0.1}>
                    <h1 className={styles.title}>{title}</h1>
                </FadeIn>
                {subtitle && (
                    <FadeIn direction="up" delay={0.2}>
                        <p className={styles.subtitle}>{subtitle}</p>
                    </FadeIn>
                )}
                {microline && (
                    <FadeIn direction="up" delay={0.3}>
                        <p className={styles.microline}>{microline}</p>
                    </FadeIn>
                )}
            </div>
        </header>
    );
}
