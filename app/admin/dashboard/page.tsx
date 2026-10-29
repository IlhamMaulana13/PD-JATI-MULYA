'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getAdminSession, clearAdminSession, AuthSession, DUMMY_ADMIN } from '@/lib/auth'
import { produkData } from '@/data/produk'

export default function AdminDashboardPage() {
  const router = useRouter()
  const [session, setSession] = useState<AuthSession | null>(null)
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'produk' | 'sistem'>('ringkasan')

  useEffect(() => {
    const currentSession = getAdminSession()
    if (!currentSession) {
      // Jika belum login, kita tetap berikan fallback data demo agar penguji/peneliti bisa melihat preview
      setSession({
        username: DUMMY_ADMIN.username,
        name: DUMMY_ADMIN.name,
        role: DUMMY_ADMIN.role,
        loginTime: new Date().toISOString(),
      })
    } else {
      setSession(currentSession)
    }
  }, [])

  const handleLogout = () => {
    clearAdminSession()
    // Mengembalikan pengguna ke halaman utama
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-slate-900/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Bar Navigation / Header */}
        <header className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-md">
              JM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-slate-900 tracking-tight">
                  PD JATI MULYA
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Panel Admin
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Purwarupa Sistem Manajemen Konten &amp; Katalog Toko
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 px-3 py-1.5 rounded-xl bg-slate-100/70 border border-slate-200/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Login sebagai: <strong>{session?.username || 'admin'}</strong></span>
            </div>

            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              Lihat Website Publik
            </Link>

            {/* Tombol Logout (Mandatory Requirement) */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white text-xs font-bold shadow-sm hover:shadow-rose-600/20 active:scale-95 transition-all"
              id="btn-logout"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Hero Welcome Banner (Mandatory Requirement: "Selamat datang di Dashboard PD Jati Mulya") */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-40 top-0 w-60 h-60 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <span>🚀 Purwarupa Tahap Awal (Penelitian)</span>
            </div>

            {/* Exact Required Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Selamat datang di Dashboard PD Jati Mulya
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ini adalah antarmuka dashboard pengelola untuk monitoring katalog kusen kayu mahoni, meranti, dan ornamen gypsum. Sistem ini dirancang bersih dan modular agar siap dihubungkan ke backend database pada tahap pengembangan selanjutnya.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="text-emerald-400">●</span> Status Sesi: <strong>Aktif</strong>
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span>👤</span> Akun: <strong>{session?.name || 'Administrator'}</strong>
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <span>🛡️</span> Level Akses: <strong>{session?.role || 'Super Admin'}</strong>
              </span>
            </div>
          </div>
        </section>

        {/* Quick Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between text-slate-500 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Total Produk</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">📦</span>
            </div>
            <div className="text-3xl font-black text-slate-900">{produkData.length}</div>
            <p className="text-xs text-slate-500 mt-1">Item aktif pada data statis</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between text-slate-500 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Kategori</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-xl">🏷️</span>
            </div>
            <div className="text-3xl font-black text-slate-900">4 Kategori</div>
            <p className="text-xs text-slate-500 mt-1">Kusen, Daun Pintu, Lis, Ornamen</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between text-slate-500 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Kanal Pemesanan</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">💬</span>
            </div>
            <div className="text-3xl font-black text-slate-900">WhatsApp</div>
            <p className="text-xs text-slate-500 mt-1">0856-9393-4322 (Direct Link)</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-teal-500/40 transition-colors">
            <div className="flex items-center justify-between text-slate-500 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Arsitektur</span>
              <span className="p-2 bg-teal-50 text-teal-600 rounded-xl">⚡</span>
            </div>
            <div className="text-2xl font-black text-slate-900">Next.js App</div>
            <p className="text-xs text-slate-500 mt-1">Tailwind CSS &amp; TypeScript</p>
          </div>
        </section>

        {/* Dashboard Tabs & Content Area */}
        <section className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-slate-100 px-6 pt-4 flex gap-4">
            <button
              onClick={() => setActiveTab('ringkasan')}
              className={`pb-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'ringkasan'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Ringkasan Riset
            </button>
            <button
              onClick={() => setActiveTab('produk')}
              className={`pb-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'produk'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Katalog Produk ({produkData.length})
            </button>
            <button
              onClick={() => setActiveTab('sistem')}
              className={`pb-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'sistem'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Informasi Kredensial &amp; Konfigurasi
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'ringkasan' && (
              <div className="space-y-6">
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/80">
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    Tahapan Pengembangan Purwarupa (Research Roadmap)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-white border border-emerald-200/60 shadow-xs">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 mb-2">
                        Fase 1 (Selesai)
                      </span>
                      <h4 className="font-bold text-sm text-slate-900">Website Katalog &amp; Profil</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Landing page modern, katalog produk responsif, integrasi Google Maps, dan direct WhatsApp/Gmail.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-emerald-200/60 shadow-xs">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 mb-2">
                        Fase 1.5 (Selesai)
                      </span>
                      <h4 className="font-bold text-sm text-slate-900">Login Admin Purwarupa</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Halaman login konvensional, validasi kredensial teks murni (hardcoded), error handling, dan dummy dashboard.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-dashed border-slate-300">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 mb-2">
                        Fase 2 (Riset Selanjutnya)
                      </span>
                      <h4 className="font-bold text-sm text-slate-900">Integrasi Database Sungguhan</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Koneksi database (PostgreSQL/MySQL), CRUD data produk online, dan manajemen multi-user.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <span className="font-bold block">Akses Cepat Pengujian:</span>
                      <span className="text-xs text-amber-800">
                        Anda dapat menguji proses logout dan login ulang dengan kredensial `admin` / `admin123`.
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shrink-0 transition-colors"
                  >
                    Uji Logout Sekarang
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'produk' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">
                    Daftar Produk Aktif (Tersinkron dengan `data/produk.js`)
                  </h3>
                  <button
                    disabled
                    className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                    title="Akan aktif pada tahap database backend"
                  >
                    + Tambah Produk Baru (Tahap 2)
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-xs font-bold uppercase text-slate-500 border-y border-slate-200">
                      <tr>
                        <th className="py-3 px-4">ID</th>
                        <th className="py-3 px-4">Nama Produk</th>
                        <th className="py-3 px-4">Kategori</th>
                        <th className="py-3 px-4">Deskripsi Ringkas</th>
                        <th className="py-3 px-4 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {produkData.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-4 font-mono text-xs text-slate-400">#{item.id}</td>
                          <td className="py-3 px-4 font-bold text-slate-900">{item.nama}</td>
                          <td className="py-3 px-4">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                              {item.kategori}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-xs text-slate-500 max-w-xs truncate">
                            {item.deskripsi}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700">
                              ● Siap Tampil
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'sistem' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Konfigurasi Autentikasi Purwarupa
                </h3>
                <div className="bg-slate-950 text-slate-200 rounded-2xl p-5 font-mono text-xs overflow-x-auto border border-slate-800 space-y-2">
                  <div className="text-slate-400">// Modul: lib/auth.ts (Hardcoded Prototype Credentials)</div>
                  <div>export const DUMMY_ADMIN = &#123;</div>
                  <div className="pl-4">username: &apos;admin&apos;,</div>
                  <div className="pl-4">password: &apos;admin123&apos;,</div>
                  <div className="pl-4">role: &apos;Super Admin&apos;,</div>
                  <div>&#125;</div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Modul ini sengaja dipisahkan pada <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-slate-800">lib/auth.ts</code> dan endpoint <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-slate-800">app/api/auth/login/route.ts</code> sehingga ketika Anda ingin menyambungkan database nyata (misalnya Prisma ORM, PostgreSQL, atau Supabase) di masa penelitian mendatang, Anda hanya perlu mengganti fungsi validasi tanpa merusak tampilan frontend.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
