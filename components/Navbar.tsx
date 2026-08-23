'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md group-hover:shadow-amber-300 transition-shadow duration-300">
              <span className="text-white font-black text-xs">PJ</span>
            </div>
            <span className="text-lg font-bold text-amber-900 tracking-tight">
              PD Jati Mulya
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-amber-900 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/katalog"
              className="px-4 py-2 rounded-lg text-sm font-medium text-amber-900 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200"
            >
              Katalog
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 active:scale-95 transition-all duration-200 shadow-sm"
            >
              Hubungi Kami
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            id="navbar-hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-amber-800 hover:bg-amber-50 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
              <span
                className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-4 pt-2 flex flex-col gap-1 border-t border-amber-100 bg-white">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 rounded-lg text-sm font-medium text-amber-900 hover:bg-amber-50 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/katalog"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 rounded-lg text-sm font-medium text-amber-900 hover:bg-amber-50 transition-colors duration-200"
          >
            Katalog
          </Link>
          <a
            href="https://wa.me/6285693934322"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-1 px-4 py-3 rounded-lg text-sm font-semibold bg-amber-600 text-white text-center hover:bg-amber-700 transition-colors duration-200"
          >
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  )
}
