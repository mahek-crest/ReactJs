// src/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-gray-800 text-lg font-bold">Blogs</div>
          <ul className="flex space-x-4">
            <li className="text-gray-800">Home</li>
            <li className="text-gray-800">About</li>
            <li className="text-gray-800">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
