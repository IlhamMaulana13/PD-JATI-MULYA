'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'

export const KATEGORI_PEMASUKAN = [
  'LIS 8 cm',
  'LIS 10 cm',
  'LIS Moulding',
  'Kusen Meranti',
  'Kusen Mahoni',
  'Daun Pintu mahoni',
  'Daun Pintu Meranti',
  'Jendela Mahoni',
  'Jendela Meranti',
  'Lainnya',
] as const

export const KATEGORI_PENGELUARAN = [
  'Casting',
  'Roving',
  'Belanja Stok Kayu',
  'Lainnya',
] as const

export interface TransaksiKeuangan {
  id?: string | number
  tanggal_waktu?: string
  tanggal?: string
  jenis_transaksi?: string
  jenis?: string
  kategori?: string
  deskripsi?: string
  nominal?: number | string
  [key: string]: any
}

interface TransaksiManagerProps {
  initialData: TransaksiKeuangan[]
  initialError?: string
}

export default function TransaksiManager({
  initialData,
  initialError,
}: TransaksiManagerProps) {
  const supabase = createClient()

  // State Data Tabel
  const [transaksiList, setTransaksiList] = useState<TransaksiKeuangan[]>(initialData)
  const [errorMessage, setErrorMessage] = useState<string | null>(initialError || null)
  const [isDeletingId, setIsDeletingId] = useState<string | number | null>(null)

  // State Modal Form
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<string | number | null>(null) // null = Create, non-null = Edit
  const [jenisTransaksi, setJenisTransaksi] = useState<'Pemasukan' | 'Pengeluaran'>('Pemasukan')
  const [kategori, setKategori] = useState<string>('')
  const [kategoriLainnya, setKategoriLainnya] = useState<string>('')
  const [deskripsi, setDeskripsi] = useState<string>('')
  const [nominal, setNominal] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Opsi kategori dinamis
  const opsiKategori = jenisTransaksi === 'Pemasukan' ? KATEGORI_PEMASUKAN : KATEGORI_PENGELUARAN

  // Format Mata Uang Rupiah
  const formatRupiah = (nom?: number | string) => {
    if (nom === undefined || nom === null || nom === '') return '-'
    const num = Number(nom)
    if (isNaN(num)) return String(nom)
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num)
  }

  // Format Tanggal: DD MMM YYYY (contoh: 29 Okt 2026)
  const formatTanggal = (tanggalString?: string) => {
    if (!tanggalString) return '-'
    try {
      const date = new Date(tanggalString)
      if (isNaN(date.getTime())) return tanggalString
      return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(date)
    } catch {
      return tanggalString
    }
  }

  // Tugas 4: Fungsi Fetch / Refresh Data Otomatis dari Supabase
  const refreshData = async () => {
    const { data, error } = await supabase
      .from('transaksi_keuangan')
      .select('*')
      .order('tanggal_waktu', { ascending: false })

    if (error) {
      setErrorMessage(error.message)
    } else if (data) {
      setTransaksiList(data)
      setErrorMessage(null)
    }
  }

  // Reset Form
  const resetForm = () => {
    setSelectedId(null)
    setJenisTransaksi('Pemasukan')
    setKategori('')
    setKategoriLainnya('')
    setDeskripsi('')
    setNominal('')
    setIsSubmitting(false)
  }

  const handleOpenTambah = () => {
    resetForm()
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    resetForm()
  }

  const handleJenisChange = (val: 'Pemasukan' | 'Pengeluaran') => {
    setJenisTransaksi(val)
    setKategori('')
    setKategoriLainnya('')
  }

  // Normalise jenis dari DB ('pemasukan' / 'pengeluaran') → Label UI ('Pemasukan' / 'Pengeluaran')
  const normalizeJenis = (raw: string): 'Pemasukan' | 'Pengeluaran' => {
    const lc = raw.toLowerCase()
    if (lc === 'pengeluaran' || lc === 'expense') return 'Pengeluaran'
    return 'Pemasukan'
  }

  // Tugas 3: Buka Form untuk Edit (Pre-fill data yang dipilih)
  const handleOpenEdit = (item: TransaksiKeuangan) => {
    if (!item.id) return

    setSelectedId(item.id)
    const rawJenisStr = item.jenis_transaksi || item.jenis || 'pemasukan'
    const currentJenis = normalizeJenis(rawJenisStr)
    setJenisTransaksi(currentJenis)

    const rawKategori = item.kategori || ''
    const listKategori = currentJenis === 'Pemasukan' ? KATEGORI_PEMASUKAN : KATEGORI_PENGELUARAN
    const isPredefined = listKategori.filter((k) => k !== 'Lainnya').includes(rawKategori as any)

    if (isPredefined) {
      setKategori(rawKategori)
      setKategoriLainnya('')
    } else {
      setKategori('Lainnya')
      setKategoriLainnya(rawKategori)
    }

    setDeskripsi(item.deskripsi || '')
    setNominal(item.nominal ? String(item.nominal) : '')
    setIsModalOpen(true)
  }

  // Tugas 1 & 3: Submit Handler (Insert / Update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Jika user memilih 'Lainnya', gunakan nilai teks manual (kategoriLainnya), bukan 'Lainnya'
    const kategoriFinal = kategori === 'Lainnya' ? kategoriLainnya.trim() : kategori

    if (!kategoriFinal) {
      alert('Kategori tidak boleh kosong.')
      return
    }

    const nominalNumber = Number(nominal)
    if (isNaN(nominalNumber) || nominalNumber < 0) {
      alert('Nominal harus berupa angka valid.')
      return
    }

    setIsSubmitting(true)

    try {
      if (selectedId) {
        // Mode UPDATE / EDIT — kirim jenis_transaksi lowercase sesuai constraint DB
        const { error } = await supabase
          .from('transaksi_keuangan')
          .update({
            jenis_transaksi: jenisTransaksi.toLowerCase(),
            kategori: kategoriFinal,
            deskripsi: deskripsi.trim(),
            nominal: nominalNumber,
          })
          .eq('id', selectedId)

        if (error) {
          alert(`Gagal memperbarui transaksi: ${error.message}`)
          setIsSubmitting(false)
          return
        }
      } else {
        // Mode CREATE / INSERT — kirim jenis_transaksi lowercase sesuai constraint DB
        const { error } = await supabase
          .from('transaksi_keuangan')
          .insert([
            {
              jenis_transaksi: jenisTransaksi.toLowerCase(),
              kategori: kategoriFinal,
              deskripsi: deskripsi.trim(),
              nominal: nominalNumber,
              tanggal_waktu: new Date().toISOString(),
            },
          ])

        if (error) {
          alert(`Gagal menambahkan transaksi: ${error.message}`)
          setIsSubmitting(false)
          return
        }
      }

      // Tugas 4: Refresh data otomatis setelah insert/update berhasil
      await refreshData()
      handleCloseModal()
    } catch (err: any) {
      alert(`Terjadi kesalahan: ${err.message || err}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Tugas 2: Hapus Data dengan Konfirmasi Browser
  const handleDelete = async (id?: string | number) => {
    if (!id) return

    const yakin = window.confirm('Apakah Anda yakin ingin menghapus data transaksi ini?')
    if (!yakin) return

    setIsDeletingId(id)

    try {
      const { error } = await supabase
        .from('transaksi_keuangan')
        .delete()
        .eq('id', id)

      if (error) {
        alert(`Gagal menghapus data: ${error.message}`)
      } else {
        // Tugas 4: Refresh data otomatis setelah delete
        await refreshData()
      }
    } catch (err: any) {
      alert(`Terjadi kesalahan: ${err.message || err}`)
    } finally {
      setIsDeletingId(null)
    }
  }

  return (
    <div className="space-y-6">
      {/* Action Bar & Tombol Tambah Transaksi */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Riwayat Transaksi</h2>
          <p className="text-xs text-slate-500">
            Total {transaksiList.length} transaksi tercatat
          </p>
        </div>
        <button
          type="button"
          onClick={handleOpenTambah}
          id="btn-tambah-transaksi"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm shadow-sm hover:shadow-emerald-600/20 active:scale-95 transition-all self-start sm:self-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          <span>+ Tambah Transaksi</span>
        </button>
      </div>

      {/* Error Message Banner */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          <p className="font-semibold">Terjadi kendala data:</p>
          <p className="font-mono text-xs mt-1">{errorMessage}</p>
        </div>
      )}

      {/* Tabel Data Transaksi */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-slate-100 text-slate-700 font-semibold uppercase text-xs border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Tanggal</th>
                <th className="py-3.5 px-4">Jenis</th>
                <th className="py-3.5 px-4">Kategori</th>
                <th className="py-3.5 px-4">Deskripsi</th>
                <th className="py-3.5 px-4 text-right">Nominal</th>
                {/* Header Kolom Baru: Aksi */}
                <th className="py-3.5 px-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {transaksiList.length > 0 ? (
                transaksiList.map((item: TransaksiKeuangan, index: number) => {
                  const rawTanggal = item.tanggal_waktu ?? item.tanggal
                  const rawJenis = item.jenis_transaksi ?? item.jenis ?? '-'
                  const isPemasukan =
                    rawJenis.toLowerCase() === 'pemasukan' ||
                    rawJenis.toLowerCase() === 'income'
                  const isPengeluaran =
                    rawJenis.toLowerCase() === 'pengeluaran' ||
                    rawJenis.toLowerCase() === 'expense'

                  const isBeingDeleted = item.id === isDeletingId

                  return (
                    <tr
                      key={item.id ?? index}
                      className={`hover:bg-slate-50/80 transition-colors ${
                        isBeingDeleted ? 'opacity-40 pointer-events-none' : ''
                      }`}
                    >
                      {/* Tanggal (DD MMM YYYY) */}
                      <td className="py-3.5 px-4 whitespace-nowrap font-medium text-slate-700">
                        {formatTanggal(rawTanggal)}
                      </td>

                      {/* Jenis Transaksi */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            isPemasukan
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : isPengeluaran
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {rawJenis}
                        </span>
                      </td>

                      {/* Kategori */}
                      <td className="py-3.5 px-4 font-medium text-slate-800">
                        {item.kategori || '-'}
                      </td>

                      {/* Deskripsi */}
                      <td className="py-3.5 px-4 max-w-xs text-slate-600 truncate">
                        {item.deskripsi || '-'}
                      </td>

                      {/* Nominal */}
                      <td
                        className={`py-3.5 px-4 text-right font-bold whitespace-nowrap ${
                          isPemasukan
                            ? 'text-emerald-600'
                            : isPengeluaran
                            ? 'text-rose-600'
                            : 'text-slate-800'
                        }`}
                      >
                        {isPemasukan ? '+ ' : isPengeluaran ? '- ' : ''}
                        {formatRupiah(item.nominal)}
                      </td>

                      {/* Kolom Aksi: Tombol Edit & Hapus */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {/* Tombol Edit */}
                          <button
                            type="button"
                            onClick={() => handleOpenEdit(item)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 active:bg-amber-200 text-amber-700 border border-amber-200 text-xs font-semibold shadow-xs transition-colors"
                            title="Edit transaksi ini"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                            <span>Edit</span>
                          </button>

                          {/* Tombol Hapus */}
                          <button
                            type="button"
                            onClick={() => handleDelete(item.id)}
                            disabled={isBeingDeleted}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 active:bg-rose-200 text-rose-700 border border-rose-200 text-xs font-semibold shadow-xs transition-colors"
                            title="Hapus transaksi ini"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            <span>{isBeingDeleted ? 'Menghapus...' : 'Hapus'}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    {errorMessage
                      ? 'Tidak dapat memuat data transaksi.'
                      : 'Belum ada data transaksi keuangan tercatat.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Popup (Create & Edit) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Header Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  {selectedId ? 'Edit Transaksi Keuangan' : 'Tambah Transaksi Baru'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedId
                    ? 'Perbarui data transaksi kas PD Jati Mulya'
                    : 'Formulir pencatatan transaksi kas PD Jati Mulya'}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
                aria-label="Tutup modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Input */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Jenis Transaksi (Dropdown) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Jenis Transaksi <span className="text-rose-500">*</span>
                </label>
                <select
                  value={jenisTransaksi}
                  onChange={(e) => handleJenisChange(e.target.value as 'Pemasukan' | 'Pengeluaran')}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  <option value="Pemasukan">Pemasukan</option>
                  <option value="Pengeluaran">Pengeluaran</option>
                </select>
              </div>

              {/* Kategori (Dropdown dinamis berdasarkan jenisTransaksi) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Kategori <span className="text-rose-500">*</span>
                </label>
                <select
                  value={kategori}
                  required
                  onChange={(e) => {
                    setKategori(e.target.value)
                    if (e.target.value !== 'Lainnya') {
                      setKategoriLainnya('')
                    }
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  <option value="" disabled>
                    -- Pilih Kategori {jenisTransaksi} --
                  </option>
                  {opsiKategori.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                {/* Kolom input tambahan jika memilih 'Lainnya' */}
                {kategori === 'Lainnya' && (
                  <div className="mt-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 animate-in fade-in duration-150">
                    <label className="block text-xs font-semibold text-slate-700">
                      Tulis Kategori Manual <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={kategoriLainnya}
                      onChange={(e) => setKategoriLainnya(e.target.value)}
                      placeholder="Masukkan nama kategori transaksi..."
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Deskripsi (Input Text) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Deskripsi
                </label>
                <input
                  type="text"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Keterangan singkat transaksi..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Nominal (Input Number) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nominal (Rp) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  value={nominal}
                  onChange={(e) => setNominal(e.target.value)}
                  placeholder="Contoh: 1500000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Tombol Simpan & Batal */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSubmitting}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-sm transition-colors disabled:opacity-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <span>{selectedId ? 'Simpan Perubahan' : 'Simpan'}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
