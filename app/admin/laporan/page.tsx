'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { TransaksiKeuangan } from '@/components/TransaksiManager'

const formatRupiah = (val?: number | string) => {
  if (val === undefined || val === null || val === '') return '-'
  const num = Number(val)
  if (isNaN(num)) return String(val)
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(num)
}

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

export default function LaporanPage() {
  const supabase = createClient()

  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [data, setData] = useState<TransaksiKeuangan[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleFilter = async () => {
    setIsLoading(true)
    setHasSearched(true)
    setErrorMsg(null)

    let query = supabase
      .from('transaksi_keuangan')
      .select('*')
      .order('tanggal_waktu', { ascending: true })

    if (dateFrom) query = query.gte('tanggal_waktu', new Date(dateFrom).toISOString())
    if (dateTo) {
      // Inklusif akhir hari
      const endDate = new Date(dateTo)
      endDate.setHours(23, 59, 59, 999)
      query = query.lte('tanggal_waktu', endDate.toISOString())
    }

    const { data: result, error } = await query

    if (error) {
      setErrorMsg(error.message)
      setData([])
    } else {
      setData(result || [])
    }

    setIsLoading(false)
  }

  const handleReset = () => {
    setDateFrom('')
    setDateTo('')
    setData([])
    setHasSearched(false)
    setErrorMsg(null)
  }

  // Kalkulasi ringkasan
  let totalPemasukan = 0
  let totalPengeluaran = 0
  data.forEach((item) => {
    const nominal = Number(item.nominal) || 0
    const jenis = (item.jenis_transaksi || item.jenis || '').toLowerCase()
    if (jenis === 'pemasukan' || jenis === 'income') totalPemasukan += nominal
    else if (jenis === 'pengeluaran' || jenis === 'expense') totalPengeluaran += nominal
  })
  const saldo = totalPemasukan - totalPengeluaran

  return (
    <>
      {/* CSS Print: sembunyikan semua selain tabel laporan */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #area-cetak, #area-cetak * { visibility: visible !important; }
          #area-cetak { position: absolute; inset: 0; padding: 24px; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Laporan Keuangan</h1>
            <p className="text-sm text-slate-500 mt-1">Filter dan cetak laporan transaksi kas PD Jati Mulya</p>
          </div>
          {hasSearched && data.length > 0 && (
            <button
              type="button"
              onClick={() => window.print()}
              className="no-print inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm shadow-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Cetak Laporan
            </button>
          )}
        </div>

        {/* Filter Form */}
        <div className="no-print bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-sm font-bold text-slate-700 mb-4">Filter Rentang Tanggal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Dari Tanggal
              </label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Sampai Tanggal
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="flex items-end gap-2">
              <button
                type="button"
                onClick={handleFilter}
                disabled={isLoading}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-sm transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Memuat...</span>
                  </>
                ) : (
                  <span>Tampilkan</span>
                )}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-sm transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Error */}
        {errorMsg && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            <p className="font-semibold">Gagal memuat data:</p>
            <p className="font-mono text-xs mt-1">{errorMsg}</p>
          </div>
        )}

        {/* Area yang Dicetak */}
        {hasSearched && !errorMsg && (
          <div id="area-cetak" className="space-y-6">
            {/* Header Cetak */}
            <div className="hidden print:block mb-4">
              <h1 className="text-xl font-black text-slate-900">PD JATI MULYA</h1>
              <p className="text-sm text-slate-600">Laporan Keuangan {dateFrom && dateTo ? `${dateFrom} s/d ${dateTo}` : 'Semua Periode'}</p>
              <p className="text-xs text-slate-400">Dicetak pada: {new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
            </div>

            {/* Ringkasan Saldo */}
            {data.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-emerald-700 uppercase">Pemasukan</p>
                  <p className="text-lg font-black text-emerald-700 mt-1">{formatRupiah(totalPemasukan)}</p>
                </div>
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-rose-700 uppercase">Pengeluaran</p>
                  <p className="text-lg font-black text-rose-700 mt-1">{formatRupiah(totalPengeluaran)}</p>
                </div>
                <div className={`rounded-xl p-4 border ${saldo >= 0 ? 'bg-slate-900 border-slate-700' : 'bg-rose-100 border-rose-300'}`}>
                  <p className={`text-xs font-bold uppercase ${saldo >= 0 ? 'text-slate-400' : 'text-rose-700'}`}>Saldo</p>
                  <p className={`text-lg font-black mt-1 ${saldo >= 0 ? 'text-emerald-400' : 'text-rose-700'}`}>
                    {saldo >= 0 ? '+' : ''}{formatRupiah(saldo)}
                  </p>
                </div>
              </div>
            )}

            {/* Tabel Laporan */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="text-base font-bold text-slate-800">
                  Data Transaksi
                  {data.length > 0 && (
                    <span className="ml-2 text-sm font-normal text-slate-500">({data.length} transaksi)</span>
                  )}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-slate-100 text-xs font-semibold uppercase text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">No</th>
                      <th className="py-3 px-4">Tanggal</th>
                      <th className="py-3 px-4">Jenis</th>
                      <th className="py-3 px-4">Kategori</th>
                      <th className="py-3 px-4">Deskripsi</th>
                      <th className="py-3 px-4 text-right">Nominal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.length > 0 ? (
                      data.map((item, i) => {
                        const jenis = (item.jenis_transaksi || item.jenis || '').toLowerCase()
                        const isPemasukan = jenis === 'pemasukan' || jenis === 'income'
                        const isPengeluaran = jenis === 'pengeluaran' || jenis === 'expense'
                        return (
                          <tr key={item.id ?? i} className="hover:bg-slate-50 transition-colors">
                            <td className="py-3 px-4 text-slate-400 text-xs">{i + 1}</td>
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
                            <td className="py-3 px-4 text-slate-600 max-w-xs truncate">{item.deskripsi || '-'}</td>
                            <td
                              className={`py-3 px-4 text-right font-bold whitespace-nowrap ${
                                isPemasukan ? 'text-emerald-600' : isPengeluaran ? 'text-rose-600' : 'text-slate-800'
                              }`}
                            >
                              {isPemasukan ? '+ ' : isPengeluaran ? '- ' : ''}
                              {formatRupiah(item.nominal)}
                            </td>
                          </tr>
                        )
                      })
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-400">
                          Tidak ada data transaksi dalam rentang tanggal yang dipilih.
                        </td>
                      </tr>
                    )}
                  </tbody>
                  {data.length > 0 && (
                    <tfoot className="border-t-2 border-slate-300 bg-slate-50">
                      <tr>
                        <td colSpan={5} className="py-3 px-4 text-right font-bold text-slate-700 text-sm">
                          Saldo Bersih:
                        </td>
                        <td className={`py-3 px-4 text-right font-black text-sm ${saldo >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {saldo >= 0 ? '+' : ''}{formatRupiah(saldo)}
                        </td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
