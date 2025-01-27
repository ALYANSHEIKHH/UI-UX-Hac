// "use client";
// import React from "react";
// import Image from "next/image";
// import { useCart } from "@/components/CartContext";
// import { MdDelete } from "react-icons/md";
// import Link from "next/link";

// const CartPage = () => {
//   const { cart, removeFromCart } = useCart();

//   const handleRemoveFromCart = (product: any) => {
//     const confirmation = window.confirm(
//       `Are you sure you want to remove ${product.name} from your cart?`
//     );
//     if (confirmation) {
//       removeFromCart(product);
//       alert(`${product.name} has been removed from your cart!`);
//     } else {
//       console.log(`${product.name} was not removed from the cart.`);
//     }
//   };

//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty. Add items before proceeding to checkout.");
//       return;
//     }
//     alert("Proceeding to checkout...");
//     console.log("Cart contents:", cart);
//     // Example: router.push("/checkout");
//   };

//   return (
//     <div className="mt-10 mx-auto max-w-screen-xl">
//       <h2 className="text-[24px] font-bold mb-4">Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cart.map((item: any, index: number) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between bg-[#F9F1E7] p-4 rounded"
//               >
//                 <div className="flex items-center">
//                   <Image
//                     src={item.src}
//                     alt={item.alt}
//                     width={60}
//                     height={60}
//                     className="mr-4"
//                   />
//                   <div>
//                     <h3 className="text-[18px] font-semibold">{item.name}</h3>
//                     <span>{item.price}</span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(item)}
//                   className="flex items-center text-xl text-gray-800 px-4 py-2 rounded"
//                 >
//                   <MdDelete />
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-center mt-10">
//             <Link href="/checkout">
//               <button
//                 onClick={handleCheckout}
//                 className="border border-black w-full lg:w-[222px] h-[48px] lg:h-[58.95px] rounded-2xl text-[18px] lg:text-[20px]"
//               >
//                 Check Out
//               </button>
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;






"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { RiDeleteBinLine } from 'react-icons/ri';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

interface IProduct {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
}

interface ICartItem {
    product: IProduct;
    quantity: number;
}

