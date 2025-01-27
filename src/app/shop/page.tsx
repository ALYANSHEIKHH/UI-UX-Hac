// "use client";
// import React from "react";
// import Image from "next/image";
// import { useCart } from "@/components/CartContext";

// const ShopPage = () => {
//   const { cart, addToCart, removeFromCart } = useCart();

//   const products = [
//     {
//       src: "/images/table.png",
//       alt: "table-img",
//       name: "Syltherine",
//       desc: "Stylish cafe chair",
//       price: "Rp 2.500.000",
//       oldPrice: "Rp 3.500.000",
//     },
//     {
//       src: "/images/chair.png",
//       alt: "chair-img",
//       name: "Leviosa",
//       desc: "Stylish cafe chair",
//       price: "Rp 2.500.000",
//     },
//     {
//       src: "/images/sofa.png",
//       alt: "sofa-img",
//       name: "Lolito",
//       desc: "Luxury big sofa",
//       price: "Rp 7.000.000",
//       oldPrice: "Rp 3.500.000",
//     },
//     {
//       src: "/images/sofa.png",
//       alt: "sofa-img",
//       name: "Lolito",
//       desc: "Luxury big sofa",
//       price: "Rp 7.000.000",
//       oldPrice: "Rp 3.500.000",
//     },
//     {
//       src: "/images/multi-sofa.png",
//       alt: "multi-sofa-img",
//       name: "Respira",
//       desc: "Outdoor bar table and stool",
//       price: "Rp 500.000",
//     },
//     {
//       src: "/images/lamp.png",
//       alt: "lamp-img",
//       name: "Grifo",
//       desc: "Night lamp",
//       price: "Rp 1.500.000",
//     },
//     {
//       src: "/images/black-sofa.png",
//       alt: "black-sofa-img",
//       name: "Muggo",
//       desc: "Small mug",
//       price: "Rp 150.000",
//     },
//     {
//       src: "/images/pic-sofa.png",
//       alt: "pic-sofa-img",
//       name: "Pingky",
//       desc: "Cute bed set",
//       price: "Rp 14.000.000",
//       oldPrice: "Rp 3.500.000",
//     },
//     {
//       src: "/images/orange-sofa.png",
//       alt: "orange-sofa-img",
//       name: "Potty",
//       desc: "Minimalist flower pot",
//       price: "Rp 500.000",
//     },
//     {
//       src: "/images/chair.png",
//       alt: "Syltherine",
//       description: "Stylish cafe chair",
//       price: "Rp 2.500.000",
//       oldPrice: "Rp 3.500.000",
//     },
//     {
//       src: "/images/sofa.png",
//       alt: "Lolito",
//       description: "Luxury big sofa",
//       price: "Rp 7.000.000",
//       oldPrice: "Rp 3.500.000",
//     },
//     {
//       src: "/images/multi-sofa.png",
//       alt: "Respira",
//       description: "Outdoor bar table and stool",
//       price: "Rp 500.000",
//       oldPrice: null,
//     },
//     // {
//     //   src: "/images/table.png",
//     //   alt: "Leviosa",
//     //   description: "Stylish cafe chair",
//     //   price: "Rp 2.500.000",
//     //   oldPrice: "Rp 3.500.000",
//     // },
//     // Add more products...
//   ];

 
//   const handleAddToCart = (product: any) => {
//     const confirmation = window.confirm(
//       `Are you sure you want to add ${product.name} to your cart?`
//     );
//     if (confirmation) {
//       addToCart(product);
//       alert(`${product.name} has been added to your cart!`);
//     } else {
//       // Optionally handle cancellation feedback
//       console.log(`${product.name} was not added to the cart.`);
//     }
//   };
  
  

//   // const handleRemoveFromCart = (product: any) => {
//   //   removeFromCart(product);
//   //   alert(`${product.name} has been removed from your cart!`);
//   // };

