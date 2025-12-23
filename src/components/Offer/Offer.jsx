"use client"

import { useState, useEffect } from "react"

export default function Offer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set offer end time to 4 weeks from now
    const offerEndTime = new Date()
    offerEndTime.setDate(offerEndTime.getDate() + 28)
    offerEndTime.setHours(23, 59, 59, 999)

    const updateTimer = () => {
      const now = new Date()
      const difference = offerEndTime - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            {/* Special Offer Label */}
            <div className="inline-block mb-6">
              <span className="text-green-600 text-sm font-semibold bg-green-50 px-4 py-2 rounded-full">
                Special Offer
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Seasonal Fruit Bundle</h1>

            {/* Discount Text */}
            <p className="text-lg text-gray-700 mb-8">
              Discount up to <span className="text-orange-500 font-bold text-2xl">80% OFF</span>
            </p>

            {/* Countdown Timer */}
            <div className="flex gap-4 mb-8">
              {/* Days */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 min-w-max shadow-sm">
                <p className="text-2xl font-bold text-gray-900">{String(timeLeft.days).padStart(2, "0")}</p>
                <p className="text-xs text-gray-500 mt-1">Days</p>
              </div>

              {/* Hours */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 min-w-max shadow-sm">
                <p className="text-2xl font-bold text-gray-900">{String(timeLeft.hours).padStart(2, "0")}</p>
                <p className="text-xs text-gray-500 mt-1">Hour</p>
              </div>

              {/* Minutes */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 min-w-max shadow-sm">
                <p className="text-2xl font-bold text-gray-900">{String(timeLeft.minutes).padStart(2, "0")}</p>
                <p className="text-xs text-gray-500 mt-1">Min</p>
              </div>

              {/* Seconds */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 min-w-max shadow-sm">
                <p className="text-2xl font-bold text-gray-900">{String(timeLeft.seconds).padStart(2, "0")}</p>
                <p className="text-xs text-gray-500 mt-1">Second</p>
              </div>
            </div>

            {/* Code Button */}
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2">
              CODE : <span className="text-white">FRESH28</span>
            </button>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-square bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-center">Your fruit bundle image here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
