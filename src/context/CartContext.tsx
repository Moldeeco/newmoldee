'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product, ProductColor, ProductMaterial } from '@/types/product';

interface CartContextType {
    items: CartItem[];
    addItem: (product: Product, options: { color: string; material?: string; quantity: number }) => void;
    removeItem: (itemId: string, color: string, material?: string) => void;
    updateQuantity: (itemId: string, color: string, material: string | undefined, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    isCartOpen: boolean;
    toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart to localStorage whenever items change
    useEffect(() => {
        if (items.length > 0) {
            localStorage.setItem('cart', JSON.stringify(items));
        } else {
            localStorage.removeItem('cart');
        }
    }, [items]);

    const addItem = (product: Product, options: { color: string; material?: string; quantity: number }) => {
        setItems((prev) => {
            const existingItem = prev.find(
                (item) =>
                    item.id === product.id &&
                    item.selectedColor === options.color &&
                    (item.selectedMaterial === options.material || (!item.selectedMaterial && !options.material))
            );

            if (existingItem) {
                return prev.map((item) =>
                    item === existingItem
                        ? { ...item, quantity: item.quantity + options.quantity }
                        : item
                );
            }

            return [...prev, {
                ...product,
                selectedColor: options.color as ProductColor,
                selectedMaterial: options.material as ProductMaterial | undefined,
                quantity: options.quantity
            }];
        });
        setIsCartOpen(true);
    };

    const removeItem = (itemId: string, color: string, material?: string) => {
        setItems((prev) => prev.filter((item) =>
            !(item.id === itemId && item.selectedColor === color && item.selectedMaterial === material)
        ));
    };

    const updateQuantity = (itemId: string, color: string, material: string | undefined, quantity: number) => {
        setItems((prev) => prev.map((item) => {
            if (item.id === itemId && item.selectedColor === color && item.selectedMaterial === material) {
                return { ...item, quantity: Math.max(1, quantity) };
            }
            return item;
        }));
    };

    const clearCart = () => setItems([]);
    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            items,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice,
            isCartOpen,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
