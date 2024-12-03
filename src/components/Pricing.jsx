import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$19/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Pro Plan",
      price: "$49/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Enterprise Plan",
      price: "$99/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
