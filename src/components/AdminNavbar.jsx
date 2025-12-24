import { Bell, Search, User } from "lucide-react";

export default function AdminNavbar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white shadow-sm z-10 flex items-center justify-end px-6">
     

      <div className="flex items-center space-x-4">
     

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className=" font-medium text-gray-700">Admin</span>
        </div>
      </div>
    </header>
  );
}
