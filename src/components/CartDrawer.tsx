'use client';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CartDrawer() {
    const { isCartOpen, toggleCart, items, removeItem, updateQuantity, totalPrice } = useCart();
    const drawerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node) && isCartOpen) {
                toggleCart();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isCartOpen, toggleCart]);

    if (!isCartOpen) return null;

    const formattedTotal = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(totalPrice);

    const handleCheckout = async () => {
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items }),
            });
            const data = await response.json();
            if (data.url) {
                const url = new URL(data.url, window.location.origin);
                // Allow redirects to Mercado Pago or internal paths
                if (url.hostname.includes('mercadopago.com') || url.origin === window.location.origin) {
                    window.location.href = data.url;
                } else {
                    console.error('Security alert: Attempted redirect to unauthorized domain', data.url);
                    alert('Error de seguridad al procesar el pago.');
                }
            }
        } catch (error) {
            console.error('Error creating preference:', error);
            alert(`Hubo un error al iniciar el pago: ${error instanceof Error ? error.message : 'Error desconocido'}`);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer} ref={drawerRef}>
                <div className={styles.header}>
                    <h2>Tu Carrito</h2>
                    <button onClick={toggleCart} className={styles.closeBtn}>&times;</button>
                </div>

                <div className={styles.items}>
                    {items.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Tu carrito está vacío.</p>
                            <button onClick={toggleCart} className={styles.continueBtn}>Continuar comprando</button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={`${item.id}-${item.selectedColor}-${item.selectedMaterial}`} className={styles.item}>
                                <div className={styles.itemImage}>
                                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                        <Image
                                            src={item.images[0]}
                                            alt={item.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.itemInfo}>
                                    <h4>{item.name}</h4>
                                    <p className={styles.variant}>
                                        {item.selectedMaterial ? `${item.selectedMaterial} / ` : ''}{item.selectedColor}
                                    </p>
                                    <div className={styles.priceRow}>
                                        <div className={styles.quantityControls}>
                                            <button
                                                className={styles.qtyBtn}
                                                onClick={() => item.quantity > 1 ? updateQuantity(item.id, item.selectedColor, item.selectedMaterial, item.quantity - 1) : removeItem(item.id, item.selectedColor, item.selectedMaterial)}
                                            >
                                                -
                                            </button>
                                            <span className={styles.quantity}>{item.quantity}</span>
                                            <button
                                                className={styles.qtyBtn}
                                                onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedMaterial, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <span>${(item.price * item.quantity).toLocaleString('es-CO')}</span>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id, item.selectedColor, item.selectedMaterial)}
                                        className={styles.removeBtn}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.total}>
                            <span>Total</span>
                            <span>{formattedTotal}</span>
                        </div>
                        <p className={styles.shippingNote}>Envío calculado en el siguiente paso</p>
                        <button
                            className={`btn btn-primary ${styles.checkoutBtn}`}
                            onClick={handleCheckout}
                        >
                            Pagar Ahora (Mercado Pago)
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
