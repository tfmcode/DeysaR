"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-teal-900 shadow-lg" : "bg-teal-900 bg-opacity-95"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" title="DEYSA">
              <img
                src="/final-logo-web-white-2x.png"
                alt="DEYSA Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Servicios
            </Link>
            <Link
              href="/preguntas-frecuentes"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Preguntas Frecuentes
            </Link>
            <Link
              href="/equipamientos"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Equipamientos
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="#contacto"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors font-semibold"
            >
              Consultanos
            </Link>
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-white hover:text-orange-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="text-white hover:text-orange-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/preguntas-frecuentes"
                className="text-white hover:text-orange-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Preguntas Frecuentes
              </Link>
              <Link
                href="/equipamientos"
                className="text-white hover:text-orange-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Equipamientos
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-orange-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#contacto"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consultanos
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
