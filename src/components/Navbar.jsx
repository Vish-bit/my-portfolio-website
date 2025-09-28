import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-dark w-full z-50">
      <h1 className="text-2xl font-bold text-primary">⟡</h1>
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
            Lab
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
