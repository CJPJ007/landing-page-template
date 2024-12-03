import React from "react";

const Features = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p>Short description of this amazing feature.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p>Short description of this amazing feature.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p>Short description of this amazing feature.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
