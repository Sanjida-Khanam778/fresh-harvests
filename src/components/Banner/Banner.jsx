import { useState } from "react"
import banner from "../../assets/images/banner.png"
import Navbar from "../Navbar/Navbar"
const Banner = () => {
    const [activeNav, setActiveNav] = useState("Home")
    return (
        <section className="relative w-full px-6 bg-gradient-to-br from-gray-50 to-white" style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
            <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
                {/* Left Content */}
                <div className="flex flex-col gap-6">
                    {/* Small Label */}
                    <div className="text-primary bg-primary/10 px-4 py-1 rounded-lg font-semibold text-sm ">Welcome to Fresh Harvest</div>

                    {/* Main Heading */}
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Fresh Fruits and Vegetables</h1>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed max-w-md">
                        Discover the freshest, highest-quality vegetables and fruit available online. Straight from the farm to your
                        doorstep.
                    </p>

                    {/* Shop Now Button */}
                    <div className="flex items-center gap-4">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            Shop Now
                        </button>
                    </div>

                    {/* App Store Badges */}
                    <div className="flex items-center gap-3 mt-4">
                        <div className="w-32 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-gray-900 transition-colors">
                            📱 App Store
                        </div>
                        <div className="w-32 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-gray-900 transition-colors">
                            🔍 Google Play
                        </div>
                    </div>
                </div>

                {/* Right Side - Image Placeholder & Special Offer */}
                <div className="relative flex flex-col items-center gap-6">
                    {/* Background Placeholder */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-100 to-green-50 rounded-2xl -z-10 opacity-30"></div>



                </div>
            </div>


        </section>
    )
}

export default Banner
