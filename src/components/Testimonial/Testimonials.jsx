import testimonial from "../../assets/images/testimonials.png";

import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      title: "Professional chef",
      quote:
        "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
      image: "/customer-woman.jpg",
    },
    {
      id: 2,
      name: "John Smith",
      title: "Home cook",
      quote:
        "Exceptional quality and freshness! Every product I've ordered has been premium grade. The delivery is always on time and the packaging ensures everything arrives in perfect condition. I've recommended Fresh Harvest to all my friends and family.",
      image: "/customer-man.jpg",
    },
    {
      id: 3,
      name: "Sarah Wilson",
      title: "Nutrition consultant",
      quote:
        "The best organic produce I've found! Fresh Harvest truly cares about quality and sustainability. Their fruits and vegetables are noticeably fresher than anything at regular stores. Customer service is fantastic and responsive.",
      image: "/customer-woman-smiling.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary bg-primary/10 px-4 py-1 rounded-lg font-medium text-sm w-fit">
            Testimonial
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 my-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—here's what some of our customers
            have to say about their experience with Fresh Harvest:
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Customer Image */}
          <div className="">
            <img src={testimonial} alt="" />
          </div>

          {/* Testimonial Card */}
          <div className="flex-1 bg-gray-100 rounded-xl p-8 md:p-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              "{testimonials[currentIndex].quote}"
            </p>

            <div>
              <p className="font-bold text-gray-900">
                {testimonials[currentIndex].name} -
                <span className="font-normal"> {testimonials[currentIndex].title}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-green"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