export default function CartPage() {
    const [sanityData, setSanityData] = useState<IProduct[]>([]);
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);

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

    useEffect(() => {
        const savedCart: string[] = JSON.parse(localStorage.getItem("cart") || "[]");
        const items = savedCart.map((id) => {
            const product = sanityData.find((p) => p._id === id);
            return product ? { product, quantity: 1 } : null; // Initialize quantity to 1
        }).filter(Boolean) as ICartItem[];

        setCartItems(items);
    }, [sanityData]);

    const removeFromCart = (id: string) => {
        const updatedCart = cartItems.filter(item => item.product._id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart.map(item => item.product._id)));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cart");
    };

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity <= 0) return; // Prevent negative or zero quantity
        const updatedItems = cartItems.map(item =>
            item.product._id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems.map(item => item.product._id)));
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div className="max-w-screen-xl mx-auto overflow-hidden">
        {/* Banner Section */}
        <div>
          <Image
            src={"/images/cart-img.png"}
            alt="cart-section"
            width={1440}
            height={316}
            className="w-full h-auto mt-20 object-cover rounded-lg  transform transition-all duration-500 ease-in-out hover:scale-105"
          />
        </div>
      
        {/* Cart Content Section */}
        <div className="flex flex-col custom:flex-row justify-between items-start lg:items-center custom:items-start mx-6 lg:mx-24 my-[56px] gap-12 lg:gap-16">
          
          {/* Cart Items */}
          <div className="flex flex-col justify-start items-center gap-[56px] w-full lg:w-auto">
            
            {/* Header for Cart Items */}
            <div className="w-full ml-6 hidden lg:w-[817px] h-[55px] bg-gradient-to-r from-[#F9F1E7] to-[#E1C8A7] rounded-lg md:flex justify-between items-center px-[30px] shadow-xl">
              <h1 className="font-[600] text-[16px] leading-6 text-[#3A3A3A]">Product</h1>
              <h1 className="font-[600] text-[16px] leading-6 text-[#3A3A3A]">Price</h1>
              <h1 className="font-[600] text-[16px] leading-6 text-[#3A3A3A]">Quantity</h1>
              <h1 className="font-[600] text-[16px] leading-6 text-[#3A3A3A]">Actions</h1>
            </div>
      
            {/* Displaying Cart Items */}
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div
                  key={item.product._id}
                  className="w-full lg:w-[817px] h-auto flex flex-col md:flex-row justify-between items-center pr-[30px] gap-4 lg:gap-0 bg-[#f5f5f5] shadow-lg rounded-xl hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105"
                >
                  {/* Product Info */}
                  <div className="flex justify-start items-center gap-4">
                    <div className='flex flex-col gap-3'>
                      <h1 className="font-medium text-lg text-[#333]">{item.product.title}</h1>
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.title}
                        width={120}
                        height={80}
                        className='rounded-lg object-cover w-full h-full mb-4 transition-all duration-300 ease-in-out transform hover:scale-110'
                      />
                    </div>
                  </div>
      
                  {/* Price */}
                  <h1 className="font-semibold text-xl text-[#B88E2F]">Rs. {item.product.price}</h1>
      
                  {/* Quantity Input */}
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.product._id, parseInt(e.target.value))}
                    className="w-[60px] h-[30px] text-center border-2 border-gray-300 bg-[#fff] rounded-lg shadow-md hover:border-[#B88E2F] transition-all duration-300 ease-in-out transform hover:scale-110"
                  />
      
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product._id)}
                    className="hover:text-red-600 text-[#B88E2F] transform transition-all duration-300 ease-in-out hover:scale-125"
                  >
                    <RiDeleteBinLine className="text-[#B88E2F] scale-150 hover:text-red-600 duration-300 ease-in-out hover:scale-[2]" />
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center w-full h-64 bg-[#EFE8DC] rounded-lg border-2 border-dashed border-[#B88E2F] mt-20 mb-24 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
                <RiDeleteBinLine className="text-[#B88E2F] scale-150 mb-4" />
                <h1 className="font-semibold text-3xl text-[#B88E2F]">Your Cart is Empty</h1>
                <p className="text-center text-[#666] mt-3">It seems like you haven&lsquo;t added anything to your cart yet. Explore our collection and find your favorites!</p>
                <Link
                  href="/shop"
                  className="mt-6 px-8 py-3 border-2 border-[#B88E2F] text-[#B88E2F] rounded-full font-medium text-lg hover:bg-[#B88E2F] hover:text-white transition-all duration-300 ease-in-out"
                >
                  Start Shopping
                </Link>
              </div>
            )}
          </div>
      
          {/* Cart Totals */}
          <div className="w-full lg:w-[393px] h-auto bg-gradient-to-r from-[#F9F1E7] to-[#F3D19C] rounded-lg px-[20px] lg:px-[75px] py-8 flex flex-col justify-start items-center shadow-xl">
            <h1 className="font-semibold text-3xl text-black text-center">Cart Totals</h1>
            <div className="flex justify-between items-center gap-[20px] lg:gap-[50px] mt-[40px] w-full">
              <h1 className="font-[400] text-lg text-black">Subtotal</h1>
              <h1 className="font-semibold text-lg text-[#9F9F9F]">Rs. {totalPrice}</h1>
            </div>
            <div className="flex justify-between items-center gap-[20px] lg:gap-[50px] mt-[26px] w-full">
              <h1 className="font-[400] text-lg text-black">Total</h1>
              <h1 className="font-semibold text-xl text-[#B88E2F]">Rs. {totalPrice}</h1>
            </div>
            <Link href="/checkout">
              <button className="w-[222px] h-[58.95px] border-2 border-[#B88E2F] text-[#fff] bg-[#B88E2F] rounded-[15px] mt-[40px] transform hover:scale-105 transition-all duration-300 ease-in-out">
                Check Out
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="w-[222px] h-[58.95px] border-2 border-red-500 text-red-500 rounded-[15px] mt-[10px] hover:bg-red-500 hover:text-white transform transition-all duration-300 ease-in-out"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
      
    );
}