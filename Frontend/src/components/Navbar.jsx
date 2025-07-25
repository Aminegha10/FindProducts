import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <a
        href="#"
        className="text-gray-600 hover:text-indigo-600 transition-colors"
      >
        Products
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-indigo-600 transition-colors"
      >
        About
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-indigo-600 transition-colors"
      >
        Features
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-indigo-600 transition-colors"
      >
        Reviews
      </a>
    </nav>
  );
};

export default Navbar;
