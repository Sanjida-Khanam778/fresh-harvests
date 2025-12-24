import AdminSidebar from "@/components/admin-sidebar"
import AdminNavbar from "@/components/admin-navbar"

export default function AdminLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminSidebar />
      <AdminNavbar />
      <main className="ml-64 pt-16">
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
