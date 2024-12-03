import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-400 dark:text-gray-300 py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/" className="hover:text-blue-400">Privacy Policy</a>
          <a href="/" className="hover:text-blue-400">Terms of Service</a>
          <a href="/" className="hover:text-blue-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
