import ProductCatalog from "@/components/ProductCatalog";
import ContactLocation from "@/components/ContactLocation";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* ── 1. Hero Section (Ultra Modern Obsidian & Glowing Ambient) ── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center bg-slate-950 text-white px-4 sm:px-6 lg:px-8 pt-32 pb-24 overflow-hidden"
      >
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-600/20 via-amber-500/15 to-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle geometric dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>🪵 Spesialis Kusen Kayu & Lis Gypsum • Berpengalaman Sejak 2000</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
            Kusen Kayu Presisi &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400">
              Lis Gypsum Berkualitas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            Pusat pembuatan kusen kayu meranti & mahoni solid dengan potongan presisi tinggi, serta beragam pilihan lis profil gypsum modern untuk mempercantik hunian & proyek Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/6285693934322?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20tertarik%20dengan%20produk%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-xl hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.823 9.823 0 01-5.011-1.373l-.36-.214-3.732.888.94-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
              </svg>
              <span>Pesan via WhatsApp</span>
            </a>
            <a
              href="#produk"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 text-center"
            >
              Lihat Katalog Produk
            </a>
          </div>

          {/* Quick Metrics / Stats Bento Card */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left">
              <span className="text-3xl font-black text-amber-300 block">24+ Th</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Melayani Sejak 2000</span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left">
              <span className="text-3xl font-black text-emerald-400 block">2 Cabang</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Workshop di Tangerang</span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left">
              <span className="text-3xl font-black text-amber-300 block">100%</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Solid Mahoni & Meranti</span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left">
              <span className="text-3xl font-black text-emerald-400 block">Custom</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Ukuran & Model Bebas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Value Proposition / Keunggulan (Bento Grid) ── */}
      <section id="keunggulan" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Keunggulan Layanan Kami
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Kenapa Memilih <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600">
                PD Jati Mulya?
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Dedikasi pada kualitas bahan dan kerapian pengerjaan adalah prinsip utama kami dalam melayani setiap pelanggan.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl font-bold">
                🌲
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Kayu Pilihan Berkualitas
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Menggunakan bahan kayu Meranti dan Mahoni berkualitas dengan serat alami yang kokoh, stabil, dan tahan terhadap perubahan cuaca.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold">
                📐
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Pemotongan Presisi
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pengerjaan sambungan kusen dan daun pintu dilakukan dengan ketelitian tinggi agar rapat, siku, dan memudahkan proses pemasangan.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-2xl font-bold">
                🏛️
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Lis Gypsum Artistik
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tersedia aneka motif lis profil gypsum klasik hingga minimalis modern serta kap ornamen lampu yang siap mempercantik interior ruangan.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl font-bold">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Konsultasi & Kustom Cepat
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bebas request ukuran dan model custom sesuai desain arsitek Anda. Dapatkan perhitungan estimasi dan konsultasi gratis via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. About Us Section ── */}
      <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Card Banner */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950 text-white p-8 sm:p-10 border border-slate-800 flex flex-col justify-between min-h-[420px] relative">
                {/* Glow badge */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <span className="text-amber-400 uppercase tracking-widest font-black text-xs block mb-3">
                    SEJARAH &amp; KOMITMEN
                  </span>
                  <h3 className="text-3xl font-black text-white tracking-tight leading-snug">
                    Pengerjaan Teliti, Hasil Kokoh &amp; Tahan Lama
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-4">
                    Sejak tahun 2000, PD Jati Mulya telah dipercaya oleh ratusan pemilik rumah, kontraktor, dan pengembang bangunan di wilayah Tangerang dan sekitarnya.
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-slate-800 grid grid-cols-2 gap-4 mt-8">
                  <div>
                    <span className="block text-3xl font-black text-amber-300">2000</span>
                    <span className="text-xs text-slate-400 font-medium">Tahun Berdiri</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-black text-emerald-400">2 Unit</span>
                    <span className="text-xs text-slate-400 font-medium">Cabang Workshop</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Description Text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                  Tentang PD Jati Mulya
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                  Pengalaman Lebih dari Dua Dekade dalam Seni Kusen &amp; Gypsum
                </h2>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                <strong>PD. JATI MULYA</strong> berfokus pada keunggulan pengolahan kayu dan dekorasi gypsum. Kami memadukan bahan baku kayu mahoni & meranti berkualitas dengan keahlian tangan tukang kayu berpengalaman untuk menciptakan kusen yang tidak hanya kuat, tetapi juga rapi dan berestetika tinggi.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Setiap bagian kusen pintu, jendela, serta lis profil gypsum melewati kontrol pengerjaan yang cermat. Kami siap melayani pengadaan untuk renovasi rumah tinggal pribadi, ruko, kantor, hingga proyek perumahan skala menengah.
              </p>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {[
                  "Kusen Pintu & Jendela Mahoni/Meranti",
                  "Daun Pintu Panel & Minimalis",
                  "Lis Profil Gypsum Berbagai Ukuran",
                  "Kap Lampu & Ornamen Plafon Gypsum",
                  "Menerima Pesanan Kustom Sesuai Ukuran",
                  "Pengiriman Cepat Wilayah Tangerang & Sekitarnya",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-slate-800 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-200/60">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Product Catalog Component ── */}
      <ProductCatalog />

      {/* ── 5. Quick WhatsApp Consultation Banner ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            💬 Konsultasi &amp; Penawaran Harga Gratis
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Punya Desain Khusus atau Mau Konsultasi Ukuran?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Hubungi kami sekarang melalui WhatsApp. Kirimkan ukuran atau sketsa desain kusen kayu dan lis gypsum yang Anda butuhkan untuk mendapatkan estimasi harga terbaik.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6285693934322?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20ingin%20konsultasi%20pemesanan%20kustom%20kusen%20kayu%2Fgypsum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Hubungi via WhatsApp (6285693934322) &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Locations & Contact Section ── */}
      <ContactLocation />
    </div>
  );
}

