'use client'

import { useState } from 'react'

const KATEGORI_PEMASUKAN = [
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

const KATEGORI_PENGELUARAN = [
  'Casting',
  'Roving',
  'Belanja Stok Kayu',
  'Lainnya',
] as const

export default function TambahTransaksiModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [jenisTransaksi, setJenisTransaksi] = useState<'Pemasukan' | 'Pengeluaran'>('Pemasukan')
  const [kategori, setKategori] = useState<string>('')
  const [kategoriLainnya, setKategoriLainnya] = useState<string>('')
  const [deskripsi, setDeskripsi] = useState<string>('')
  const [nominal, setNominal] = useState<string>('')

  // Menentukan opsi kategori berdasarkan jenis transaksi yang dipilih
  const opsiKategori = jenisTransaksi === 'Pemasukan' ? KATEGORI_PEMASUKAN : KATEGORI_PENGELUARAN

  const handleOpen = () => setIsOpen(true)

  const resetForm = () => {
    setJenisTransaksi('Pemasukan')
    setKategori('')
    setKategoriLainnya('')
    setDeskripsi('')
    setNominal('')
  }

  const handleClose = () => {
    setIsOpen(false)
    resetForm()
  }

  // Handler saat jenis transaksi berubah: reset kategori & input manual lainnya
  const handleJenisChange = (val: 'Pemasukan' | 'Pengeluaran') => {
    setJenisTransaksi(val)
    setKategori('')
    setKategoriLainnya('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Kategori final: jika "Lainnya", gunakan kategoriLainnya, jika tidak gunakan kategori terpilih
    const kategoriFinal = kategori === 'Lainnya' ? kategoriLainnya : kategori

    console.log('Form Submit (Preview):', {
      jenisTransaksi,
      kategori: kategoriFinal,
      deskripsi,
      nominal,
    })

    // Sesuai instruksi: Logika submit Supabase akan dibuat di langkah berikutnya
    handleClose()
  }

  return (
    <>
      {/* Tombol + Tambah Transaksi */}
      <button
        type="button"
        onClick={handleOpen}
        id="btn-tambah-transaksi"
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm shadow-sm hover:shadow-emerald-600/20 active:scale-95 transition-all"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span>+ Tambah Transaksi</span>
      </button>

      {/* Modal Popup */}
      {isOpen && (
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
                  Tambah Transaksi Baru
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Formulir pencatatan transaksi kas PD Jati Mulya
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
                aria-label="Tutup modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
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
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-sm transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-colors"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
