"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 py-4 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center lg:space-x-4 w-full">
        <Link href="/">
          <h1 className="text-3xl font-bold text-white cursor-pointer underline decoration-orange-500">Wifi Vendo Docx</h1>
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:flex absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto bg-gray-800 bg-opacity-95 lg:bg-transparent p-4 lg:p-0 w-full max-h-[80vh] overflow-y-auto z-50`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-lg lg:text-base w-full">
            <li className="mb-4 lg:mb-0">
              <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link href="/iso" className="text-gray-300 hover:text-white">ISO</Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link href="/flasher" className="text-gray-300 hover:text-white">Flasher</Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link href="/tutorial" className="text-gray-300 hover:text-white">Tutorial</Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
