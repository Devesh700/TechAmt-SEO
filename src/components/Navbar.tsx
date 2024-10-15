import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link'; // To use internal navigation
import { FaHome, FaInfoCircle, FaBriefcase, FaBlog, FaPhoneAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)},[]);

  return (
    <nav
      className={`${
        isSticky ? 'bg-primary' : 'bg-primary'
      } transition-all duration-300 ease-in-out fixed top-0 w-full z-50 p-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">
          <Link href="/">Techamt</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-semibold">
          <li className="flex items-center">
            <FaHome className="mr-2" />
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center">
            <FaInfoCircle className="mr-2" />
            <Link href="/about">About Us</Link>
          </li>
          <li className="flex items-center">
            <FaBriefcase className="mr-2" />
            <Link href="/careers">Careers</Link>
          </li>
          <li className="flex items-center">
            <FaBlog className="mr-2" />
            <Link href="/blog">Blogs</Link>
          </li>
          <li className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-primary text-white flex flex-col items-center md:hidden">
            <li className="py-2 w-full text-center border-b border-gray-700">
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="py-2 w-full text-center border-b border-gray-700">
              <Link href="/about" onClick={toggleMenu}>About Us</Link>
            </li>
            <li className="py-2 w-full text-center border-b border-gray-700">
              <Link href="/careers" onClick={toggleMenu}>Careers</Link>
            </li>
            <li className="py-2 w-full text-center border-b border-gray-700">
              <Link href="/blog" onClick={toggleMenu}>Blogs</Link>
            </li>
            <li className="py-2 w-full text-center">
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
