import logo from "../../assets/images/logo.png"
const Navbar = ({ activeNav, setActiveNav }) => {
  const navItems = ["Home", "Shop", "About Us", "Blog"]

  const handleNavClick = (item) => {
    setActiveNav(item)
  }

  return (
    <nav className="py-8 sticky top-0 z-50">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="h-8" alt="" />
          <span className="text-xl font-bold text-gray-800">Fresh Harvests</span>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="relative text-gray-700 font-medium text-sm hover:text-green-500 transition-colors pb-1"
            >
              {item}
              {activeNav === item && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-green-500"></span>
              )}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="text-gray-700 text-sm font-medium hover:text-green-500 transition-colors">
            ❤️ Favorites
          </button>
          <button className="text-gray-700 text-sm font-medium hover:text-green-500 transition-colors">🛒 Cart</button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
