import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../Api/api";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data, error, isLoading } = useGetProductsQuery();

  const categories = ["All", "Fruits", "Vegetables", "Salad"];

  if (isLoading)
    return <div className="text-center py-16">Loading products...</div>;
  if (error)
    return <div className="text-center py-16">Error loading products</div>;

  const products = data?.data || [];

  const filteredProducts =
    activeCategory === "All"
      ? products.slice(0, 8) // Limit to 8 products
      : products
          .filter((product) => {
            const catName = product.category.categoryName.toLowerCase();
            if (activeCategory === "Fruits") return catName === "fruits";
            if (activeCategory === "Vegetables") return catName === "vegetable";
            if (activeCategory === "Salad") return catName === "salad";
            return false;
          })
          .slice(0, 8); // Also limit filtered products to 8

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-primary bg-primary/10 px-4 py-1 rounded-lg font-medium text-sm w-fit">
            Our Products
          </span>
          <h2 className="text-4xl xl:text-5xl font-medium text-gray-900 my-4">
            Our Fresh Products
          </h2>
          <p className="text-gray-600 text-sm w-2/5 mx-auto">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "border text-[#A6A6A6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="shadow-md rounded-lg p-3 text-center block"
            >
              {/* Product Image */}
              <div className="mb-4 bg-[#F4F6F6] rounded-lg p-4 flex justify-center">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.productName}
                  className="h-40 object-cover rounded"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.productName}
              </h3>

              {/* Price */}
              <p className="text-gray-600 font-medium mb-4">
                ${product.price}/kg
              </p>

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
          <Link
            to="/shop"
            className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded font-medium hover:bg-orange-500 hover:text-white transition-colors"
          >
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
