import offer from "../../assets/images/offer.png";
import { useState, useEffect } from "react";

export default function Offer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set offer end time to 4 weeks from now
    const offerEndTime = new Date();
    offerEndTime.setDate(offerEndTime.getDate() + 28);
    offerEndTime.setHours(23, 59, 59, 999);

    const updateTimer = () => {
      const now = new Date();
      const difference = offerEndTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-gray-50 to-white"   style={{
            backgroundImage: `url(${offer})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            {/* Special Offer Label */}
            <div className="inline-block mb-6">
              <span className="text-primary bg-primary/10 px-4 py-1 rounded-lg font-medium text-sm w-fit">
                Special Offer
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-medium text-gray-900 mb-4 leading-tight">
              Seasonal Fruit Bundle
            </h1>

            {/* Discount Text */}
            <p className="text-3xl xl:text-4xl mb-8 font-medium">
              Discount up to <span className="text-orange-500 ">80% OFF</span>
            </p>

            {/* Countdown Timer */}
            <div className="flex gap-4 mb-8">
              {/* Days */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 min-w-max shadow-sm">
                <p className="text-3xl text-gray-900">
                  {String(timeLeft.days).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-500 mt-1">Days</p>
              </div>

              {/* Hours */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 min-w-max shadow-sm">
                <p className="text-3xl text-gray-900">
                  {String(timeLeft.hours).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-500 mt-1">Hour</p>
              </div>

              {/* Minutes */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 min-w-max shadow-sm">
                <p className="text-3xl text-gray-900">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-500 mt-1">Min</p>
              </div>

              {/* Seconds */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 min-w-max shadow-sm">
                <p className="text-3xl text-gray-900">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-500 mt-1">Second</p>
              </div>
            </div>

            {/* Code Button */}
            <div className="bg-green p-2 text-2xl rounded-full text-white text-center mt-3 w-fit px-4 font-medium">
              CODE : <span className="text-[#FAC714]">FRESH25</span>{" "}
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
