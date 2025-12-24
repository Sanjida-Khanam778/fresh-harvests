import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  PlusCircle,
  LogOut,
} from "lucide-react";
import logo from "../assets/images/navlogo.png";
export default function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
 
    {
      name: "All Products",
      path: "/admin/products",
      icon: Package,
    },
    {
      name: "Add Product",
      path: "/admin/products/add",
      icon: PlusCircle,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: Users,
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10">
      <div className="p-8">
        <img src={logo} alt="" />
      </div>

      <nav className="mt-8">
        <div className="px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 mt-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-green-100 text-green-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <button className="flex items-center w-full px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
