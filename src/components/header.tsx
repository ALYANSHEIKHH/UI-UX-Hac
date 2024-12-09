"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={160}
          height={40}
          className="w-20 h-auto sm:w-28 md:w-36 lg:w-40 xl:w-48"        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-gray-800">
        <Link href={"/"} className="hover:text-gray-500 transition">
          Home
        </Link>
        <Link href={"/shop"} className="hover:text-gray-500 transition">
          Shop
        </Link>
        <Link href={"/Blog"} className="hover:text-gray-500 transition">
          Blog
        </Link>
        <Link href={"/contact"} className="hover:text-gray-500 transition">
          Contact
        </Link>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center space-x-4">
        <Image
          src={"/images/contact-icon.svg"}
          alt="contact"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        <Image
          src={"/images/search-icon.svg"}
          alt="search"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        <Link href={"/asgaard-sofa"}>
          <Image
            src={"/images/heart-icon.svg"}
            alt="favorites"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </Link>
        <Link href={"/cart"}>
          <Image
            src={"/images/cart-icon.svg"}
            alt="cart"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </Link>
      </div>

      {/* Mobile Icons and Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <Image
          src={"/images/contact-icon.svg"}
          alt="contact"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        <Image
          src={"/images/search-icon.svg"}
          alt="search"
          width={24}
          height={24}
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        <Link href={"/asgaard-sofa"}>
          <Image
            src={"/images/heart-icon.svg"}
            alt="favorites"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </Link>
        <Link href={"/cart"}>
          <Image
            src={"/images/cart-icon.svg"}
            alt="cart"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </Link>
        <button
          aria-label="Toggle menu"
          className="text-gray-800 focus:outline-none hover:text-gray-500"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4">
          <Link href={"/"} className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link href={"/shop"} className="hover:text-gray-500 transition">
            Shop
          </Link>
          <Link href={"/Blog"} className="hover:text-gray-500 transition">
            Blog
          </Link>
          <Link href={"/contact"} className="hover:text-gray-500 transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
