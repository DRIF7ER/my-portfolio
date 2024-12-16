import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-sky-700 fixed top-0 left-0 w-full shadow-md z-50" role="navigation" aria-label="Main Navigation">
      <div className="container-standard  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center group">
            <a
              href="#home"
              className="relative text-3xl font-bold text-white font-lobster transition-transform transform hover:scale-110 hover:text-orange-300"
            >
            Jim Macur
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#home" className="text-white hover:text-black" aria-label="Go to Home section">
              Home
            </a>
            <a href="#aboutMe" className="text-white hover:text-black" aria-label="Go to About Me section">
              About Me
            </a>
            <a href="#projects" className="text-white hover:text-black" aria-label="Go to Projects section">
              Projects
            </a>
            <a href="#skills" className="text-white hover:text-black" aria-label="Go to Skills section">
              Skills
            </a>
            <a href="#education" className="text-white hover:text-black" aria-label="Go to Education section">
              Education
            </a>
            <a href="#contact" className="text-white hover:text-black" aria-label="Go to Contact section">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;