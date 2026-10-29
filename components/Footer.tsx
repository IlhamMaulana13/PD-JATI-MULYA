'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  // Footer khusus halaman admin
  if (pathname?.startsWith('/admin')) {
    return (
      <footer className="py-6 px-4 text-center text-xs text-slate-500 border-t border-slate-200/80 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} PD Jati Mulya — Panel Admin Purwarupa Riset</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-emerald-600 transition-colors font-semibold">
              Website Utama
            </Link>
            <span>•</span>
            <span className="text-slate-400">Next.js App Router (Tahap 1.5)</span>
          </div>
        </div>
      </footer>
    )
  }

  // Footer reguler untuk pengunjung umum & halaman login
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-amber-600/20">
                JM
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block">
                  PD. JATI MULYA
                </span>
                <span className="text-xs text-amber-400 font-medium tracking-wide uppercase">
                  Kusen Kayu &amp; Lis Gypsum
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Pusat produksi dan pembuatan kusen kayu (Meranti &amp; Mahoni) berkualitas presisi serta berbagai ornamen &amp; lis profil gypsum modern untuk hunian impian Anda.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Melayani Sejak Tahun 2000
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                2 Cabang Workshop
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#home" className="hover:text-emerald-400 transition-colors">
                  Beranda (Home)
                </a>
              </li>
              <li>
                <a href="/#keunggulan" className="hover:text-emerald-400 transition-colors">
                  Keunggulan Kami
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-emerald-400 transition-colors">
                  Tentang PD Jati Mulya
                </a>
              </li>
              <li>
                <a href="/#produk" className="hover:text-emerald-400 transition-colors">
                  Katalog Produk
                </a>
              </li>
              <li>
                <a href="/#lokasi" className="hover:text-emerald-400 transition-colors">
                  Workshop &amp; Cabang
                </a>
              </li>
              <li>
                <a href="/#kontak" className="hover:text-emerald-400 transition-colors">
                  Hubungi Kontak
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800/80">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-white/10 transition-colors"
                >
                  <span>🔒</span> Portal Login Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Hubungi Langsung
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base">💬</span>
                <div>
                  <span className="text-xs text-slate-500 block">WhatsApp Order</span>
                  <a
                    href="https://wa.me/6285693934322?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20tertarik%20dengan%20produk%20Anda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 font-semibold hover:text-emerald-400 transition-colors"
                  >
                    6285693934322
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold text-base">✉️</span>
                <div>
                  <span className="text-xs text-slate-500 block">Email Resmi</span>
                  <a
                    href="mailto:hamsaviero7@gmail.com"
                    className="text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    hamsaviero7@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-slate-400 font-bold text-base">🕒</span>
                <div>
                  <span className="text-xs text-slate-500 block">Jam Layanan</span>
                  <span className="text-slate-300">Setiap Hari 06.30 - 22.00 WIB</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} PD Jati Mulya. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <span>Kusen Kayu Mahoni &amp; Meranti</span>
            <span>•</span>
            <span>Lis Profil Gypsum</span>
            <span>•</span>
            <span>Tangerang, Banten</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
