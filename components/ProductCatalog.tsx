'use client'

import { useState, useMemo } from 'react'
import { produkData } from '@/data/produk'

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  // Extract categories dynamically
  const categories = useMemo(() => {
    const unique = Array.from(new Set(produkData.map((item) => item.kategori)))
    return ['Semua', ...unique]
  }, [])

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Semua') return produkData
    return produkData.filter((item) => item.kategori === activeCategory)
  }, [activeCategory])

  return (
    <section id="produk" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Katalog Produk Unggulan
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Koleksi Kusen Kayu & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600">
              Lis Gypsum Presisi
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Dibuat dari kayu mahoni & meranti pilihan melalui pemotongan presisi tinggi. Sedia berbagai motif lis gypsum elegan untuk interior rumah Anda.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${isActive
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => {
            const waUrl = `https://wa.me/6285693934322?text=${encodeURIComponent(
              item.waMessage
            )}`

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image Box */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Chip */}
                    <span className="absolute top-4 left-4 backdrop-blur-md bg-slate-900/80 border border-white/10 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                      {item.kategori}
                    </span>

                    {/* Quality Badge */}
                    <span className="absolute top-4 right-4 backdrop-blur-md bg-emerald-500/90 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                      Grade A Quality
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight">
                      {item.nama}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {item.deskripsi}
                    </p>

                    {/* Feature Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                        ✓ Kayu Pilihan
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                        ✓ Bisa Custom Ukuran
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="px-7 pb-7 pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-extrabold text-sm shadow-md hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-[1.02]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.823 9.823 0 01-5.011-1.373l-.36-.214-3.732.888.94-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                    </svg>
                    <span>Pesan via WhatsApp</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner inside Catalog */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-slate-500">
            Punya ukuran atau desain kustom sendiri?{' '}
            <a
              href="https://wa.me/6285693934322?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20punya%20desain%20kustom%20sendiri%20dan%20ingin%20konsultasi."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 underline font-bold hover:text-emerald-800"
            >
              Konsultasikan gratis sekarang melalui WhatsApp &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

