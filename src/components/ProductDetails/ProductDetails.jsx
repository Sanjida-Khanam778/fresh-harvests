"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react"

export default function ProductDetails() {
  const [currentImage, setCurrentImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  // Placeholder images - you can replace these with your actual product images
  const productImages = ["/coconut-1.jpg", "/coconut-2.jpg", "/coconut-3.jpg"]

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Left side - Product Images */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="relative aspect-square mb-4">
            <img
              src={productImages[currentImage] || "/placeholder.svg"}
              alt="Coconut"
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
                  currentImage === index ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side - Product Info */}
        <div>
          <span className="inline-block px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full mb-3">Fruits</span>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">Coconut</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 fill-orange-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-900">5.0 (1 review)</span>
          </div>

          <p className="text-3xl font-bold text-orange-500 mb-4">$6.3/kg</p>

          <p className="text-gray-600 leading-relaxed mb-6">
            From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you
            a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of
            culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.
          </p>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button onClick={decreaseQuantity} className="p-3 hover:bg-gray-100 transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-16 text-center border-x border-gray-300 py-2"
                />
                <button onClick={increaseQuantity} className="p-3 hover:bg-gray-100 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-gray-600">/kg</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart className="w-5 h-5" />
              Save as favorite
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div>
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "description" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "reviews" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Reviews (1)
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-lg p-6">
          {activeTab === "description" ? (
            <div className="space-y-4 text-gray-700">
              <p>
                Our coconuts are sustainably grown, ensuring the best quality and taste. Each coconut is handpicked and
                carefully prepared, offering you the freshest and purest form. Rich in healthy fats, electrolytes, and
                essential nutrients, coconuts provide both hydration and nourishment. Whether you're using the water,
                flesh, or milk, our coconuts bring versatility to your kitchen while supporting healthy living.
              </p>
              <p>
                Perfect for smoothies, desserts, curries and more — let the natural sweetness of the coconut elevate
                your recipes. Enjoy the tropical goodness in its purest form, directly from nature.
              </p>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">No reviews yet</div>
          )}
        </div>
      </div>
    </div>
  )
}
