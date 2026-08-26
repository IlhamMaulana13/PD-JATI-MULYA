'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-950/95 backdrop-blur-md text-amber-50 border-b border-amber-800/50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Identitas Teks Tanpa Logo Gambar */}
          <a href="#home" className="text-xl font-extrabold tracking-tight text-amber-100 hover:text-white transition-colors">
            PD Jati Mulya
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-amber-300 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-amber-300 transition-colors">
              Tentang Kami
            </a>
            <a href="#produk" className="hover:text-amber-300 transition-colors">
              Produk
            </a>
            <a href="#lokasi" className="hover:text-amber-300 transition-colors">
              Lokasi & Cabang
            </a>
            <a href="#kontak" className="hover:text-amber-300 transition-colors">
              Kontak
            </a>
            <a
              href="https://wa.me/6287878361870?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20tertarik%20dengan%20produk%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-sm transition-all active:scale-95"
            >
              Hubungi WA
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-amber-200 hover:bg-amber-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-amber-900 border-t border-amber-800 px-4 pt-2 pb-4 flex flex-col gap-2">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-amber-800 text-amber-100 font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-amber-800 text-amber-100 font-medium"
          >
            Tentang Kami
          </a>
          <a
            href="#produk"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-amber-800 text-amber-100 font-medium"
          >
            Produk
          </a>
          <a
            href="#lokasi"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-amber-800 text-amber-100 font-medium"
          >
            Lokasi & Cabang
          </a>
          <a
            href="#kontak"
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-amber-800 text-amber-100 font-medium"
          >
            Kontak
          </a>
          <a
            href="https://wa.me/6287878361870?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20tertarik%20dengan%20produk%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 text-center px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold"
          >
            Hubungi WA (+62 878-7836-1870)
          </a>
        </nav>
      )}
    </header>
  )
}
