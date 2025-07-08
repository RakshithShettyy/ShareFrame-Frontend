"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Live Preview", href: "#live-preview" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Get Started", href: "#call-to-action" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo/Brand */}
        <a href="#hero" className="text-2xl font-bold text-primary">
          ShareFrame
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary transition-colors font-medium">
              {link.label}
            </a>
          ))}

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3 ml-6">
            <a
              href="/login"
              className="text-gray-700 hover:text-primary transition-colors font-medium">
              Login
            </a>
            <a
              href="/signup"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <div className="flex flex-col space-y-2 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary py-2 px-2 rounded transition-colors font-medium"
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 mt-4">
              <a
                href="/login"
                className="text-gray-700 hover:text-primary py-2 px-2 rounded transition-colors font-medium"
                onClick={() => setMenuOpen(false)}>
                Login
              </a>
              <a
                href="/signup"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
                onClick={() => setMenuOpen(false)}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
