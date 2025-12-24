import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { useGetProductsQuery } from "../../Api/api";

export default function AllProducts() {
  const { data, error, isLoading } = useGetProductsQuery();

  const handleDelete = (id) => {
    console.log("Delete product:", id);
  };

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;

  const products = data?.data || [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <Link
          to="/admin/products/add"
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
                <th className="text-left p-4 font-semibold text-gray-700">
                  Image
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Name
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Category
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Price
                </th>

                <th className="text-left p-4 font-semibold text-gray-700">
                  Stock
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4">
                    <img
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.productName}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="p-4 font-medium text-gray-800">
                    {product.productName}
                  </td>
                  <td className="p-4 text-gray-600">
                    {product.category.categoryName}
                  </td>
                  <td className="p-4 text-gray-800 font-semibold">
                    ${product.price}/kg
                  </td>

                  <td className="p-4 text-gray-600">{product.stock}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View"
                      >
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
  );
}
