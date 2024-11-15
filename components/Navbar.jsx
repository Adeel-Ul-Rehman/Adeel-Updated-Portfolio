"use client"
import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-[#00308F] p-4 flex items-center justify-between text-white relative z-10">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/Home">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Navigation Links for Desktop */}
      <ul className="hidden md:flex space-x-20">
      <div className="hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
        <Link href="/Education">𝑬𝑫𝑼𝑪𝑨𝑻𝑰𝑶𝑵</Link>
      </div>
      <div className="hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
        <Link href="/Skills">𝑺𝑲𝑰𝑳𝑳𝑺</Link>
      </div>
      <div className="hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
        <Link href="/Project">𝑷𝑹𝑶𝑱𝑬𝑪𝑻𝑺</Link>
      </div>
      <div className="hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
        <Link href="/Contact">𝑪𝑶𝑵𝑻𝑨𝑪𝑻</Link>
      </div>
      <div className="hover:transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
        <Link href="/About">𝑨𝑩𝑶𝑼𝑻</Link>
      </div>
    </ul>
      {/* Dark Mode Toggle for Desktop */}
      <button onClick={toggleDarkMode} className="ml-4 hidden md:block transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Dark Mode Toggle for Mobile */}
      <button onClick={toggleDarkMode} className="ml-60 md:hidden transform hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden ml-2 rounded-full border-2 border-white p-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
        <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
        <span className="block w-6 h-0.5 bg-white rounded"></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 right-0 w-48 bg-[#00308F] shadow-lg z-50">
          <div className="flex flex-col text-center items-center">
            <Link href="/Education" className="py-2 w-full border-b border-white rounded-t-lg">𝑬𝑫𝑼𝑪𝑨𝑻𝑰𝑶𝑵</Link>
            <Link href="/Skills" className="py-2 w-full border-b border-white">𝑺𝑲𝑰𝑳𝑳𝑺</Link>
            <Link href="/Project" className="py-2 w-full border-b border-white">𝑷𝑹𝑶𝑱𝑬𝑪𝑻𝑺</Link>
            <Link href="/Contact" className="py-2 w-full border-b border-white">𝑪𝑶𝑵𝑻𝑨𝑪𝑻</Link>
            <Link href="/About" className="py-2 w-full rounded-b-lg">𝑨𝑩𝑶𝑼𝑻</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
