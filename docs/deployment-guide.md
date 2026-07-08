# Panduan Deployment Mew Donalds ke GitHub Pages & Niagahoster

Panduan ini menjelaskan langkah demi langkah untuk men-deploy landing page **Mew Donalds ($MEWDON)** ke **GitHub Pages** menggunakan metode otomatis **GitHub Actions**, serta cara menghubungkan domain kustom yang dibeli dari **Niagahoster**.

---

## Bagian 1: Konfigurasi Proyek (Sudah Diatur)
Kami telah melakukan konfigurasi dasar pada proyek Next.js Anda agar siap diekspor sebagai situs statis murni:
1.  **Ekspor Statis**: Mengaktifkan `output: 'export'` dan menonaktifkan optimasi gambar bawaan server (`unoptimized: true`) pada file [next.config.mjs](file:///home/amirfaisalz/Documents/hamzah/mewdonalds_/next.config.mjs).
2.  **GitHub Actions**: Membuat file alur kerja otomatis (workflow) di [.github/workflows/deploy.yml](file:///home/amirfaisalz/Documents/hamzah/mewdonalds_/.github/workflows/deploy.yml).

---

## Bagian 2: Langkah Menghubungkan Domain di Niagahoster

Sebelum mengaktifkan GitHub Pages, Anda perlu mengarahkan domain Anda di Niagahoster ke server GitHub.

### Langkah 1: Masuk ke DNS Management Niagahoster
1. Log in ke **Member Area Niagahoster** Anda.
2. Klik menu **Layanan Anda** > **Domain**.
3. Cari domain yang ingin Anda gunakan (misal: `mewdonalds.com`), lalu klik tombol **Kelola Domain**.
4. Masuk ke tab **DNS Management** atau **Zone Editor**.

### Langkah 2: Tambahkan Record DNS
Anda perlu menambahkan **4 Record A** (untuk domain utama/Apex domain seperti `mewdonalds.com`) dan **1 Record CNAME** (untuk subdomain `www.mewdonalds.com`).

#### A. Tambahkan Record A (Arahkan ke IP GitHub Pages)
Buat **4 buah Record A** baru dengan konfigurasi sebagai berikut:

| No | Tipe | Name/Host | Value (IP Target) | TTL |
|----|------|-----------|-------------------|-----|
| 1  | A    | `@`       | `185.199.108.153` | 3600|
| 2  | A    | `@`       | `185.199.109.153` | 3600|
| 3  | A    | `@`       | `185.199.110.153` | 3600|
| 4  | A    | `@`       | `185.199.111.153` | 3600|

*Catatan: Jika kolom "Name" tidak menerima karakter `@`, Anda bisa mengosongkannya atau memasukkan nama domain utama Anda.*

#### B. Tambahkan Record CNAME (Arahkan subdomain ke GitHub)
Buat **1 Record CNAME** baru dengan konfigurasi sebagai berikut:

| Tipe | Name/Host | Value (CNAME Target) | TTL |
|------|-----------|----------------------|-----|
| CNAME| `www`     | `farhanhamzahhhh.github.io` | 3600 |

*Catatan: Pastikan `farhanhamzahhhh.github.io` disesuaikan dengan nama pengguna GitHub Anda.*

---

## Bagian 3: Konfigurasi Repositori di GitHub

Setelah DNS di Niagahoster selesai diatur (proses propagasi DNS biasanya memakan waktu 5-30 menit, paling lambat 24 jam), langkah berikutnya adalah mengaktifkan GitHub Pages di repositori Anda.

### Langkah 1: Ubah Pengaturan Build & Deployment di GitHub
1. Buka halaman repositori Anda di GitHub: `https://github.com/farhanhamzahhhh/mewdonalds`.
2. Klik tab **Settings** di barisan menu atas repositori.
3. Di panel sebelah kiri, pilih menu **Pages**.
4. Di bagian **Build and deployment** > **Source**, ganti pilihan dari `"Deploy from a branch"` menjadi **`GitHub Actions`**.

### Langkah 2: Lakukan Push ke GitHub
Karena workflow otomatis sudah kita buat di proyek lokal, Anda cukup melakukan push ke branch `development` atau `master` di GitHub. 

GitHub akan secara otomatis memicu proses build Next.js dan merilis hasilnya ke server hosting GitHub Pages. Anda bisa memantau jalannya deployment ini di tab **Actions** pada repositori GitHub Anda.

### Langkah 3: Daftarkan Domain Kustom di GitHub Pages
1. Kembali ke menu **Settings** > **Pages** di GitHub.
2. Di bagian **Custom domain**, masukkan nama domain kustom Anda (misal: `mewdonalds.com` atau `www.mewdonalds.com`).
3. Klik tombol **Save**.
4. Centang bagian **Enforce HTTPS** (Opsi ini mungkin membutuhkan waktu beberapa menit sampai berstatus aktif selagi GitHub menyiapkan sertifikat SSL gratis untuk domain Anda).

---

## Bagian 4: Pengujian & Penyelesaian
*   Setelah semua proses di atas selesai dan berstatus sukses di tab *Actions*, Anda dapat mengakses website Mew Donalds Anda melalui domain kustom baru Anda!
*   File [CNAME](file:///home/amirfaisalz/Documents/hamzah/mewdonalds_/CNAME) di folder utama repositori Anda memastikan bahwa GitHub Pages mengetahui domain kustom mana yang terikat dengan proyek ini.
