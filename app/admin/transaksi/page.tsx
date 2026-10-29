import { createClient } from '@/utils/supabase/server'
import TransaksiManager, { TransaksiKeuangan } from '@/components/TransaksiManager'

export const dynamic = 'force-dynamic'

export default async function TransaksiPage() {
  const supabase = await createClient()
  const { data: initialTransaksi, error } = await supabase
    .from('transaksi_keuangan')
    .select('*')
    .order('tanggal_waktu', { ascending: false })

  return (
    <div className="p-6 sm:p-8 space-y-6">
      {/* Header Halaman */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Manajemen Transaksi</h1>
        <p className="text-sm text-slate-500 mt-1">
          Kelola data transaksi kas dari tabel{' '}
          <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
            transaksi_keuangan
          </code>{' '}
          di Supabase
        </p>
      </div>

      {/* CRUD Tabel + Form Modal */}
      <TransaksiManager
        initialData={(initialTransaksi as TransaksiKeuangan[]) || []}
        initialError={error?.message}
      />
    </div>
  )
}
