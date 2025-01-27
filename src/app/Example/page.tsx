"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";

interface IProduct {
  _id: string;
  title: string;
  description?: string; // Optional if not fetched
  imageUrl: string;
  price: number;
  category?: string; // Optional, for filtering
}

const Page = () => {
  const [sanityData, setSanityData] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]); // For category filtering
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const query = `*[_type=="product"]{
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url + "?w=500&h=500&fit=crop",
        category // Add category if available
      }`;

      const data: IProduct[] = await client.fetch(query);
      setSanityData(data);
      setFilteredProducts(data); // Initialize with all products
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]") as string[];
    const items = savedCart
      .map((id) => sanityData.find((p) => p._id === id))
      .filter(Boolean) as IProduct[];
    setCartItems(items);
  }, [sanityData]);

  useEffect(() => {
    const cartIds = cartItems.map((item) => item._id);
    localStorage.setItem("cart", JSON.stringify(cartIds));
  }, [cartItems]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(sanityData); // Reset to all products
    } else {
      const filtered = sanityData.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = (product: IProduct) => {
    setCartItems([...cartItems, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  const filteredBySearch = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } min-h-screen`}
    >
      {/* Header Section */}
      <header className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Welcome to <span className="text-yellow-300">Our Store</span>
          </h1>
          <button
            className="p-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 transition duration-300"
            onClick={toggleTheme}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 lg:px-12 mt-8">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex justify-center gap-4">
          {["All", "Electronics", "Clothing", "Home Decor", "Books"].map(
            (category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition duration-300 ${
                  activeCategory === category
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 lg:px-12">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin border-t-4 border-cyan-500 rounded-full w-12 h-12"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBySearch.map((product) => (
              <div
                key={product._id}
                className="relative border rounded-lg shadow-lg p-4 bg-white hover:shadow-2xl transition duration-300"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="object-cover rounded-md w-full"
                />
                <h2 className="text-lg font-bold mt-4 text-gray-800">
                  {product.title}
                </h2>
                <p className="text-cyan-600 font-semibold">Rs. {product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
