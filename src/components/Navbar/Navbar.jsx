import { Eye, EyeOff, X, Loader2, Menu } from "lucide-react";
import logo from "../../assets/images/navlogo.png";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../Api/api";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../Stores/authSlice";
import toast from "react-hot-toast";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
const Navbar = ({ activeNav, setActiveNav }) => {
  const location = useLocation();
  const navItems = ["Home", "Shop", "About Us", "Blog"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginMutation, { isLoading: loginLoading }] = useLoginMutation();
  const [registerUser, { isLoading: registerLoading }] = useRegisterMutation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveNav("Home");
    } else if (location.pathname === "/shop") {
      setActiveNav("Shop");
    } else if (location.pathname.startsWith("/product/")) {
      // For product details, maybe don't set active nav, or set to Shop
      setActiveNav("Shop");
    }
    // Add more conditions for other routes if needed
  }, [location.pathname, setActiveNav]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      const result = await registerUser(data).unwrap();
      if (result.success) {
        toast.success(result.message);
        setSignUpOpen(false);
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("Error: " + (error.data?.message || error.message));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const result = await loginMutation(data).unwrap();
      if (result.success) {
        dispatch(login({ token: result.data.token, user: result.data }));
        toast.success(result.message);
        setSignInOpen(false);
        if (data.email === "admin@gmail.com" || result.data.role === "admin") {
          navigate("/admin/products");
        }
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error("Error: " + (error.data?.message || error.message));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const handleNavClick = (item) => {
    setActiveNav(item);
    if (item === "Home") {
      navigate("/");
    } else if (item === "Shop") {
      navigate("/shop");
    } else if (item === "About Us") {
      navigate("/about");
    } else if (item === "Blog") {
      navigate("/blog");
    }
  };

  return (
    <nav className="py-8 z-50">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={logo} className="h-8" alt="" />
        </div>
      </Link>
        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
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
          <div className="hidden md:flex items-center gap-6">
            <button
              className={`flex ${
                location.pathname === "/" ? "text-white" : "text-primary"
              } items-center gap-2 text-sm font-medium hover:text-green-500 transition-colors`}
            >
              <FaHeart
                className={`${
                  location.pathname === "/" ? "text-white" : "text-primary"
                } text-xl`}
              />{" "}
              Favorites
            </button>
            <button
              className={`flex ${
                location.pathname === "/" ? "text-white" : "text-primary"
              } items-center gap-2 text-sm font-medium hover:text-green-500 transition-colors`}
            >
              <IoMdCart
                className={`${
                  location.pathname === "/" ? "text-white" : "text-primary"
                } text-xl`}
              />{" "}
              Cart
            </button>
            <button
              className={` ${
                location.pathname === "/"
                  ? "border border-white text-white"
                  : "border border-primary text-primary"
              } px-6 py-2 rounded-md  text-sm font-medium transition-colors`}
              onClick={
                isAuthenticated ? handleLogout : () => setSignInOpen(true)
              }
            >
              {isAuthenticated ? "Logout" : "Sign In"}
            </button>
          </div>
          <button className="md:hidden text-gray-700 text-xl">🛒</button>
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-70 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={24} />
            </button>
            <div className="mt-12 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    handleNavClick(item);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 rounded font-medium ${
                    activeNav === item
                      ? "text-green-500 bg-green-50"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
              <hr className="my-4" />
              <button className="block w-full text-left py-2 px-4 text-gray-700">
                ❤️ Favorites
              </button>
              <button className="block w-full text-left py-2 px-4 text-gray-700">
                🛒 Cart
              </button>
              <button
                className="block w-full text-left py-2 px-4 border border-gray-300 rounded mt-4"
                onClick={() => {
                  setMenuOpen(false);
                  if (isAuthenticated) {
                    handleLogout();
                  } else {
                    setSignInOpen(true);
                  }
                }}
              >
                {isAuthenticated ? "Logout" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {signInOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSignInOpen(false)}
        >
          <div
            className="relative bg-white p-8 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSignInOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl text-center mx-auto font-bold mb-6">
              Login
            </h2>
            <form onSubmit={handleLogin}>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded mb-4 mt-2 text-sm focus:outline-none focus:border-[#FF6A1A]"
                required
                name="email"
              />
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showSignInPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded mb-2 mt-2 text-sm focus:outline-none focus:border-[#FF6A1A]"
                  required
                  name="password"
                />
                <button
                  type="button"
                  onClick={() => setShowSignInPassword(!showSignInPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showSignInPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between my-4">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4 text-[#FF6A1A] border-gray-300 rounded focus:ring-[#FF6A1A]"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-[#FF6A1A] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full mt-2 bg-[#FF6A1A] text-white p-2.5 rounded font-semibold hover:bg-[#e55a0a] transition-colors disabled:opacity-50"
              >
                {loginLoading ? (
                  <>
                    <Loader2 className="inline animate-spin mr-2" size={18} />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 mb-4">
                Or sign in with
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path
                      fill="#4285F4"
                      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                    />
                    <path
                      fill="#34A853"
                      d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
                    />
                    <path
                      fill="#EA4335"
                      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Google
                  </span>
                </button>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#1877F2"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Facebook
                  </span>
                </button>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?
              <button
                onClick={() => {
                  setSignInOpen(false);
                  setSignUpOpen(true);
                }}
                className="text-[#FF6A1A] ml-1 font-semibold hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {signUpOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSignUpOpen(false)}
        >
          <div
            className="relative bg-white p-8 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSignUpOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>
            <h2 className="text-2xl text-center font-bold mb-4">Register</h2>
            <form onSubmit={handleRegister}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded mb-4 mt-2"
                required
                name="fullName"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded mb-4 mt-2"
                required
                name="email"
              />
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type={showSignUpPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded mb-4 mt-2"
                  required
                  name="password"
                />
                <button
                  type="button"
                  onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showSignUpPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <button
                type="submit"
                disabled={registerLoading}
                className="w-full bg-[#FF6A1A] text-white p-2 mt-4 rounded font-semibold disabled:opacity-50"
              >
                {registerLoading ? (
                  <>
                    <Loader2 className="inline animate-spin mr-2" size={18} />
                    Registering...
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </form>
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 mb-4">
                Or sign in with
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path
                      fill="#4285F4"
                      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                    />
                    <path
                      fill="#34A853"
                      d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
                    />
                    <path
                      fill="#EA4335"
                      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Google
                  </span>
                </button>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#1877F2"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Facebook
                  </span>
                </button>
              </div>
            </div>
            <p className="mt-4 text-center text-sm">
              Already have an account?
              <button
                onClick={() => {
                  setSignUpOpen(false);
                  setSignInOpen(true);
                }}
                className="text-[#FF6A1A] ml-1 font-semibold"
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
