import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-sky-500 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Jim Macur</h1>
          </div>
          <div className="flex space-x-4">
            <a href="#home" className="text-white hover:text-blue-700">Home</a>
            <a href="#projects" className="text-white hover:text-blue-700">Projects</a>
            <a href="#skills" className="text-white hover:text-blue-700">Skills</a>
            <a href="#experience" className="text-white hover:text-blue-700">Experience</a>
            <a href="#contact" className="text-white hover:text-blue-700">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;