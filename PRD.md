# PRD: Website Katalog & Profil PD Jati Mulya

## 1. Problem Statement
PD Jati Mulya membutuhkan presensi digital untuk menjangkau lebih banyak pelanggan. Seringkali pelanggan ingin melihat katalog barang, detail profil, dan lokasi toko secara online tanpa harus datang langsung. Dibutuhkan sebuah website profil dan katalog yang responsif, modern, dan tanpa kerumitan sistem backend, yang dapat langsung menghubungkan pelanggan dengan toko melalui WhatsApp dan Email, serta menyediakan akses login purwarupa bagi admin untuk kebutuhan penelitian dan pengembangan lebih lanjut.

## 2. Goals
Membangun MVP (Minimum Viable Product) website *company profile* dan katalog produk untuk PD Jati Mulya menggunakan Next.js (App Router) dan Tailwind CSS. Website ini beroperasi murni di sisi *frontend* (tanpa ketergantungan database sungguhan/menggunakan data statis), memfasilitasi komunikasi serta pemesanan langsung melalui API WhatsApp dan Gmail, serta menyediakan sistem login admin konvensional sederhana untuk purwarupa dashboard toko.

## 3. Target Users
1. **Customer (Pelanggan):** Pengguna yang mencari informasi toko, melihat detail produk, mengecek lokasi, dan ingin menghubungi toko untuk pemesanan.
2. **Admin (Pemilik/Pengelola Toko):** Pihak toko yang mengelola informasi, menerima pesanan melalui WhatsApp/Gmail, serta mengakses dashboard admin purwarupa untuk monitoring dan penelitian.

## 4. User Stories
- Sebagai **Customer**, saya ingin melihat detail profil toko dan lokasi Google Maps agar saya bisa menemukan alamat fisik toko dengan mudah.
- Sebagai **Customer**, saya ingin melihat katalog produk beserta detailnya dengan tampilan yang jelas dan responsif di HP.
- Sebagai **Customer**, saya ingin bisa mengklik tombol "Pesan" pada produk untuk langsung terhubung dengan WhatsApp toko beserta format pesan otomatis.
- Sebagai **Customer**, saya ingin bisa mengirim pertanyaan umum atau dokumen melalui integrasi langsung ke Gmail toko.
- Sebagai **Admin**, saya ingin melakukan login sederhana menggunakan username dan password terdaftar (*hardcoded*) untuk masuk ke halaman dashboard admin purwarupa.
- Sebagai **Admin**, saya ingin menerima pesan galat yang informatif jika memasukkan kombinasi username atau password yang salah.
- Sebagai **Admin**, saya ingin keluar (*logout*) dari dashboard admin untuk kembali ke halaman utama website.

## 5. Functional Requirement
- **Detail Profil & Lokasi:** Halaman yang menampilkan informasi PD Jati Mulya beserta integrasi *embed* Google Maps dari lokasi aslinya.
- **Katalog & Detail Produk:** Menampilkan daftar barang (foto, nama, harga, deskripsi). Data produk disimpan secara statis/lokal (misalnya di dalam file array/JSON) tanpa memerlukan database.
- **Integrasi API WhatsApp:** Tombol interaktif yang mengarahkan ke link `wa.me` dengan membawa parameter teks pesanan (contoh: "Halo, saya tertarik dengan Kayu Jati...").
- **Integrasi Gmail:** Fitur kontak yang menggunakan protokol `mailto:` atau layanan form statis ringan (seperti Formspree) untuk mengirimkan pesan langsung ke Gmail toko.
- **Sistem Login Admin Konvensional (Sederhana / Purwarupa):**
  - Halaman login (`/login`) dengan form input *Username* dan *Password*, serta tombol submit "Login".
  - Logika validasi *hardcoded* (teks murni, contoh: `username === "admin"` dan `password === "admin123"`).
  - Penanganan pesan galat (*error handling*): Menampilkan pesan "Username atau Password salah!" di bawah form ketika kredensial tidak sesuai.
  - Pengalihan halaman (*redirection*): Mengarahkan pengguna langsung ke `/admin/dashboard` ketika login berhasil.
  - Halaman Dashboard Purwarupa (`/admin/dashboard`): Menampilkan teks "Selamat datang di Dashboard PD Jati Mulya" dan tombol "Logout" untuk mengembalikan pengguna ke halaman utama (`/`).

## 6. Non-Functional Requirement
- **UI/UX:** Tampilan harus *mobile-friendly*, bersih, elegan, dan modern menggunakan framework Tailwind CSS.
- **Kecepatan & Performa:** Website memuat dengan cepat karena dirender secara optimal oleh Next.js tanpa proses *fetching* ke server database eksternal.
- **Kesederhanaan Sistem:** Menggunakan arsitektur purwarupa sederhana tanpa instalasi manajemen database server (SQL/NoSQL) guna mempermudah pengujian, portabilitas, dan iterasi penelitian.
- **Kemudahan Pengembangan (Maintainability):** Kode frontend dan logika login dibuat terstruktur dan bersih sehingga mudah dikembangkan lebih lanjut menjadi sistem autentikasi penuh di masa mendatang.

## 7. Scope
- **In-Scope (Dikerjakan):** 
  - Pengembangan UI *Frontend* menggunakan Next.js (App Router).
  - *Styling* desain modern & responsif menggunakan Tailwind CSS.
  - Penyimpanan data detail produk secara *hardcoded* lokal.
  - Integrasi *direct link* ke API WhatsApp dan Gmail.
  - Integrasi *embed* Google Maps.
  - Implementasi Halaman Login Admin (`/login`) dengan form input dan penanganan pesan error.
  - Implementasi logika validasi kredensial *hardcoded* dan pengalihan ke dashboard.
  - Implementasi Halaman Dashboard Admin Purwarupa (`/admin/dashboard`) dengan ucapan selamat datang dan tombol Logout.
  - Integrasi Supabase untuk modul pencatatan transaksi keuangan.
- **Out-of-Scope (Tidak Dikerjakan / Ditunda):** 
  - Sistem Registrasi Akun Mandiri (*Self-Registration*) dan manajemen multi-level user dinamis.
  - Sistem Keranjang Belanja (*Cart*) dinamis.
  - Sistem Pembayaran Otomatis (*Payment Gateway*).