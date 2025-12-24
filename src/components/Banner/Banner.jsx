import { useState } from "react";
import banner from "../../assets/images/banner.png";
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import meal from "../../assets/images/meal.png";
import arrow from "../../assets/images/arrow.png";
import off from "../../assets/images/off.png";

import Navbar from "../Navbar/Navbar";
const Banner = () => {
  const [activeNav, setActiveNav] = useState("Home");
  return (
    <section
      className="relative w-full px-6 bg-gradient-to-br from-gray-50 to-white"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          {/* Small Label */}
          <span className="text-primary bg-primary/10 px-4 py-1 rounded-lg font-medium text-sm w-fit">
            Welcome to Fresh Harvest
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-medium text-[#212337] lg:leading-tight">
            Fresh Fruits and Vegetables
          </h1>

          {/* Description */}
          <p className="text-[#4A4A52] text-base leading-relaxed font-medium mb-4">
            At Fresh Harvests, we are passionate about providing you with the
            freshest <br /> and most flavorful fruits and vegetables
          </p>

          {/* Shop Now Button */}
          <div className="flex items-center gap-4">
            <button className="bg-orange-500  hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Shop Now
            </button>
          </div>
          <div className="flex">
            <div className="pl-24 pr-8 pt-3 hidden sm:block">
              <img src={arrow} alt="" />
            </div>
            <div className="bg-[#EBEBEB] rounded-xl flex p-6 gap-6 font-medium">
              <div className="">
                <p className="text-green">Special Offer</p>
                <p className="font-medium text-[28px]">Fresh Salad</p>
               <div className="flex items-center gap-2"> <span className="text-green text-lg">Up to</span>
                <img src={off} alt="" /></div>
              <div className="bg-green p-2 rounded-full text-white text-center mt-3">CODE : <span className="text-[#FAC714]">FRESH25</span> </div>
              </div>
              <img src={meal} alt="" />
            </div>
          </div>

          {/* App Store Badges */}
          <div className="mt-8 mb-40">
            <p className="text-[#4A4A52] font-questrial">Download App:</p>
            <div className="flex items-center gap-3 mt-4">
              <img src={appstore} alt="" />
              <img src={googleplay} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
