"use client"

import React, { useState } from 'react';
import Link from 'next/link'; // This is specific to Next.js, for regular React, use <a> instead.
import Title from '../ui/Title';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
      <nav className="bg-yellow-50 shadow-md">
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-between gap-5 w-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center ">
              <Link href="/" className="text-2xl font-bold text-gray-800"><Title/></Link>
            </div>
            {/* Links */}
            <div className="hidden sm:ml-6 sm:flex items-center gap-4">
              <Link href="/" className="text-gray-800  hover:text-yellow-600 mr-5 py-2 rounded-md text-sm font-medium group relative">
                  <span>Home</span>
                  <span className='group-hover:w-full w-0 transition-all  bottom-0 left-0 absolute h-1 bg-yellow-600'></span>
              </Link>
              <Link href="/#features" className="text-gray-800 hover:text-yellow-600 mr-5 py-2 rounded-md text-sm font-medium group relative">
                  <span>
                  Features
                  </span>
                  <span className='group-hover:w-full w-0 transition-all  bottom-0 left-0 absolute h-1 bg-yellow-600'></span>
              </Link>
              <Link href="/#about" className="text-gray-800 hover:text-yellow-600 mr-5 py-2 rounded-md text-sm font-medium group relative">
                  <span>
                  About
                  </span>
                  <span className='group-hover:w-full w-0 transition-all  bottom-0 left-0 absolute h-1 bg-yellow-600'></span>
              </Link>
              <Link href="/#contact" className="text-gray-800 hover:text-yellow-600 mr-5 py-2 rounded-md text-sm font-medium group relative">
                  <span>Contact</span>
                  <span className='group-hover:w-full w-0 transition-all  bottom-0 left-0 absolute h-1 bg-yellow-600'></span>
              </Link>
              <Link href="/login" className="aboslute right-0 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Login
          </Link>
            </div>
            
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-yellow-600 hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={!isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-200 ">
              Home
          </Link>
          <Link href="/#features" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-200 ">
              Features
          </Link>
          <Link href="/#about" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-200 ">
              About
          </Link>
          <Link href="/#contact" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-200 ">
              Contact
          </Link>
          <Link href="/privacy&policy" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-200 ">
          Privacy Policy
          </Link>
          <Link href="/login" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 hover:text-white ">
              Login
          </Link>
        </div>
      </div>
    </nav>)
  }

export default Navbar;
