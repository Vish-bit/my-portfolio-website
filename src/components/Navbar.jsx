import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center sm:justify-between items-center px-10 py-3 backdrop-blur-lg w-full z-50 flex-wrap md:flex-nowrap gap-6 border-b-2 border-gray-700/30">
      <h1 className="text-2xl font-bold text-primary">⟡ Vishakha More</h1>
      <ul className="flex space-x-8 text-lg">
        <li>
          <a href="#home" className="hover:text-primary">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-primary">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
