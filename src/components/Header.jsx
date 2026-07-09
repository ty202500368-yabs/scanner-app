import '../index.css';

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Login", href: "#" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(107,15,26,0.08)] border-b border-[#6B0F1A]/10"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
              <img
                src="wmsulogo.svg"
                alt=""
                className="h-6 w-6 object-contain"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            <span className="font-poppins leading-tight">
              <span className="block text-[#6B0F1A] font-bold text-[17px] tracking-tight">
                WMSU
                <span className="text-[#1F2937] font-semibold"> Smart Attendance</span>
              </span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[15px] font-medium text-gray-600 hover:text-[#6B0F1A] transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#F4C542] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Right Side: status pill + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-200 rounded-full pl-2 pr-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              System online
            </span>
            <button className="bg-[#6B0F1A] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#57091A] transition shadow-sm shadow-[#6B0F1A]/20">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden relative h-8 w-8 text-[#6B0F1A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 rounded"
          >
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-current transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-current transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-3 pb-5 space-y-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              className={`block rounded-md px-3 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-[#6B0F1A]/5 hover:text-[#6B0F1A] transition-all duration-200 ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-1.5 px-3 pt-2 pb-1 text-xs font-medium text-gray-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System online
          </div>

          <button className="w-full bg-[#6B0F1A] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#57091A] transition mt-1">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;