"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload, X } from "lucide-react"

export default function AddProducts() {
  const router = useRouter()
  const [images, setImages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Product added")
    router.push("/admin/products")
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map((file) => URL.createObjectURL(file))
    setImages([...images, ...newImages])
  }

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Add New Product</h2>
        <p className="text-gray-600 mt-1">Fill in the details to add a new product</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                required
                placeholder="Enter product name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select category</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="dairy">Dairy</option>
                <option value="grains">Grains</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price (per kg)</label>
              <input
                type="number"
                step="0.1"
                required
                placeholder="0.00"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
              <input
                type="number"
                required
                placeholder="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="5.0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Reviews</label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows="4"
              required
              placeholder="Enter product description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            ></textarea>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                id="image-upload"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Click to upload images</p>
                <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 10MB</p>
              </label>
            </div>

            {images.length > 0 && (
              <div className="grid grid-cols-4 gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Product
            </button>
            <button
              type="button"
              onClick={() => router.push("/admin/products")}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
