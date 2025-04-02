"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <footer className="container py-6 md:py-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={100} height={100} />

        {/* Navigation Links */}
        <div className="space-x-8 mt-6 md:mt-0">
          {[
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Pricing", path: "/pricing" },
            { name: "Contact", path: "/contact" }
          ].map(({ name, path }) => (
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
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-0">
          <p>© 2025 Rubiamagic</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
