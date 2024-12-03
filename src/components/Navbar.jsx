import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">YourLogo</div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="/" className="hover:text-blue-400">Features</a></li>
          <li><a href="/" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="/" className="hover:text-blue-400">Contact</a></li>
        </ul>
        <div className="flex space-x-4 items-center">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
