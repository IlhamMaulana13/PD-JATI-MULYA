import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-700">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-600/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-700/20 blur-3xl" />
        </div>

        {/* Wood grain texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.3) 2px,
              rgba(255,255,255,0.3) 4px
            )`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-700/50 border border-amber-500/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-amber-100 text-sm font-medium">
              Terpercaya sejak 1995
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Kayu Pilihan,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">
              Kualitas Terjamin
            </span>
          </h1>

          {/* Sub‑heading */}
          <p className="text-amber-200 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            PD Jati Mulya menyediakan berbagai jenis kayu berkualitas tinggi —
            jati, mahoni, dan pinus — langsung dari sumber terpercaya untuk
            kebutuhan furnitur dan konstruksi Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              id="hero-katalog-btn"
              href="/katalog"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-amber-900 font-bold text-base hover:bg-amber-50 active:scale-95 transition-all duration-200 shadow-lg shadow-black/20"
            >
              Lihat Katalog
            </Link>
            <a
              id="hero-whatsapp-btn"
              href="https://wa.me/6281234567890?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20produk%20kayu%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-green-500 text-white font-bold text-base hover:bg-green-600 active:scale-95 transition-all duration-200 shadow-lg shadow-black/20 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.823 9.823 0 01-5.011-1.373l-.36-.214-3.732.888.94-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
              </svg>
              WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* ── Feature Highlights ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-10">
            Mengapa Memilih PD Jati Mulya?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🌳",
                title: "Kualitas Premium",
                desc: "Kayu pilihan langsung dari hutan terpercaya dengan kualitas yang sudah teruji bertahun-tahun.",
              },
              {
                icon: "📦",
                title: "Stok Lengkap",
                desc: "Tersedia berbagai jenis kayu — jati, mahoni, pinus — dalam berbagai ukuran sesuai kebutuhan.",
              },
              {
                icon: "💬",
                title: "Order via WhatsApp",
                desc: "Pemesanan mudah langsung lewat WhatsApp, negosiasi harga, dan pengiriman ke lokasi Anda.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-amber-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Siap Memesan Kayu Anda?
          </h2>
          <p className="text-amber-200 mb-6">
            Hubungi kami sekarang dan dapatkan penawaran terbaik sesuai
            kebutuhan proyek Anda.
          </p>
          <a
            id="cta-whatsapp-btn"
            href="https://wa.me/6281234567890?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20ingin%20memesan%20kayu."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 active:scale-95 transition-all duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.823 9.823 0 01-5.011-1.373l-.36-.214-3.732.888.94-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
            </svg>
            Pesan via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
