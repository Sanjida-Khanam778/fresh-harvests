import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "../../assets/images/logo.png";
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import one from "../../assets/images/one.png";
import pay from "../../assets/images/pay.png";
import apple from "../../assets/images/apple.png";
import first from "../../assets/images/1.png";
import second from "../../assets/images/2.png";
import third from "../../assets/images/3.png";

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F6]">
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Download Section */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-6">
              {/* Logo placeholder - replace with your logo */}
              <img src={logo} className="h-10" alt="" />
              <span className="text-2xl font-medium text-gray-900">
                Fresh Harvests
              </span>
            </div>

            {/* App Store Badges */}
            <div className="mt-8">
              <p className="text-[#4A4A52] font-questrial">Download App:</p>
              <div className="flex items-center gap-3 mt-4">
                <img src={appstore} alt="" />
                <img src={googleplay} alt="" />
              </div>
            </div>
          </div>

          {/* Quick links 1 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick links 1
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  Detail Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links 2 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick links 2
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  Favorites
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Contact us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-primary" />
                <span>1234 5678 90</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-primary" />
                <span>FreshHarvests@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Tanjung Sari Street, Pontianak, Indonesia</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Accepted Payment Methods:
              </h4>
              <div className="flex items-center gap-3">
                <img
                  src={one}
                  alt="one"
              
                  className=" w-auto"
                />
                <img
                  src={pay}
                  alt="pay"
              
                  className=" w-auto"
                />
                <img
                  src={apple}
                  alt="Apple Pay"
              
                  className=" w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[#D9D9D9] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © Copyright 2024, All Rights Reserved by Banana Studio
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className=" rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors"
            >
            <img src={first} alt="" />
            </a>
            <a
              href="#"
              className="rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
            <img src={second} alt="" />
            </a>
            <a
              href="#"
              className="rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
            <img src={third} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
