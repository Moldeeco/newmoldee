export type ProductMaterial = 'PLA' | 'PETG' | 'Resina' | 'TPU';
export type ProductColor = 'Blanco' | 'Negro' | 'Gris' | 'Rojo' | 'Azul' | 'Verde';

export interface ProductVariant {
    id: string;
    name: string; // e.g., "Standard", "Large"
    price: number;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number; // Base price
    images: string[];
    category: string;
    materials: ProductMaterial[];
    colors: ProductColor[];
    variants?: ProductVariant[];
    isNew?: boolean;
    isBestSeller?: boolean;
}

export interface CartItem extends Product {
    selectedColor: ProductColor;
    selectedMaterial: ProductMaterial;
    quantity: number;
}
