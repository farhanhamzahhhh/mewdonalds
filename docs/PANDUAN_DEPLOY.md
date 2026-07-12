# Panduan Deploy Website Statis ke Hostinger / Niagahoster

Dokumen ini berisi panduan langkah demi langkah untuk mengupload website Mewdon (yang sudah diubah menjadi versi statis yang sangat ringan) ke layanan hosting Anda.

## Persiapan
Pastikan Anda sudah memiliki file **`mewdon.zip`** di komputer Anda. File ini berisi seluruh website Anda yang sudah siap tayang tanpa memerlukan setting server Node.js yang rumit.

---

## Langkah-langkah Upload

### 1. Login ke Panel Hosting
1. Buka browser dan akses halaman login panel hosting Anda (hPanel untuk Hostinger atau member area Niagahoster).
2. Masukkan email dan password akun Anda untuk login.

### 2. Buka File Manager
1. Di halaman utama (Dashboard) panel, cari menu **Websites** (Situs Web) dan pilih domain yang ingin Anda gunakan (misal: `belitoyotajakarta.com`).
2. Klik tombol **Manage** (Kelola).
3. Di panel manajemen domain tersebut, cari bagian **Files** (File) dan klik menu **File Manager** (Manajer File).

### 3. Masuk ke Folder Utama Website (`public_html`)
1. Setelah File Manager terbuka, Anda akan melihat daftar folder dari server Anda.
2. Cari folder bernama **`public_html`** dan klik dua kali untuk masuk ke dalamnya.
   > **Penting:** Folder `public_html` adalah "etalase" utama. Semua file yang ditaruh di sini akan langsung bisa diakses oleh pengunjung di internet.

### 4. Bersihkan File Bawaan (Jika Ada)
1. Jika domain Anda masih baru, biasanya pihak hosting menyediakan file bawaan seperti `default.php` atau file `index` bawaan hosting.
2. Klik kanan pada file tersebut dan pilih **Delete** (Hapus). Ruang ini harus kosong sebelum kita menaruh file website Anda agar tidak terjadi bentrok.

### 5. Upload File Zip
1. Saat Anda masih berada di dalam folder `public_html`, cari tombol **Upload** (biasanya berupa ikon awan dengan panah ke atas di pojok kanan atas layar).
2. Pilih opsi **File**.
3. Cari dan pilih file `mewdon.zip` yang ada di komputer Anda.
4. Tunggu hingga proses upload mencapai 100%.

### 6. Extract (Bongkar) File Zip
1. Setelah `mewdon.zip` berhasil diupload, Anda akan melihat file tersebut di dalam File Manager.
2. **Klik kanan** pada file `mewdon.zip` tersebut.
3. Pilih menu **Extract** (Ekstrak).
4. Akan muncul popup konfirmasi folder tujuan. Pastikan foldernya tetap mengarah ke `/public_html` (atau biarkan kosong/titik jika diminta).
5. Klik tombol **Extract**.

### 7. Verifikasi dan Selesai
1. Proses ekstrak akan mengeluarkan file-file seperti `index.html`, `whitepaper.html`, folder `_next`, folder `fonts`, dll langsung ke dalam `public_html`.
2. *(Opsional)* Untuk menghemat penyimpanan hosting, Anda sekarang boleh menghapus file `mewdon.zip` yang ada di File Manager karena isinya sudah dikeluarkan.
3. Buka tab baru di browser Anda dan ketikkan alamat domain Anda (contoh: `https://domain-anda.com`).
4. **Selamat!** Website Mewdon versi super ringan Anda sudah berhasil tayang! 🎉

---

## 💡 Tips Tambahan: Cara Update Website di Kemudian Hari
Jika suatu saat Anda mengubah gambar, teks, atau kode pada project ini di komputer Anda, ikuti langkah singkat ini untuk mengupdatenya di hosting:
1. Jalankan perintah `npm run build` di terminal komputer Anda.
2. Buka folder `out` di project Anda, lalu jadikan satu `.zip` (seperti yang kita lakukan tadi).
3. Masuk ke File Manager hosting Anda di `public_html`, hapus semua file lama.
4. Upload `.zip` yang baru, lalu Extract lagi.
