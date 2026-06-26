"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { TextAlignJustify, X } from 'lucide-react';
import { Button } from '@/ui/button';
import { navLinks } from '@/src/lib/constant';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinkClasses = "text-consult-blue no-underline text-[1.1rem] lg:text-[0.95rem] font-medium transition-colors duration-200 flex items-center justify-start gap-1 cursor-pointer w-full lg:w-auto py-3 lg:py-0 hover:text-blue-600";
  return (
    <header className="flex justify-between    items-center px-8 py-4 bg-white text-consult-blue sticky top-0 z-[1000] font-sans ">
      <Link href="/" className="text-2xl font-bold tracking-[0.5px] no-underline text-consult-blue">
        LOGO
      </Link>
      <button className="block lg:hidden bg-transparent border-none text-consult-blue cursor-pointer p-2" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? (
          <X />
        ) : (
          <TextAlignJustify />
        )}
      </button>
      {/* Backdrop overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-[72px] bg-black/40 z-[998] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={toggleMenu}
        aria-hidden="true"
      />

      <nav className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 fixed lg:static top-[72px] bottom-0 right-0 w-64 lg:w-auto bg-white lg:bg-transparent p-8 lg:p-0 shadow-2xl lg:shadow-none overflow-y-auto lg:overflow-visible transform transition-transform duration-300 ease-in-out z-[999] border-l border-gray-100 lg:border-none ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
        {navLinks.map((link) => 
          link.hasDropdown ? (
            <div key={link.label} className="relative w-full lg:w-auto">
              <span className={navLinkClasses}>
                {link.label}
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </span>
            </div>
          ) : (
            <Link key={link.label} href={link.href} className={navLinkClasses}>
              {link.label}
            </Link>
          )
        )}
        <Button variant='primary' className='rounded-full text-sm capitalize' href='#'>Search</Button>
      </nav>
    </header>
  );
};

export default Header;
