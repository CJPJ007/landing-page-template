import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gray-100 dark:bg-gray-800 shadow-lg p-6 rounded-lg flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              📍 Address: 123 Main Street, Anytown, USA
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              📞 Phone: (123) 456-7890
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              ✉️ Email: support@example.com
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              🌐 Website: <a href="https://example.com" className="text-blue-500 dark:text-blue-400 underline">www.example.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
