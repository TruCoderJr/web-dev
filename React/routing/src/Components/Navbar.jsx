import React, { useState } from 'react';

const Navbar = ({ count }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const favouriteCount = Array.isArray(count) 
    ? count.filter((data) => data.favourite).length 
    : 0; // Safe check in case `count` is not an array

  return (
    <nav className="bg-gray-800 text-white p-4 static">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">VibeBox</a>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6">
          <button className='px-4 py-2 mt-4 text-white text-sm font-semibold rounded bg-red-600'>
            Favourites 
            <span className='ml-2 bg-gray-400 bg-opacity-50 text-white px-2 py-1 rounded-full'>
              {favouriteCount}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4 space-y-4">
          <a href="/" className="block text-lg hover:text-gray-400">Home</a>
          <a href="/about" className="block text-lg hover:text-gray-400">About</a>
          <a href="/services" className="block text-lg hover:text-gray-400">Services</a>
          <a href="/contact" className="block text-lg hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