//   return (
//     <>
//       <div>
//         <Image
//           src={"/images/shop.svg"}
//           alt="shop"
//           width={1440}
//           height={316}
//           className="w-full h-auto mt-20"
//         />
//       </div>

//       {/* Product List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="relative w-[285px] h-[446px] bg-[#F4F5F7] mx-auto group"
//           >
//             <Image
//               src={product.src}
//               alt={product.alt}
//               width={285}
//               height={301}
//               className="group-hover:opacity-75 transition-opacity duration-300"
//             />
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <button
//   className="text-white text-[16px] font-semibold bg-[#B88E2F] py-2 px-4 rounded"
//   onClick={() => handleAddToCart(product)}
// >
//   Add to Cart
// </button>

//             </div>
//             <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
//               {product.name}
//             </h3>
//             <p className="ml-6">{product.desc}</p>
//             <span className="text-[20px] font-semibold mr-6 ml-6">
//               {product.price}
//             </span>
//             {product.oldPrice && (
//               <span className="text-[16px] line-through">{product.oldPrice}</span>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       {/* <div className="mt-10 mx-auto max-w-screen-xl">
//         <h2 className="text-[24px] font-bold mb-4">Your Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
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
//                   className="flex items-center bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-5 h-5 mr-1"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div> */}
//     </>
//   );
// };

// export default ShopPage;







// "use client";
// import React from "react";
// import Image from "next/image";
// import { useCart } from "@/components/CartContext";

// const ShopPage = () => {
//   const { cart, addToCart } = useCart();

//   const products = [
//     {
//       src: "/images/table.png",
//       alt: "table-img",
//       name: "Syltherine",
//       desc: "Stylish cafe chair",
//       price: "Rp 2.500.000",
//       oldPrice: "Rp 3.500.000",
//     },
//     {
//       src: "/images/chair.png",
//       alt: "chair-img",
//       name: "Leviosa",
//       desc: "Stylish cafe chair",
//       price: "Rp 2.500.000",
//     },
    
// {
//   src: "/images/table.png",
//   alt: "table-img",
//   name: "Syltherine",
//   desc: "Stylish cafe chair",
//   price: "Rp 2.500.000",
//   oldPrice: "Rp 3.500.000",
// },
// {
//   src: "/images/chair.png",
//   alt: "chair-img",
//   name: "Leviosa",
//   desc: "Stylish cafe chair",
//   price: "Rp 2.500.000",
// },
// {
//   src: "/images/sofa.png",
//   alt: "sofa-img",
//   name: "Lolito",
//   desc: "Luxury big sofa",
//   price: "Rp 7.000.000",
//   oldPrice: "Rp 3.500.000",
// },
// {
//   src: "/images/multi-sofa.png",
//   alt: "multi-sofa-img",
//   name: "Respira",
//   desc: "Outdoor bar table and stool",
//   price: "Rp 500.000",
// },
// {
//   src: "/images/lamp.png",
//   alt: "lamp-img",
//   name: "Grifo",
//   desc: "Night lamp",
//   price: "Rp 1.500.000",
// },
// {
//   src: "/images/black-sofa.png",
//   alt: "black-sofa-img",
//   name: "Muggo",
//   desc: "Small mug",
//   price: "Rp 150.000",
// },
// {
//   src: "/images/pic-sofa.png",
//   alt: "pic-sofa-img",
//   name: "Pingky",
//   desc: "Cute bed set",
//   price: "Rp 14.000.000",
//   oldPrice: "Rp 3.500.000",
// },
// {
//   src: "/images/orange-sofa.png",
//   alt: "orange-sofa-img",
//   name: "Potty",
//   desc: "Minimalist flower pot",
//   price: "Rp 500.000",
// },
// {
//         src: "/images/sofa.png",
//         alt: "Lolito",
//         description: "Luxury big sofa",
//         price: "Rp 7.000.000",
//         oldPrice: "Rp 3.500.000",
//       },
//       {
//         src: "/images/multi-sofa.png",
//         alt: "Respira",
//         description: "Outdoor bar table and stool",
//         price: "Rp 500.000",
//         oldPrice: null,
//       },
//     // More products here...
//   ];

