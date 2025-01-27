"use client"
import Image from 'next/image'
import { GoDotFill } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";
import { client } from '@/sanity/lib/client';
import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Success icon


interface IProduct {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
}


const Page = () => {
    const [sanityData, setSanityData] = useState<IProduct[]>([]);
    const [cartItems, setCartItems] = useState<IProduct[]>([]);

    // Fetch data from Sanity
    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type=="product"]{
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url + "?w=500&h=500&fit=crop"
      }`;

            const data: IProduct[] = await client.fetch(query);
            setSanityData(data);
        };

        fetchData();
    }, []);
    

    // Load cart items from localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]") as string[]; // Assuming _id is string
        const items = savedCart.map((id) => sanityData.find((p) => p._id === id)).filter(Boolean) as IProduct[];
        setCartItems(items);
    }, [sanityData]);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const [isLoading, setIsLoading] = useState(false);
    const [orderStatus, setOrderStatus] = useState("");
    const [showSuccess, setShowSuccess] = useState(false); // To control success animation

    const clearCart = () => {
        setIsLoading(true);
        setOrderStatus("");
        setShowSuccess(false); // Hide success animation initially

        // Simulate order placement with a delay (e.g., API request)
        setTimeout(() => {
            setIsLoading(false);
            setCartItems([]); // Clear cart
            localStorage.removeItem("cart");
            setOrderStatus("Your order has been placed successfully!");
            setShowSuccess(true); // Show success animation

            // Additional actions: Redirect or show more details
        }, 3000);
    };
    return (
        <>
          <div className="relative">
    <Image
        src={"/images/checkout.png"}
        alt="checkout"
        width={1440}
        height={316}
        className="w-full h-auto mt-20 rounded-lg shadow-lg"
    />
</div>

<div className="container mx-auto px-4 lg:px-12 mt-16">
    <div className="flex flex-col lg:flex-row items-start justify-between gap-10">

        {/* Left Side: Billing Form */}
        <div className="w-full lg:w-[60%] p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Billing details</h1>

            <div className="flex flex-wrap gap-6">
                {/* First Name */}
                <div className="w-full sm:w-1/2">
                    <label className="block text-lg font-medium">First Name</label>
                    <input
                        type="text"
                        className="w-full h-16 border-2 border-gray-300 rounded-md mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                {/* Last Name */}
                <div className="w-full sm:w-1/2">
                    <label className="block text-lg font-medium">Last Name</label>
                    <input
                        type="text"
                        className="w-full h-16 border-2 border-gray-300 rounded-md mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Company Name */}
            <label className="block text-lg font-medium mt-4">Company Name (Optional)</label>
            <input
                type="text"
                className="w-full h-16 border-2 border-gray-300 rounded-md mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Country / Region */}
            <label className="block text-lg font-medium mt-4">Country / Region</label>
            <div className="relative">
                <input
                    type="text"
                    className="w-full h-16 border-2 border-gray-300 rounded-md pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Image
                    src={"/images/arr-ico.png"}
                    alt="arrow-icon"
                    width={20}
                    height={20}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                />
            </div>

            {/* Street Address */}
            <label className="block text-lg font-medium mt-4">Street Address</label>
            <input
                type="text"
                className="w-full h-16 border-2 border-gray-300 rounded-md mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Town / City */}
            <label className="block text-lg font-medium mt-4">Town / City</label>
            <input
                type="text"
                className="w-full h-16 border-2 border-gray-300 rounded-md mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Province */}
            <label className="block text-lg font-medium mt-4">Province</label>
            <div className="relative">
                <input
                    placeholder="Western Province"
                    type="text"
                    className="w-full h-16 border-2 border-gray-300 rounded-md pl-4 pr-10 text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Image
                    src={"/images/arr-ico.png"}
                    alt="arrow-icon"
                    width={20}
                    height={20}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                />
            </div>

            {/* ZIP code */}
            <label className="block text-lg font-medium mt-4">ZIP Code</label>
            <input
                type="text"
                className="w-full h-16 border-2 border-gray-300 rounded-md mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Phone */}
            <label className="block text-lg font-medium mt-4">Phone</label>
            <input
                type="text"
                className="w-full h-16 border-2 border-gray-300 rounded-md mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Email address */}
            <label className="block text-lg font-medium mt-4">Email address</label>
            <input
                type="text"
                className="w-full h-16 border-2 border-gray-300 rounded-md mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Additional Information */}
            <label className="block text-lg font-medium mt-4">Additional Information</label>
            <input
                placeholder="Additional information"
                type="text"
                className="w-full h-16 border-2 border-gray-300 rounded-md mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full xl:w-[533px] lg:h-[616px] flex flex-col gap-6 p-6 bg-white shadow-lg rounded-lg mt-12 lg:mt-0">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-xl">Product</h2>
                <h2 className="font-semibold text-xl">Subtotal</h2>
            </div>

            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item._id} className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 bg-[#F9F1E7] rounded-lg flex justify-center items-center">
                                <Image src={item.imageUrl} alt={item.title} width={60} height={60} className="object-cover rounded-lg" />
                            </div>
                            <h3 className="text-lg text-gray-700">{item.title}</h3>
                        </div>
                        <h3 className="text-lg font-semibold text-black">Rs. {item.price}</h3>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Your cart is empty</p>
            )}

            <div className="flex justify-between items-center mt-4">
                <h3 className="text-lg text-black">Total</h3>
                <h3 className="text-xl font-semibold text-[#B88E2F]">Rs. {totalPrice}</h3>
            </div>

            <hr className="my-6" />

            <div>
                <h3 className="text-lg text-black flex items-center gap-4">
                    <GoDotFill className="text-xl text-[#B88E2F]" />
                    Direct Bank Transfer
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared.
                </p>

                <div className="mt-4">
                    <h4 className="text-lg text-gray-600 flex items-center gap-4">
                        <FaRegCircle className="text-[#B88E2F]" />
                        Direct Bank Transfer
                    </h4>
                    <h4 className="text-lg text-gray-600 flex items-center gap-4">
                        <FaRegCircle className="text-[#B88E2F]" />
                        Cash On Delivery
                    </h4>
                </div>
            </div>

            <p className="text-sm text-black mt-4 text-justify">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes as described in our <span className="font-bold">privacy policy.</span>
            </p>

            <div className="flex justify-center items-center w-full mt-8">
                <button
                    onClick={clearCart}
                    className="w-full lg:w-[318px] h-[64px] rounded-xl bg-black text-white font-semibold text-lg leading-[30px] hover:bg-[#B88E2F] transition-all duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex justify-center items-center">
                            <div className="animate-spin border-t-4 border-b-4 border-gray-400 rounded-full w-6 h-6 mr-2"></div>
                            Placing your order...
                        </div>
                    ) : (
                        "Place Order"
                    )}
                </button>
            </div>

            {/* Full-screen loader */}
            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="animate-spin border-t-4 border-b-4 border-white rounded-full w-12 h-12"></div>
                </div>
            )}

            {showSuccess && !isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="text-white text-2xl font-bold text-center">
                        <div className='flex items-center justify-center'>
                            <FaCheckCircle className="text-6xl mb-4" />
                        </div>
                        <p className="mt-4">Your order has been successfully placed!</p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="mt-6 px-4 py-2 bg-white text-gray-900 rounded-lg"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            )}

            {/* Order Status */}
            {orderStatus && !isLoading && (
                <p className="mt-4 text-center text-green-600">{orderStatus}</p>
            )}
        </div>
    </div>
</div>

        

        </>
    )
}

export default Page