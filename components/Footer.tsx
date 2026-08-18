import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import * as Lucide from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home Dashboard", href: "/" },
    { label: "Company Story", href: "/about" },
    { label: "Hardware Accessories", href: "/products" },
    { label: "Software Solutions", href: "/software" },
    { label: "Contact Operations", href: "/contact" },
  ];

  const hardwareProducts = [
    { label: "Hardware Accessories", href: "/products" },
  ];

  const softwareProducts = [
    { label: "Software Solutions", href: "/software" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-900 text-left">
        <div className="space-y-4">
          <Link
            href="/#home-hero"
            aria-label="Bhardwaj Innovations homepage"
            className="inline-flex cursor-pointer"
          >
            <Logo showText />
          </Link>

          <p className="text-xs text-slate-400 leading-relaxed font-light">
            Bhardwaj Innovations delivers IoT telematics, AIS-140 hardware,
            smart BMS, and customized logistics tracking solutions for smarter,
            connected operations.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-slate-900 hover:bg-sky-600 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              <Lucide.Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-900 hover:bg-sky-600 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              <Lucide.Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-900 hover:bg-sky-600 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              <Lucide.Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">
            Quick Navigation
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-sky-400 transition-colors cursor-pointer text-left font-light flex items-center gap-1.5"
                >
                  <Lucide.ChevronRight className="h-3 w-3" /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">
            Hardware Products
          </h4>
          <ul className="space-y-2">
            {hardwareProducts.map((product, idx) => (
              <li key={idx}>
                <Link
                  href={product.href}
                  className="text-xs text-slate-400 hover:text-sky-400 transition-colors cursor-pointer text-left font-light flex items-center gap-1.5"
                >
                  <Lucide.ChevronRight className="h-3 w-3" /> {product.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="pt-4 text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">
            Software Products
          </h4>
          <ul className="space-y-2">
            {softwareProducts.map((product, idx) => (
              <li key={idx}>
                <Link
                  href={product.href}
                  className="text-xs text-slate-400 hover:text-sky-400 transition-colors cursor-pointer text-left font-light flex items-center gap-1.5"
                >
                  <Lucide.ChevronRight className="h-3 w-3" /> {product.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-xs text-slate-400 leading-relaxed font-light">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">
            Contact Head Office
          </h4>
          <p className="flex items-start gap-2.5">
            <Lucide.MapPin className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=H-28%2C%20Surajpur%20Industrial%20Area%2C%20Phase%201%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              Bhardwaj Innovations
              <br />
              2/3,Shankar Market,
              <br />
              Hisar, Haryana - 125001
            </a>
          </p>
          <p className="flex items-center gap-2.5">
            <Lucide.Phone className="h-4 w-4 text-sky-500 shrink-0" />
            <a
              href="tel:+919876543210"
              className="hover:text-sky-400 transition-colors"
            >
              +91 74948 42594
            </a>
          </p>
          <p className="flex items-center gap-2.5">
            <Lucide.Mail className="h-4 w-4 text-sky-500 shrink-0" />
            <a
              href="mailto:contact@bhardwajinnovations.com"
              className="hover:text-sky-400 transition-colors"
            >
              support@bhardwajinnovations.com
            </a>
          </p>
          <p className="flex items-center gap-2.5">
            <Lucide.Clock className="h-4 w-4 text-sky-500 shrink-0" />
            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-5 flex flex-col md:flex-row items-center justify-between text-slate-500 text-[10px] uppercase font-semibold tracking-wider">
        <p>&copy; {currentYear} Bhardwaj Innovations. All Rights Reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link
            href="/privacy"
            className="hover:text-sky-500 transition-colors cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-sky-500 transition-colors cursor-pointer"
          >
            Terms of Service
          </Link>
          <Link
            href="/sla"
            className="hover:text-sky-500 transition-colors cursor-pointer"
          >
            SLA Undertakings
          </Link>
        </div>
      </div>
    </footer>
  );
}
