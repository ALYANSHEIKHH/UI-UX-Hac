"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Mock product data (replace with Sanity data)
const product = {
    id: 'asgaard-sofa',
    name: 'Asgaard Sofa',
    price: 250000,
    image: '/images/sofi.png',
    description:
        'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.',
};

const relatedProducts = [
    { id: 1, name: 'Syltherine', image: '/images/table.png', price: 30000 },
    { id: 2, name: 'Syltherine', image: '/images/table.png', price: 40000 },
];

const AsgaardPage = () => {
    const [cart, setCart] = useState<{ id: string; name: string; price: number; quantity: number }[]>([]);

    // Add to Cart Function
    const addToCart = () => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Calculate total quantity of items in cart
    const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            {/* Navigation Bar */}
            <nav className="bg-[#F9F1E7] h-24 mt-20 flex items-center gap-8 pl-20">
                <ul className="flex items-center gap-2 list-none">
                    <li className="text-[#9F9F9F]">Home</li>
                    <Image
                        src="/images/black-arr.png"
                        alt="arrow"
                        width={20}
                        height={20}
                    />
                    <li className="text-[#9F9F9F]">Shop</li>
                    <Image
                        src="/images/black-arr.png"
                        alt="arrow"
                        width={20}
                        height={20}
                    />
                    <li className="text-[#9F9F9F]">Asgaard Sofa</li>
                </ul>
                <div className="ml-auto pr-20 flex items-center">
                    <span className="text-lg font-semibold text-black">
                        Cart: {totalCartItems} items
                    </span>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-start justify-evenly mt-16 px-4 lg:px-24 gap-12">
                {/* Sidebar Thumbnails */}
                <div className="flex flex-col gap-4">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num}>
                            <Image
                                src={`/images/sec${num}.png`}
                                alt={`sec${num}`}
                                width={76}
                                height={80}
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Product Image Container */}
                <div className="bg-[#F9F1E7] w-full lg:w-1/2 h-auto flex items-center justify-center p-4 rounded-md">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={600}
                        className="max-w-full h-auto"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col max-w-lg">
                    <h1 className="text-4xl font-semibold mb-2">{product.name}</h1>
                    <span className="text-2xl text-[#9F9F9F]">Rs. {product.price.toLocaleString()}</span>

                    <button
                        onClick={addToCart}
                        className="w-[123px] h-[64px] bg-black text-white rounded-2xl mt-6">
                        Add To Cart
                    </button>
                </div>
            </div>

            {/* Related Products */}
            <h1 className="text-[36px] font-semibold text-center mt-16">Related Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8">
                {relatedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center">
                        <Image src={product.image} alt={product.name} width={285} height={301} />
                        <h3 className="text-[24px] font-semibold text-[#3A3A3A] mt-4">{product.name}</h3>
                        <span className="text-[#9F9F9F]">Rs. {product.price.toLocaleString()}</span>
                    </div>
                ))}
            </div>

           
        </>
    );
};

export default AsgaardPage;
