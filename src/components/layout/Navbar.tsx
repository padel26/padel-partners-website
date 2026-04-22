"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/courts", label: "Courts" },
  { href: "/trusted-by", label: "Trusted By" },
  // { href: "/blog", label: "Blog" }, // hidden until blog posts are ready
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
          : "bg-white border-b border-gray-100"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
            <span
              className="text-padel-black font-semibold text-base truncate"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Padel Partners
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-court-green bg-court-green-light"
                    : "text-net-silver hover:text-padel-black hover:bg-baseline-grey"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://portal.thepadelpartners.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-net-silver hover:text-padel-black transition-colors"
            >
              Client Portal
            </a>
            <a
              href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors min-h-[44px] flex items-center"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile menu button — min 44px tap target */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-md text-net-silver hover:text-padel-black hover:bg-baseline-grey transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center px-3 min-h-[44px] rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-court-green bg-court-green-light"
                    : "text-padel-black hover:bg-baseline-grey"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2 pb-2">
              <a
                href="https://portal.thepadelpartners.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 min-h-[44px] text-sm font-medium text-net-silver hover:text-padel-black rounded-md hover:bg-baseline-grey transition-colors"
              >
                Client Portal →
              </a>
              <a
                href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full min-h-[44px] px-4 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
