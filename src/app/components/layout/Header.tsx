"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../core/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="container py-6 relative">
      <div className="flex py-2 justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`font-semibold ${
                pathname === path ? "text-brand-saturated" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button link="/contact">Book a Free Consultation</Button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 bg-transparent border-none focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4 transition-all duration-300 md:hidden 
        ${isOpen ? "top-[70px] opacity-100 translate-y-0" : "top-[100px] opacity-0 -translate-y-6 pointer-events-none"}`}
      >
        {navLinks.map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            className={`font-semibold ${
              pathname === path ? "text-brand-saturated" : ""
            }`}
            onClick={toggleMenu}
          >
            {name}
          </Link>
        ))}

        {/* CTA Button (Mobile) */}
        <Button onClick={toggleMenu}>Book a Free Consultation</Button>
      </div>
    </header>
  );
};

export default Header;
