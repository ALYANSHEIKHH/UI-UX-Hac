import React, { useState } from "react";
import Image from "next/image";

// Define the IProduct type
type IProduct = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
};

interface SearchBarProps {
  products: IProduct[];
  onAddToCart: (product: IProduct) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ products, onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for items..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Filtered Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded-md">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-sm mt-1">Price: Rs. {product.price}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
