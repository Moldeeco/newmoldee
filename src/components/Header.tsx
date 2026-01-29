'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { totalItems, toggleCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling DOWN -> Hide
                setIsVisible(false);
            } else {
                // Scrolling UP -> Show
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
                <div className={`container ${styles.container}`}>

                    {/* Hamburger (Mobile Only) - Left */}
                    <button
                        className={styles.hamburger}
                        onClick={toggleMobileMenu}
                        aria-label="Menu"
                    >
                        <Image src="/icons/menu.svg" alt="Menu" width={24} height={24} />
                    </button>

                    {/* Logo - Center on Mobile, Left on Desktop */}
                    <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
                        <Image
                            src="/logo/moldee-wordmark-dark.svg"
                            alt="Moldee.co"
                            width={120}
                            height={32}
                            priority
                        />
                    </Link>

                    {/* Desktop Nav - Center */}
                    <nav className={styles.desktopNav}>
                        <Link href="/catalogo">Catálogo</Link>
                        <Link href="/nosotros">Nosotros</Link>
                    </nav>

                    {/* Cart - Right */}
                    <button onClick={toggleCart} className={styles.cartBtn}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                            <path d="M9 20a1 1 0 100-2 1 1 0 000 2zM20 20a1 1 0 100-2 1 1 0 000 2z" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                        </svg>
                        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <nav className={styles.mobileNav}>
                        <Link href="/" onClick={closeMobileMenu} className={styles.mobileNavLink}>Home</Link>
                        <Link href="/catalogo" onClick={closeMobileMenu} className={styles.mobileNavLink}>Catálogo</Link>
                        <Link href="/nosotros" onClick={closeMobileMenu} className={styles.mobileNavLink}>Nosotros</Link>
                    </nav>
                </div>
            )}
        </>
    );
}
