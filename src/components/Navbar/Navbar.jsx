import logo from "../../assets/images/navlogo.png";
import { useState } from "react";
const Navbar = ({ activeNav, setActiveNav }) => {
  const navItems = ["Home", "Shop", "About Us", "Blog"];
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleNavClick = (item) => {
    setActiveNav(item);
  };

  return (
    <nav className="py-8 z-50">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="h-8" alt="" />
        </div>

        {/* Center Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`relative font-medium text-sm transition-colors hover:text-primary pb-1 ${
                activeNav === item
                  ? "text-green-500"
                  : "text-gray-700 hover:text-green-500"
              }`}
            >
              {item}
              {activeNav === item && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-[3px] bg-primary"></span>
              )}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="text-gray-700 text-sm font-medium hover:text-green-500 transition-colors">
            ❤️ Favorites
          </button>
          <button className="text-gray-700 text-sm font-medium hover:text-green-500 transition-colors">
            🛒 Cart
          </button>
          <button
            className="border border-white text-white px-6 py-2 rounded-md  text-sm font-medium transition-colors"
            onClick={() => setSignInOpen(true)}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Sign In Modal */}
      {signInOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60"
          onClick={() => setSignInOpen(false)}
        >
          <div
            className="relative bg-white p-8 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSignInOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white p-2 rounded font-semibold"
              >
                Sign In
              </button>
            </form>
            <p className="mt-4 text-center text-sm">
              Don't have an account?
              <button
                onClick={() => {
                  setSignInOpen(false);
                  setSignUpOpen(true);
                }}
                className="text-primary ml-1 font-semibold"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {signUpOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60"
          onClick={() => setSignUpOpen(false)}
        >
          <div
            className="relative bg-white p-8 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSignUpOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white p-2 rounded font-semibold"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center text-sm">
              Already have an account?
              <button
                onClick={() => {
                  setSignUpOpen(false);
                  setSignInOpen(true);
                }}
                className="text-primary ml-1 font-semibold"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
