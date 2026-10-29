'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { TransaksiKeuangan } from '@/components/TransaksiManager'

interface ChartData {
  label: string
  pemasukan: number
  pengeluaran: number
}

interface DashboardChartsProps {
  data: TransaksiKeuangan[]
}

const formatRupiahShort = (value: number) => {
  if (value >= 1_000_000_000) return `Rp${(value / 1_000_000_000).toFixed(1)}M`
  if (value >= 1_000_000) return `Rp${(value / 1_000_000).toFixed(1)}Jt`
  if (value >= 1_000) return `Rp${(value / 1_000).toFixed(0)}rb`
  return `Rp${value}`
}

const formatRupiahFull = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)

export default function DashboardCharts({ data }: DashboardChartsProps) {
  // Agregasi data per bulan
  const grouped: Record<string, { pemasukan: number; pengeluaran: number }> = {}

  data.forEach((item) => {
    const rawTanggal = item.tanggal_waktu || item.tanggal
    if (!rawTanggal) return
    const date = new Date(rawTanggal)
    if (isNaN(date.getTime())) return

    const label = new Intl.DateTimeFormat('id-ID', {
      month: 'short',
      year: 'numeric',
    }).format(date)

    if (!grouped[label]) grouped[label] = { pemasukan: 0, pengeluaran: 0 }

    const nominal = Number(item.nominal) || 0
    const jenis = (item.jenis_transaksi || item.jenis || '').toLowerCase()

    if (jenis === 'pemasukan' || jenis === 'income') {
      grouped[label].pemasukan += nominal
    } else if (jenis === 'pengeluaran' || jenis === 'expense') {
      grouped[label].pengeluaran += nominal
    }
  })

  const chartData: ChartData[] = Object.entries(grouped).map(([label, val]) => ({
    label,
    pemasukan: val.pemasukan,
    pengeluaran: val.pengeluaran,
  }))

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="mb-5">
        <h2 className="text-base font-bold text-slate-800">
          Grafik Pemasukan vs Pengeluaran
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">Perbandingan per bulan</p>
      </div>

      {chartData.length === 0 ? (
        <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
          Belum ada data untuk ditampilkan dalam grafik.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatRupiahShort}
              tick={{ fontSize: 11, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
              width={72}
            />
            <Tooltip
              formatter={(value, name) => [
                formatRupiahFull(Number(value) || 0),
                name === 'pemasukan' ? 'Pemasukan' : 'Pengeluaran',
              ]}
              contentStyle={{
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                fontSize: '12px',
              }}
            />
            <Legend
              formatter={(value) =>
                value === 'pemasukan' ? 'Pemasukan' : 'Pengeluaran'
              }
              wrapperStyle={{ fontSize: '12px' }}
            />
            <Bar dataKey="pemasukan" fill="#10b981" radius={[6, 6, 0, 0]} name="pemasukan" />
            <Bar dataKey="pengeluaran" fill="#f43f5e" radius={[6, 6, 0, 0]} name="pengeluaran" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
