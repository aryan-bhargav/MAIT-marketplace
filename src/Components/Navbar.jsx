import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md border-b border-gray-800" role="navigation">
      {/* Logo */}
      <div className="text-orange-500 text-2xl font-bold">
        <Link to="/">MAIT Marketplace</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 text-gray-300">
        <Link to="/" className={isActive('/') ? 'text-blue-500' : 'hover:text-blue-500'}>Home</Link>
        <Link to="/browse" className={isActive('/browse') ? 'text-blue-500' : 'hover:text-blue-500'}>Browse</Link>
        <Link to="/sell" className={isActive('/sell') ? 'text-blue-500' : 'hover:text-blue-500'}>Sell</Link>
        <Link to="/about" className={isActive('/about') ? 'text-blue-500' : 'hover:text-blue-500'}>About</Link>
        <Link to="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
            Signup
          </button>
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden text-white">
        <button onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-black border-t border-gray-800 shadow-md flex flex-col items-center space-y-4 py-6 md:hidden text-gray-300 z-40">
          <Link to="/" onClick={toggleMenu} className={isActive('/') ? 'text-blue-500' : 'hover:text-blue-500'}>Home</Link>
          <Link to="/browse" onClick={toggleMenu} className={isActive('/browse') ? 'text-blue-500' : 'hover:text-blue-500'}>Browse</Link>
          <Link to="/sell" onClick={toggleMenu} className={isActive('/sell') ? 'text-blue-500' : 'hover:text-blue-500'}>Sell</Link>
          <Link to="/about" onClick={toggleMenu} className={isActive('/about') ? 'text-blue-500' : 'hover:text-blue-500'}>About</Link>
          <Link to="/login" onClick={toggleMenu}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </Link>
          <Link to="/signup" onClick={toggleMenu}>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
              Signup
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
