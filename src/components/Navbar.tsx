import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-sky-500 shadow-md z-50" role="navigation" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Jim Macur</h1>
          </div>
          <div className="flex space-x-4">
            <a href="#home" className="text-white hover:text-blue-700" aria-label="Go to Home section">
              Home
            </a>
            <a href="#projects" className="text-white hover:text-blue-700" aria-label="Go to Projects section">
              Projects
            </a>
            <a href="#skills" className="text-white hover:text-blue-700" aria-label="Go to Skills section">
              Skills
            </a>
            <a href="#education" className="text-white hover:text-blue-700" aria-label="Go to Education section">
              Education
            </a>
            <a href="#aboutMe" className="text-white hover:text-blue-700" aria-label="Go to About Me section">
              About Me
            </a>
            <a href="#contact" className="text-white hover:text-blue-700" aria-label="Go to Contact section">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;