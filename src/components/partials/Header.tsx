import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-white cursor-pointer underline decoration-orange-500">Wifi Vendo Docx</h1>
        </Link>

        <nav className="flex">
          <ul className="ml-auto flex">
          <li className="mr-6">
                <Link href="/" className="text-gray-300 hover:text-white hover:underline decoration-orange-500 decoration-2">
                Home
                </Link>
            </li>
            <li className="mr-6">
                <Link href="/iso" className="text-gray-300 hover:text-white hover:underline decoration-orange-500 decoration-2">
                ISO
                </Link>
            </li>
            <li className="mr-6">
                <Link href="/flasher" className="text-gray-300 hover:text-white hover:underline decoration-orange-500 decoration-2">
                Flasher
                </Link>
            </li>
            <li className="mr-6">
                <Link href="/tutorial" className="text-gray-300 hover:text-white hover:underline decoration-orange-500 decoration-2">
                Tutorial
                </Link>
            </li>
            <li className="mr-6">
              <Link href="/contact" className="text-gray-300 hover:text-white hover:underline decoration-orange-500 decoration-2">
                Contact
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about" className="text-gray-300 hover:text-white hover:underline decoration-orange-500 decoration-2">
                About
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;