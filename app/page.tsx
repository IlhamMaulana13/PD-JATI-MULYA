import ProductCatalog from "@/components/ProductCatalog";
import ContactLocation from "@/components/ContactLocation";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* ── 1. Hero Section ── */}
      <section
        id="home"
        className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 text-amber-50 px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      >
        {/* Background texture & glowing gradient */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/80 border border-amber-700/60 text-amber-200 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <span>🪵</span> Serving Since 2000 — 24+ Tahun Pengalaman
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Kusen Kayu & Lis Gypsum{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
              Berkualitas & Kokoh
            </span>
          </h1>

          <p className="text-amber-200/90 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Spesialis pembuatan kusen kayu meranti & mahoni presisi serta lis gypsum rapi untuk mempercantik hunian dan proyek bangunan Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#produk"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-extrabold text-base shadow-xl transition-all duration-200 active:scale-95 text-center"
            >
              Lihat Katalog Produk
            </a>
            <a
              href="https://wa.me/6287878361870?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20tertarik%20dengan%20produk%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl transition-all duration-200 active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.823 9.823 0 01-5.011-1.373l-.36-.214-3.732.888.94-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
              </svg>
              Pesan Langsung via WA
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. About Us Section ── */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Banner */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-amber-900 text-amber-100 p-8 sm:p-12 border border-amber-800 flex flex-col justify-between min-h-[380px]">
              <div className="absolute -top-16 -right-16 w-60 h-60 bg-amber-600/30 rounded-full blur-2xl" />
              <div>
                <span className="text-amber-300 uppercase tracking-widest font-bold text-xs">
                  PD. JATI MULYA
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-2 mb-4">
                  Komitmen Kualitas & Presisi Detail
                </h3>
                <p className="text-amber-200 text-sm leading-relaxed">
                  Setiap kusen kayu dikerjakan dengan presisi menggunakan material pilihan, sementara lis gypsum dipasang dengan rapi dan elegan untuk memperindah ruangan Anda.
                </p>
              </div>
              <div className="pt-8 border-t border-amber-800/80 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-2xl font-black text-amber-300">2000</span>
                  <span className="text-xs text-amber-200">Melayani Sejak</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-amber-300">2 Cabang</span>
                  <span className="text-xs text-amber-200">Kabupaten Tangerang</span>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <div>
                <span className="text-amber-800 font-bold uppercase tracking-wider text-xs px-3 py-1 bg-amber-100 rounded-full border border-amber-200">
                  Tentang Kami
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950 mt-3">
                  Pengalaman & Keahlian dalam Pembuatan Kusen & Gypsum
                </h2>
              </div>

              <p className="text-amber-900/90 text-sm sm:text-base leading-relaxed">
                <strong>PD. JATI MULYA</strong> adalah usaha yang bergerak di bidang pembuatan kusen kayu dan lis gypsum. Dengan pengalaman dan keahlian bertahun-tahun, kami selalu berkomitmen menghadirkan hasil yang rapi, kokoh, dan berkualitas tinggi.
              </p>

              <p className="text-amber-900/80 text-sm leading-relaxed">
                Kami percaya bahwa detail yang baik akan memberikan nilai tambah pada sebuah bangunan. Dengan dukungan tenaga profesional dan pengerjaan yang teliti, PD. JATI MULYA siap melayani kebutuhan rumah tinggal, kantor, maupun proyek pembangunan Anda.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Kusen Pintu & Jendela",
                  "Daun Pintu & Jendela",
                  "Lis Gypsum Berbagai Motif",
                  "Kap Lampu Gypsum",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-950">
                    <span className="text-amber-600 font-bold">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Product Catalog Grid Card Section ── */}
      <ProductCatalog />

      {/* ── 4. Quick WhatsApp Order Banner Section ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900 to-amber-950 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-100">
            Hubungi Kami via WhatsApp Untuk Pemesanan
          </h2>
          <p className="text-amber-200 text-sm sm:text-base">
            Konsultasikan ukuran, bahan kayu (Meranti / Mahoni), dan desain lis gypsum yang Anda butuhkan secara langsung.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/6287878361870?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20ingin%20memesan%20kusen%20kayu%2Fgypsum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-2xl transition-all active:scale-95"
            >
              <span>Kirim Pesan WhatsApp &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Locations & Contact Section ── */}
      <ContactLocation />
    </div>
  );
}
