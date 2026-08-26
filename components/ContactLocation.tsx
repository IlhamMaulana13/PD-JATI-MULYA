export default function ContactLocation() {
  return (
    <div className="space-y-16">
      {/* Section Cabang / Lokasi Workshop */}
      <section id="lokasi" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-800 font-bold uppercase tracking-wider text-xs px-3 py-1 bg-amber-100 rounded-full border border-amber-200">
              Lokasi Workshop & Cabang
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950 mt-3 mb-4">
              Kunjungi Workshop Kami
            </h2>
            <p className="text-amber-800 text-sm sm:text-base">
              Kami memiliki 2 lokasi cabang utama di Kab. Tangerang untuk melayani pemesanan kusen kayu & lis gypsum Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cabang 1 */}
            <div className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-800 text-amber-100 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-950">PD. JATI MULYA I</h3>
                  <span className="text-xs font-semibold text-amber-700">Workshop Mauk</span>
                </div>
              </div>
              <p className="text-amber-900 text-sm leading-relaxed mb-4">
                📍 Jl. Raya Mauk Km.16 No RT.003/001 Desa Jatiwaringin, Kec. Mauk, Kab. Tangerang, Banten 15531
              </p>
              <a
                href="https://maps.google.com/?q=Jl.+Raya+Mauk+Km.16+No+RT.003/001+Desa+Jatiwaringin+Mauk+Tangerang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 underline"
              >
                Buka di Google Maps &rarr;
              </a>
            </div>

            {/* Cabang 2 */}
            <div className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-800 text-amber-100 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-950">PD. JATI MULYA II</h3>
                  <span className="text-xs font-semibold text-amber-700">Cabang Teluknaga</span>
                </div>
              </div>
              <p className="text-amber-900 text-sm leading-relaxed mb-4">
                📍 Kampung Tukang Kajang No.RT 002/021, Kp. Melayu Timur, Kec. Teluknaga, Kabupaten Tangerang, Banten 15510
              </p>
              <a
                href="https://maps.google.com/?q=Kampung+Tukang+Kajang+Kp.+Melayu+Timur+Teluknaga+Tangerang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 underline"
              >
                Buka di Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Kontak & Maps */}
      <section id="kontak" className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-950 text-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Info Kontak & Action Buttons */}
            <div>
              <span className="text-amber-300 font-bold uppercase tracking-wider text-xs px-3 py-1 bg-amber-900/80 rounded-full border border-amber-700">
                Hubungi & Konsultasi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
                Informasi Kontak & Jam Operasional
              </h2>
              <p className="text-amber-200 text-sm sm:text-base leading-relaxed mb-8">
                Siap melayani pemesanan khusus kusen kayu jati, mahoni, meranti, serta pembuatan lis gypsum sesuai permintaan Anda.
              </p>

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold text-lg">📞</span>
                  <div>
                    <strong className="block text-amber-200 font-semibold">Telepon / WhatsApp</strong>
                    <span className="text-white text-base font-bold">+62 878 7836 1870</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold text-lg">✉️</span>
                  <div>
                    <strong className="block text-amber-200 font-semibold">Email Resmi</strong>
                    <span className="text-white text-base">hamsaviero7@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold text-lg">🕒</span>
                  <div>
                    <strong className="block text-amber-200 font-semibold">Jam Operasional</strong>
                    <span className="text-white">Senin - Minggu: 06.30 - 22.00 WIB</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WA & Gmail */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6287878361870?text=Halo%20PD%20Jati%20Mulya%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pemesanan%20kayu%2Fgypsum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-sm shadow-lg transition-all"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.823 9.823 0 01-5.011-1.373l-.36-.214-3.732.888.94-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                  </svg>
                  Chat WhatsApp
                </a>

                <a
                  href="mailto:hamsaviero7@gmail.com?subject=Tanya%20Produk%20PD%20Jati%20Mulya"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-700 active:scale-95 text-white font-bold text-sm border border-amber-700 shadow-lg transition-all"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  Kirim Gmail
                </a>
              </div>
            </div>

            {/* Embed Google Maps */}
            <div className="h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-amber-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123456789!2d106.542203!3d-6.084594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6991a2e0e1f7c5%3A0xabcdef1234567890!2sPD.%20JATI%20MULYA%20I%20(Workshop)!5e0!3m2!1sen!2sid!4v0000000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Peta Lokasi PD Jati Mulya"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
