# PRD: Website Katalog & Profil PD Jati Mulya

## 1. Problem Statement
PD Jati Mulya membutuhkan presensi digital untuk menjangkau lebih banyak pelanggan. Seringkali pelanggan ingin melihat katalog barang, detail profil, dan lokasi toko secara online tanpa harus datang langsung. Dibutuhkan sebuah website profil dan katalog yang responsif, modern, dan tanpa kerumitan sistem backend, yang dapat langsung menghubungkan pelanggan dengan toko melalui WhatsApp dan Email.

## 2. Goals
Membangun MVP (Minimum Viable Product) website *company profile* dan katalog produk untuk PD Jati Mulya menggunakan Next.js dan Tailwind CSS. Website ini beroperasi murni di sisi *frontend* (tanpa backend/menggunakan data statis) dan memfasilitasi komunikasi serta pemesanan langsung melalui API WhatsApp dan Gmail.

## 3. Target Users
1. **Customer (Pelanggan):** Pengguna yang mencari informasi toko, melihat detail produk, mengecek lokasi, dan ingin menghubungi toko untuk pemesanan.
2. **Admin (Pemilik Toko):** Pihak toko yang langsung menerima pesanan, pertanyaan, atau negosiasi harga melalui nomor WhatsApp atau kotak masuk Gmail toko.

## 4. User Stories
- Sebagai **Customer**, saya ingin melihat detail profil toko dan lokasi Google Maps agar saya bisa menemukan alamat fisik toko dengan mudah.
- Sebagai **Customer**, saya ingin melihat katalog produk beserta detailnya dengan tampilan yang jelas dan responsif di HP.
- Sebagai **Customer**, saya ingin bisa mengklik tombol "Pesan" pada produk untuk langsung terhubung dengan WhatsApp toko beserta format pesan otomatis.
- Sebagai **Customer**, saya ingin bisa mengirim pertanyaan umum atau dokumen melalui integrasi langsung ke Gmail toko.

## 5. Functional Requirement
- **Detail Profil & Lokasi:** Halaman yang menampilkan informasi PD Jati Mulya beserta integrasi *embed* Google Maps dari lokasi aslinya.
- **Katalog & Detail Produk:** Menampilkan daftar barang (foto, nama, harga, deskripsi). Data produk disimpan secara statis/lokal (misalnya di dalam file array/JSON) tanpa memerlukan database.
- **Integrasi API WhatsApp:** Tombol interaktif yang mengarahkan ke link `wa.me` dengan membawa parameter teks pesanan (contoh: "Halo, saya tertarik dengan Kayu Jati...").
- **Integrasi Gmail:** Fitur kontak yang menggunakan protokol `mailto:` atau layanan form statis ringan (seperti Formspree) untuk mengirimkan pesan langsung ke Gmail toko.

## 6. Non-Functional Requirement
- **UI/UX:** Tampilan harus *mobile-friendly*, bersih, dan modern menggunakan framework Tailwind CSS.
- **Kecepatan & Performa:** Website harus memuat dengan sangat cepat karena dirender secara statis oleh Next.js tanpa proses *fetching* ke server backend.
- **Kesederhanaan Sistem:** Tidak menggunakan manajemen server, database (SQL/NoSQL), maupun sistem autentikasi untuk menjaga efisiensi kode.

## 7. Scope
- **In-Scope (Dikerjakan):** 
  - Pengembangan UI *Frontend* menggunakan Next.js (App Router).
  - *Styling* desain menggunakan Tailwind CSS.
  - Penyimpanan data detail produk secara *hardcoded* lokal.
  - Integrasi *direct link* ke API WhatsApp dan Gmail.
  - Integrasi *embed* Google Maps.
- **Out-of-Scope (Tidak Dikerjakan / Ditunda):** 
  - Pengembangan *Backend* dan integrasi Database (Node.js, MySQL, dll).
  - Sistem Autentikasi (Login/Register Admin/User).
  - Sistem Keranjang Belanja (Cart) dinamis.
  - Sistem Pembayaran Otomatis (*Payment Gateway*).