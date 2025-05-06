import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">SkincareEdu</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/scanner" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                Scanner
              </Link>
              <Link href="/dashboard" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/classes" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                Classes
              </Link>
              <Link href="/community" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                Community
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/login" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary ml-4">
              Sign Up
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/scanner" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-primary text-base font-medium">
            Scanner
          </Link>
          <Link href="/dashboard" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-primary text-base font-medium">
            Dashboard
          </Link>
          <Link href="/classes" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-primary text-base font-medium">
            Classes
          </Link>
          <Link href="/community" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-primary text-base font-medium">
            Community
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <Link href="/login" className="block text-base font-medium text-gray-800 hover:text-primary">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary ml-4">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 