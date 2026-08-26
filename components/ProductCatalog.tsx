import Image from "next/image";
import { produkData } from "@/data/produk";

export default function ProductCatalog() {
  return (
    <section id="produk" className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-800 font-bold uppercase tracking-wider text-xs px-3 py-1 bg-amber-100 rounded-full border border-amber-200">
            Katalog Produk Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950 mt-3 mb-4">
            Kusen Kayu & Lis Gypsum berkualitas
          </h2>
          <p className="text-amber-800 text-sm sm:text-base leading-relaxed">
            Dibuat dari material kayu mahoni dan meranti pilihan dengan presisi tinggi serta lis gypsum yang rapi untuk keindahan hunian Anda.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produkData.map((item) => {
            const waUrl = `https://wa.me/6287878361870?text=${encodeURIComponent(
              item.waMessage
            )}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-amber-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-52 w-full overflow-hidden bg-amber-100">
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-amber-900/80 backdrop-blur-md text-amber-100 text-xs font-semibold px-2.5 py-1 rounded-md">
                      {item.kategori}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amber-950 mb-2 group-hover:text-amber-800 transition-colors">
                      {item.nama}
                    </h3>
                    <p className="text-amber-800/80 text-sm leading-relaxed mb-4">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>

                {/* Footer Button */}
                <div className="px-6 pb-6 pt-0">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-sm transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.823 9.823 0 01-5.011-1.373l-.36-.214-3.732.888.94-3.638-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                    </svg>
                    Pesan via WA
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
