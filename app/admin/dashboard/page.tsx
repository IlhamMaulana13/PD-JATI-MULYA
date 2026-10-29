import { createClient } from '@/utils/supabase/server'
import { TransaksiKeuangan } from '@/components/TransaksiManager'
import DashboardCharts from '@/components/DashboardCharts'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const formatRupiah = (val: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(val)

export default async function AdminDashboardPage() {
  const supabase = await createClient()
  const { data: transaksi } = await supabase
    .from('transaksi_keuangan')
    .select('*')
    .order('tanggal_waktu', { ascending: false })

  const data: TransaksiKeuangan[] = transaksi || []

  // Kalkulasi Summary Cards
  let totalPemasukan = 0
  let totalPengeluaran = 0
  data.forEach((item) => {
    const nominal = Number(item.nominal) || 0
    const jenis = (item.jenis_transaksi || item.jenis || '').toLowerCase()
    if (jenis === 'pemasukan' || jenis === 'income') totalPemasukan += nominal
    else if (jenis === 'pengeluaran' || jenis === 'expense') totalPengeluaran += nominal
  })
  const saldo = totalPemasukan - totalPengeluaran

  // Transaksi terbaru (5 teratas)
  const recentTransaksi = data.slice(0, 5)

  const formatTanggal = (ts?: string) => {
    if (!ts) return '-'
    try {
      const d = new Date(ts)
      if (isNaN(d.getTime())) return ts
      return new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).format(d)
    } catch {
      return ts
    }
  }

  return (
    <div className="p-6 sm:p-8 space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Dashboard Keuangan</h1>
        <p className="text-sm text-slate-500 mt-1">
          Ringkasan keuangan dan grafik transaksi PD Jati Mulya
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Total Omset / Pemasukan */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Omset</span>
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </span>
          </div>
          <div className="text-2xl font-black text-emerald-600">{formatRupiah(totalPemasukan)}</div>
          <p className="text-xs text-slate-500 mt-1">Total pemasukan tercatat</p>
        </div>

        {/* Total Pengeluaran */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Pengeluaran</span>
            <span className="p-2 rounded-xl bg-rose-50 text-rose-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </span>
          </div>
          <div className="text-2xl font-black text-rose-600">{formatRupiah(totalPengeluaran)}</div>
          <p className="text-xs text-slate-500 mt-1">Total pengeluaran tercatat</p>
        </div>

        {/* Saldo / Laba */}
        <div className={`rounded-2xl border shadow-sm p-6 ${saldo >= 0 ? 'bg-slate-900 border-slate-700' : 'bg-rose-900 border-rose-700'}`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Saldo / Laba</span>
            <span className={`p-2 rounded-xl ${saldo >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div className={`text-2xl font-black ${saldo >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {saldo >= 0 ? '+' : ''}{formatRupiah(saldo)}
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {saldo >= 0 ? 'Saldo positif 🎉' : 'Pengeluaran melebihi pemasukan'}
          </p>
        </div>
      </div>

      {/* Grafik Recharts */}
      <DashboardCharts data={data} />

      {/* Tabel Transaksi Terbaru */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-800">Transaksi Terbaru</h2>
            <p className="text-xs text-slate-500 mt-0.5">5 transaksi terakhir</p>
          </div>
          <Link
            href="/admin/transaksi"
            className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            Lihat semua →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Tanggal</th>
                <th className="py-3 px-4">Jenis</th>
                <th className="py-3 px-4">Kategori</th>
                <th className="py-3 px-4 text-right">Nominal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentTransaksi.length > 0 ? (
                recentTransaksi.map((item, i) => {
                  const rawJenis = (item.jenis_transaksi || item.jenis || '').toLowerCase()
                  const isPemasukan = rawJenis === 'pemasukan' || rawJenis === 'income'
                  const isPengeluaran = rawJenis === 'pengeluaran' || rawJenis === 'expense'
                  return (
                    <tr key={item.id ?? i} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 whitespace-nowrap text-slate-700">
                        {formatTanggal(item.tanggal_waktu ?? item.tanggal)}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            isPemasukan
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : isPengeluaran
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {item.jenis_transaksi || item.jenis || '-'}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-800">{item.kategori || '-'}</td>
                      <td
                        className={`py-3 px-4 text-right font-bold whitespace-nowrap ${
                          isPemasukan ? 'text-emerald-600' : isPengeluaran ? 'text-rose-600' : 'text-slate-800'
                        }`}
                      >
                        {isPemasukan ? '+ ' : isPengeluaran ? '- ' : ''}
                        {formatRupiah(Number(item.nominal) || 0)}
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={4} className="py-10 text-center text-slate-400 text-sm">
                    Belum ada data transaksi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
