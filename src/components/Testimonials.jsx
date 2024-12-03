import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This product has transformed the way we do business. It's intuitive, powerful, and a game-changer!",
      name: "John Doe",
      position: "CEO, TechCorp",
    },
    {
      quote:
        "I can't imagine working without it anymore. Absolutely the best investment we've made.",
      name: "Jane Smith",
      position: "Marketing Head, Marketify",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg"
            >
              <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
