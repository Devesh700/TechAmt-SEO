import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Techamt</h3>
          <p className="text-gray-400">
            Techamt is a leading IT solutions provider, specializing in web development, mobile app development, and eCommerce platforms. Our expert team delivers innovative solutions to help businesses thrive in the digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link href="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/about" className="hover:text-blue-400">About Us</Link>
            </li>
            <li className="mb-2">
              <Link href="/careers" className="hover:text-blue-400">Careers</Link>
            </li>
            <li className="mb-2">
              <Link href="/blog" className="hover:text-blue-400">Blogs</Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:info@techamt.com" className="hover:text-blue-400">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              className="p-2 rounded-lg text-black"
              placeholder="Enter your email"
              required
            />
            <button className="bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Techamt. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
