import about from '../../assets/images/about.png';

export default function About() {
  return (
    <section className=" px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image placeholder */}
          <div className="flex items-center justify-center">
            <img src={about} alt="" />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            {/* Label */}
           <span className="text-primary bg-primary/10 px-4 py-1 rounded-lg font-medium text-sm w-fit">
           About us
          </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 mt-6">
              About Fresh Harvest
            </h2>

            {/* Descriptive text */}
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              We pride ourselves on offering a wide variety of fresh and
              flavorful fruits, vegetables, and salad ingredients. Our
              commitment to quality ensures that every product is handpicked and
              delivered fresh to your doorstep. We believe in sustainable
              farming practices and supporting local farmers to bring you the
              best nature has to offer.
            </p>

            {/* Read More Button */}
            <div>
              <button className="px-8 py-3 text-orange-500 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Read More
              </button>
            </div>

            {/* Decorative leaf */}
            <div className="absolute top-20 right-20 text-green-300 opacity-50">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.92 7.02C17.45 4.18 14.97 2 12 2c-2.97 0-5.45 2.18-5.92 5.02C4.97 7.55 3 9.72 3 12.25c0 3.04 2.46 5.5 5.5 5.5h9c3.04 0 5.5-2.46 5.5-5.5 0-2.53-1.97-4.7-4.58-5.23z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