//   // Adds a product to the cart with a confirmation prompt
//   const handleAddToCart = (product: any) => {
//     const confirmation = window.confirm(
//       `Are you sure you want to add ${product.name} to your cart?`
//     );
//     if (confirmation) {
//       addToCart(product);
//       alert(`${product.name} has been added to your cart!`);
//     }
//   };

//   return (
//     <>
//       {/* Shop banner */}
//       <div>
//         <Image
//           src={"/images/shop.svg"}
//           alt="shop"
//           width={1440}
//           height={316}
//           className="w-full h-auto mt-20"
//         />
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="relative w-[285px] h-[446px] bg-[#F4F5F7] mx-auto group"
//           >
//             <Image
//               src={product.src}
//               alt={product.alt}
//               width={285}
//               height={301}
//               className="group-hover:opacity-75 transition-opacity duration-300"
//             />
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button
//                 className="text-white text-[16px] font-semibold bg-[#B88E2F] py-2 px-4 rounded"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//             <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
//               {product.name}
//             </h3>
//             <p className="ml-6">{product.desc}</p>
//             <span className="text-[20px] font-semibold mr-6 ml-6">
//               {product.price}
//             </span>
//             {product.oldPrice && (
//               <span className="text-[16px] line-through">{product.oldPrice}</span>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ShopPage;


"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

// Define the type for the product image
interface ProductImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: ProductImage; // Use the specific type for product image
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const getProducts = async () => {
    try {
      const productsData = await client.fetch(
        `*[_type=="product"]{
          _id,
          title,
          price,
          productImage
        }`
      );
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Stop loading after fetch
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div>
        <Image
          src={"/images/shop.svg"}
          alt="shop"
          width={1440}
          height={316}
          className="w-full h-auto mt-20 object-cover"
        />
      </div>

      {/* Filters Section */}
      <div className="h-auto bg-[#F9F1E7] flex flex-col sm:flex-row items-center justify-between p-4 sm:px-8 lg:px-16 shadow-md">
        <div className="flex items-center space-x-4">
          <Image src="/images/dotted-line.svg" alt="dotted-line" width={25} height={25} />
          <h3 className="text-lg sm:text-xl font-medium">Filter</h3>
          <Image src="/images/four-dot.svg" alt="four-dot" width={25} height={25} />
          <Image src="/images/square-line.svg" alt="square-line" width={25} height={25} />
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <span className="text-sm sm:text-base">Showing 1–16 of 32 results</span>
          <span className="text-sm sm:text-base">Show</span>
          <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center shadow">
            <h3 className="text-gray-600 text-sm sm:text-base">16</h3>
          </div>
          <span className="text-sm sm:text-base">Sort by</span>
          <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center shadow">
            <h3 className="text-gray-600 text-sm sm:text-base">Default</h3>
          </div>
        </div>
      </div>

      {/* Products Section */}
    
      {loading ? (
  <div className="flex items-center justify-center h-[300px]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-600"></div>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6 sm:px-8 lg:px-16 bg-[#f9f9f9]">
    {products.map((product) => (
      <div
        key={product._id}
        className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        {/* Product Image */}
        {product.productImage && (
          <div className="relative w-full h-[300px] group">
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-medium">
                View Details
              </span>
            </div>
          </div>
        )}

        {/* Product Details */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 truncate hover:text-gray-600 transition-colors duration-200">
            {product.title}
          </h3>
          <span className="text-lg font-semibold text-gray-700">
            Rp {product.price.toLocaleString()}
          </span>
          <Link href={`/shop/${product._id}`}>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition-all duration-300">
              View Product
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
)}

    </>
  );
};

export default ShopPage;