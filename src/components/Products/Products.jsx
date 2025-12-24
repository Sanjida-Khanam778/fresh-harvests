"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Fruits", "Vegetables", "Salad"];

  const products = [
    {
      id: 1,
      name: "Mushroom",
      price: "$2.3/kg",
      image: "/forest-floor-mushrooms.png",
    },
    { id: 2, name: "Mustard", price: "$1.3/kg", image: "/mustard-leaves.jpg" },
    { id: 3, name: "Orange", price: "$4.2/kg", image: "/orange-citrus.jpg" },
    {
      id: 4,
      name: "Pomegranate",
      price: "$11.2/kg",
      image: "/ripe-pomegranate.png",
    },
    { id: 5, name: "Kiwi", price: "$5.3/kg", image: "/kiwi-fruit.png" },
    { id: 6, name: "Coconut", price: "$6.3/kg", image: "/coconut.jpg" },
    { id: 7, name: "Guava", price: "$2.2/kg", image: "/guava.jpg" },
    {
      id: 8,
      name: "Eggplant",
      price: "$1.2/kg",
      image: "/single-ripe-eggplant.png",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary bg-primary/10 px-4 py-1 rounded-lg font-medium text-sm w-fit">
            Our Products
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Fresh Products
          </h2>
          <p className="text-gray-600 text-sm">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "border text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow block"
            >
              {/* Product Image */}
              <div className="mb-4 flex justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-40 w-40 object-cover rounded"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>

              {/* Price */}
              <p className="text-gray-600 font-medium mb-4">{product.price}</p>

              {/* Add to Cart Button */}
              <button
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2 px-4 border text-gray-700 rounded font-medium transition-colors hover:bg-orange-500 hover:text-white"
              >
                Add to cart
              </button>
            </Link>
          ))}
        </div>

        {/* See All Products Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded font-medium hover:bg-orange-500 hover:text-white transition-colors">
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
}
