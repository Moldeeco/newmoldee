import Image from 'next/image';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
    const phoneNumber = '573000000000'; // Replace with real number
    const message = 'Hola Moldee.co, estoy interesado en un producto 3D.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            aria-label="Contactar por WhatsApp"
        >
            <div className={styles.iconWrapper}>
                <Image
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp"
                    width={60}
                    height={60}
                    className={styles.icon}
                />
            </div>
            <span className={styles.label}>Chatea con nosotros</span>
        </a>
    );
}
