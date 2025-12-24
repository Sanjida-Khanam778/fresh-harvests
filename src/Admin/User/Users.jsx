import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

export default function Users() {
  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Customer",
      status: "Active",
      joinedDate: "May 15, 2024",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Customer",
      status: "Active",
      joinedDate: "Jun 20, 2024",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Admin",
      status: "Active",
      joinedDate: "Jan 10, 2024",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      role: "Customer",
      status: "Inactive",
      joinedDate: "Mar 5, 2024",
    },
  ]);

  const handleDelete = (id) => {
    console.log("Delete user:", id);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Users</h2>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">
                  Name
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Email
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Role
                </th>
            
                <th className="text-left p-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 font-medium text-gray-800">{user.name}</td>
                  <td className="p-4 text-gray-600">{user.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.role === "Admin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                 
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
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
