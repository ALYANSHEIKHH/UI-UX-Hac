// import { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';

// // Define the Product interface
// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]); // Properly typed state

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data: Product[] = await client.fetch(`*[_type == "product"]{
//         _id,
//         title,
//         price,
//         imageUrl
//       }`);
//       console.log('Fetched products:', data); // Check what data you get
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h2>Our Products</h2>
//       <ul>
//         {products.map((product: Product) => (
//           <li key={product._id}>
//             <h3>{product.title}</h3>
//             <p>Price: ${product.price}</p>
//             <img src={product.imageUrl} alt={product.title} width={200} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
