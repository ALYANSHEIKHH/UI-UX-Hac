// src/context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    discount: number;
    image: string;
    alt: string;
    slug: { current: string };
    quantity: number;
}

interface CartContextType {
    cart: string[];
    cartItems: Product[];
    addToCart: (id: string) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    totalPrice: number;
    setSanityData: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [sanityData, setSanityData] = useState<Product[]>([]);
    const [cart, setCart] = useState<string[]>([]);
    const cartItems = cart
        .map((id) => sanityData.find((product) => product._id === id))
        .filter((item): item is Product => Boolean(item));

    const addToCart = (id: string) => {
        setCart((prev) => [...prev, id]);
        localStorage.setItem("cart", JSON.stringify([...cart, id]));
    };

    const removeFromCart = (id: string) => {
        const updatedCart = cart.filter((productId) => productId !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <CartContext.Provider
            value={{ cart, cartItems, addToCart, removeFromCart, clearCart, totalPrice, setSanityData }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
};
