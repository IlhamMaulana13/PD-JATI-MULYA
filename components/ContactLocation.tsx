export default function ContactLocation() {
  return (
    <div className="space-y-0">
      {/* ── Section Cabang / Lokasi Workshop ── */}
      <section id="lokasi" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Workshop & Cabang Resmi
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Kunjungi Workshop & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600">
                Pusat Produksi Kami
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Kami memiliki 2 lokasi cabang strategis di Kabupaten Tangerang yang siap melayani pesanan kusen kayu & lis gypsum Anda secara langsung.
            </p>
          </div>

          {/* Branch Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cabang 1 */}
            <div className="group bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-110 transition-transform">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        PD. JATI MULYA I
                      </h3>
                      <span className="text-xs font-bold text-amber-700 tracking-wide uppercase bg-amber-100/80 px-2.5 py-0.5 rounded-md">
                        Workshop Utama Mauk
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    Produksi & Gudang
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  📍 Jl. Raya Mauk Km.16 No RT.003/001 Desa Jatiwaringin, Kec. Mauk, Kab. Tangerang, Banten 15531
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Jl.+Raya+Mauk+Km.16+No+RT.003/001+Desa+Jatiwaringin+Mauk+Tangerang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Buka di Google Maps</span>
                </a>
              </div>
            </div>

            {/* Cabang 2 */}
            <div className="group bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-amber-600 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-110 transition-transform">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        PD. JATI MULYA II
                      </h3>
                      <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase bg-emerald-100/80 px-2.5 py-0.5 rounded-md">
                        Cabang Teluknaga
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    Layanan & Display
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  📍 Kampung Tukang Kajang No.RT 002/021, Kp. Melayu Timur, Kec. Teluknaga, Kabupaten Tangerang, Banten 15510
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Kampung+Tukang+Kajang+Kp.+Melayu+Timur+Teluknaga+Tangerang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Buka di Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section Kontak & Google Maps Interactive ── */}
      <section id="kontak" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Info Kontak & Fast Actions */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 bg-emerald-950/60 rounded-full border border-emerald-800/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Layanan Cepat & Konsultasi Gratis
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight leading-tight">
                  Konsultasikan Kebutuhan Proyek Anda
                </h2>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4">
                  Tim kami siap menjawab pertanyaan seputar spesifikasi kayu (Mahoni & Meranti), estimasi harga, pembuatan pola kustom, serta jadwal pengiriman.
                </p>
              </div>

              {/* Bento Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="text-2xl mb-2 block">📞</span>
                  <span className="text-xs text-slate-400 font-semibold block">Telepon / WhatsApp</span>
                  <span className="text-white font-black text-base block mt-0.5">6285693934322</span>
                  <span className="text-[11px] text-emerald-400 font-medium">Fast response 24/7 chat</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="text-2xl mb-2 block">✉️</span>
                  <span className="text-xs text-slate-400 font-semibold block">Email Resmi</span>
                  <span className="text-white font-black text-base block mt-0.5 truncate">hamsaviero7@gmail.com</span>
                  <span className="text-[11px] text-slate-400 font-medium">Penawaran proyek resmi</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 sm:col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕒</span>
                    <div>
                      <span className="text-xs text-slate-400 font-semibold block">Jam Operasional Toko</span>
                      <span className="text-white font-bold text-sm block">Senin — Minggu: 06.30 - 22.00 WIB</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Buka Setiap Hari
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://wa.me/6285693934322?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pemesanan%20kayu%2Fgypsum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-extrabold text-sm shadow-xl hover:shadow-emerald-600/30 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.823 9.823 0 01-5.011-1.373l-.36-.214-3.732.888.94-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                  </svg>
                  <span>Hubungi via WhatsApp</span>
                </a>

                <a
                  href="mailto:hamsaviero7@gmail.com?subject=Tanya%20Produk%20PD%20Jati%20Mulya"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-extrabold text-sm border border-slate-700 shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>Kirim Email Resmi</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="lg:col-span-6">
              <div className="h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123456789!2d106.542203!3d-6.084594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6991a2e0e1f7c5%3A0xabcdef1234567890!2sPD.%20JATI%20MULYA%20I%20(Workshop)!5e0!3m2!1sen!2sid!4v0000000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Peta Lokasi Workshop PD Jati Mulya"
                  className="grayscale-20 contrast-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

