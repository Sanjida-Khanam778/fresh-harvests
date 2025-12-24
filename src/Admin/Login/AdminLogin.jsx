"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", email)
    router.push("/admin/products")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">FH</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Sign in to your admin account</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@freshharvests.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">Fresh Harvests Admin Panel</p>
      </div>
    </div>
  )
}
