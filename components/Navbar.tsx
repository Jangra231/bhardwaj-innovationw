"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Lucide from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const normalizedRoute = pathname.replace(/^\//, "").split("/")[0] || "home";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Software", href: "/software" },
    { label: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setProductsDropdown(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg transition-all duration-300 ${
      isScrolled ? "py-0" : "py-0"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" onClick={handleLinkClick} className="cursor-pointer">
          <Logo light={true} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const linkRoute = link.href === "/" ? "home" : link.href.replace(/^\//, "");
            const isLinkActive = normalizedRoute === linkRoute;

            // Products dropdown - click based
            if (link.label === "Products") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    onClick={() => setProductsDropdown(!productsDropdown)}
                    className={`text-sm font-semibold tracking-wide transition-all relative py-2 cursor-pointer flex items-center gap-1 bg-transparent border-none outline-none ${
                      isLinkActive
                        ? "text-slate-950 font-bold"
                        : "text-slate-700 hover:text-slate-950"
                    }`}
                  >
                    {link.label}
                    <Lucide.ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${productsDropdown ? "rotate-180" : ""}`} />
                    {isLinkActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-sky-500"></span>
                    )}
                  </button>

                  {/* Dropdown Menu - appears on click */}
                  {productsDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl border border-slate-200 bg-white py-2 shadow-2xl animate-fadeIn">
                      
                      <div className="h-px bg-slate-200 mx-4"></div>
                      <Link
                        href="/products"
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:text-slate-950 hover:bg-sky-200 transition-colors"
                      >
                        <Lucide.Microchip className="h-4 w-4 text-sky-600" />
                        Hardware Accessories
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-sm font-semibold tracking-wide transition-all relative py-2 cursor-pointer ${
                  isLinkActive ? "text-slate-950 font-bold" : "text-slate-700 hover:text-slate-950"
                }`}
              >
                {link.label}
                {isLinkActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-sky-500"></span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={`px-5 py-2.5 transition-all text-xs font-bold rounded-xl cursor-pointer shadow-md flex items-center gap-1.5 ${
              "bg-sky-600 hover:bg-sky-500 text-white shadow-sky-500/10"
            }`}
          >
            <Lucide.MessageSquare className="h-4 w-4" /> Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors focus:outline-none text-slate-900 hover:bg-slate-100"
        >
          {mobileMenuOpen ? (
            <Lucide.X className="h-6 w-6" />
          ) : (
            <Lucide.Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg absolute top-full left-0 right-0 py-6 px-6 shadow-xl flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => {
            const linkRoute = link.href === "/" ? "home" : link.href.replace(/^\//, "");
            const isLinkActive = normalizedRoute === linkRoute;

            return (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                    isLinkActive
                      ? "bg-slate-100 text-sky-600"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {link.label}
                </Link>
                {link.label === "Products" && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/products"
                      onClick={handleLinkClick}
                      className="w-full text-left py-2 px-4 rounded-lg text-xs font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-100 transition-all flex items-center gap-2"
                    >
                      <Lucide.Microchip className="h-3.5 w-3.5" />
                      Hardware Devices
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="w-full mt-2 py-3 bg-sky-600 text-white rounded-xl font-bold text-center text-sm shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <Lucide.MessageSquare className="h-4 w-4" /> Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
