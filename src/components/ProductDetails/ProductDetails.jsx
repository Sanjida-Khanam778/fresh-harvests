import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { useGetProductQuery } from "../../Api/api";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductQuery(id);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = data?.data;
  const productImages = product?.images || [];
  const reviews = product?.reviews || [];
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + (review.rating || 0), 0) /
        reviews.length
      : 0;

  useEffect(() => {
    if (productImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % productImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [productImages.length]);

  if (isLoading)
    return <div className="text-center py-16">Loading product...</div>;
  if (error)
    return <div className="text-center py-16">Error loading product</div>;
  if (!product)
    return <div className="text-center py-16">Product not found</div>;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Left side - Product Images */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="relative aspect-square mb-4">
            <img
              src={productImages[currentImage] || "/placeholder.svg"}
              alt={product.productName}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Image slider dots */}
          <div className="flex justify-center gap-2">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentImage === index ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side - Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            {" "}
            <span className="text-primary bg-primary/10 px-4 py-1 rounded-lg font-medium text-sm w-fit">
              {product.category.categoryName}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 my-3">
              {product.productName}
            </h1>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= averageRating
                        ? "fill-orange-400"
                        : "fill-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900">
                {averageRating.toFixed(1)} ({reviews.length} review
                {reviews.length !== 1 ? "s" : ""})
              </span>
            </div>
            <p className="text-3xl font-bold text-orange-500 mb-4">
              ${product.price}/kg
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          <div>
            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-16 text-center border-x border-gray-300 py-2"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="p-3 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-600">/kg</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-4 px-6 text-[#4A4A52] font-medium bg-[#F4F6F6] py-3 rounded-lg transition-colors">
                <FaHeart className="text-[#D9D9D9] text-xl" />
                Save as favorite
              </button>
              <button className="flex-1 flex items-center justify-center font-medium gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div>
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "description"
                ? "bg-primary text-white"
                : " text-[#D9D9D9] border"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "reviews"
                ? "bg-primary text-white"
                : " text-[#D9D9D9] border"
            }`}
          >
            Reviews ({reviews.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-[#F4F6F6] rounded-lg p-6 max-w-5xl">
          {activeTab === "description" ? (
            <div className="space-y-4 text-gray-700">
              <p>{product.description}</p>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              {reviews.length === 0 ? "No reviews yet" : "Reviews coming soon"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
