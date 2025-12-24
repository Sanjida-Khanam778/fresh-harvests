"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Edit, Trash2, Eye } from "lucide-react"

export default function AllProducts() {
  const [products] = useState([
    {
      id: 1,
      name: "Coconut",
      category: "Fruits",
      price: 6.3,
      rating: 5.0,
      reviews: 1,
      stock: 50,
      image: "/coconut-1.jpg",
    },
    {
      id: 2,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 4.5,
      rating: 4.8,
      reviews: 15,
      stock: 120,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Organic Broccoli",
      category: "Vegetables",
      price: 3.2,
      rating: 4.9,
      reviews: 8,
      stock: 80,
      image: "/placeholder.svg?height=50&width=50",
    },
  ])

  const handleDelete = (id) => {
    console.log("Delete product:", id)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <Link
          href="/admin/products/add"
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">Image</th>
                <th className="text-left p-4 font-semibold text-gray-700">Name</th>
                <th className="text-left p-4 font-semibold text-gray-700">Category</th>
                <th className="text-left p-4 font-semibold text-gray-700">Price</th>
                <th className="text-left p-4 font-semibold text-gray-700">Rating</th>
                <th className="text-left p-4 font-semibold text-gray-700">Stock</th>
                <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="p-4 font-medium text-gray-800">{product.name}</td>
                  <td className="p-4 text-gray-600">{product.category}</td>
                  <td className="p-4 text-gray-800 font-semibold">${product.price}/kg</td>
                  <td className="p-4 text-gray-600">
                    {product.rating} ({product.reviews})
                  </td>
                  <td className="p-4 text-gray-600">{product.stock}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
