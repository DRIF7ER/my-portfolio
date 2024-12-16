import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-sky-700 fixed top-0 left-0 w-full shadow-md z-50" role="navigation" aria-label="Main Navigation">
      <div className="container-standard max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center group">
            <a
              href="#home"
              className="relative text-2xl md:text-3xl font-bold text-white font-lobster transition-transform transform hover:scale-110 hover:text-orange-300"
            >
              Jim Macur
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-sky-700 md:bg-transparent p-4 md:p-0`}>
            <a href="#home" className="block md:inline-block text-white hover:text-black py-2 md:py-0" aria-label="Go to Home section">
              Home
            </a>
            <a href="#aboutMe" className="block md:inline-block text-white hover:text-black py-2 md:py-0" aria-label="Go to About Me section">
              About Me
            </a>
            <a href="#projects" className="block md:inline-block text-white hover:text-black py-2 md:py-0" aria-label="Go to Projects section">
              Projects
            </a>
            <a href="#skills" className="block md:inline-block text-white hover:text-black py-2 md:py-0" aria-label="Go to Skills section">
              Skills
            </a>
            <a href="#education" className="block md:inline-block text-white hover:text-black py-2 md:py-0" aria-label="Go to Education section">
              Education
            </a>
            <a href="#contact" className="block md:inline-block text-white hover:text-black py-2 md:py-0" aria-label="Go to Contact section">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;