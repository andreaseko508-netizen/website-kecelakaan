# Sistem Deteksi Kecelakaan Otomatis Berbasis Smartphone

Website Informasi Penelitian Skripsi

## 📋 Deskripsi Proyek

Website ini merupakan platform informasi pendukung penelitian skripsi dengan judul:

**"Sistem Deteksi Kecelakaan Otomatis Berbasis Smartphone Menggunakan Algoritma Decision Tree untuk Meningkatkan Keselamatan Pengguna Jalan"**

Website ini bersifat informatif dan dirancang untuk:
- Menampilkan hasil penelitian dan analisis data
- Visualisasi data sensor accelerometer
- Pemetaan lokasi rawan kecelakaan
- Dokumentasi lengkap tentang sistem dan metodologi penelitian

## 🎯 Fitur Utama

### 1. **Beranda (Home)**
- Hero section dengan deskripsi penelitian
- Tujuan sistem
- Teknologi yang digunakan
- Fitur utama website
- Call-to-action ke halaman lain

### 2. **Data Accelerometer**
- Tabel data resultan accelerometer posisi normal (tidak jatuh)
- Tabel data resultan accelerometer posisi jatuh
- Grafik perbandingan menggunakan Chart.js:
  - Line chart untuk perbandingan data
  - Bar chart untuk nilai statistik
  - Doughnut chart untuk distribusi data
- Statistik lengkap data

### 3. **Peta Lokasi Rawan Kecelakaan**
- Integrasi Leaflet.js untuk peta interaktif
- Marker lokasi rawan kecelakaan dengan berbagai level severity
- Popup informasi pada setiap marker
- Sidebar dengan informasi detail lokasi
- Legenda untuk memahami marker
- Statistik lokasi berdasarkan severity level

### 4. **Tentang Sistem**
- Profil penelitian dan judul lengkap
- Latar belakang penelitian
- Tujuan penelitian (umum dan khusus)
- Teknologi yang digunakan
- Profil peneliti dan pembimbing
- Metodologi penelitian
- Hasil yang diharapkan

### 5. **Footer**
- Informasi copyright
- Universitas Timor
- Tahun penelitian
- Link navigasi cepat

## 📁 Struktur Folder

```
website-kecelakaan/
│
├── index.html                      # Halaman utama/beranda
├── accelerometer.html              # Halaman data accelerometer
├── map.html                        # Halaman peta lokasi
├── about.html                      # Halaman tentang sistem
│
├── assets/                         # Folder untuk aset
│   ├── images/                     # Gambar dan logo
│   ├── icons/                      # Icon-icon custom
│   ├── logos/                      # Logo universitas
│   └── datasets/                   # Dataset tambahan
│
├── css/                            # Stylesheet
│   ├── style.css                   # CSS global dan utility
│   ├── home.css                    # CSS halaman home
│   ├── accelerometer.css           # CSS halaman accelerometer
│   ├── map.css                     # CSS halaman map
│   └── about.css                   # CSS halaman about
│
├── js/                             # JavaScript
│   ├── main.js                     # Main JS dan inisialisasi
│   ├── data.js                     # Data management
│   ├── chart.js                    # Chart.js initialization
│   └── map.js                      # Leaflet.js initialization
│
├── data/                           # Data JSON
│   ├── accelerometer_normal.json   # Data accelerometer posisi normal
│   ├── accelerometer_fall.json     # Data accelerometer posisi jatuh
│   └── accident_locations.json     # Data lokasi kecelakaan
│
├── components/                     # Komponen reusable
│   ├── navbar.html                 # Navbar component
│   ├── footer.html                 # Footer component
│   └── hero.html                   # Hero section component
│
├── docs/                           # Dokumentasi
│   ├── README.md                   # File ini
│   └── documentation.md            # Dokumentasi teknis lengkap
│
└── .gitignore                      # File yang diabaikan git
```

## 💻 Teknologi yang Digunakan

### Frontend
- **HTML5** - Struktur halaman
- **CSS3** - Styling dan layout
- **JavaScript ES6** - Interaktifitas
- **Bootstrap 5** - Framework CSS responsive
- **Chart.js 3.9.1** - Visualisasi data grafik
- **Leaflet.js 1.9.4** - Peta interaktif
- **Font Awesome 6.4.0** - Icon library

### Tools & Library
- **Git** - Version control
- **VS Code** - Editor
- **Live Server** - Development server

## 🚀 Cara Membuka & Menjalankan

### Prerequisites
- Browser modern (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Live Server extension (optional, untuk development)

### Langkah-langkah

1. **Clone atau download project**
```bash
git clone <repository-url>
cd website-kecelakaan
```

2. **Buka dengan Live Server**
   - Klik kanan pada `index.html`
   - Pilih "Open with Live Server"
   - Atau gunakan perintah: `python -m http.server 8000` atau `php -S localhost:8000`

3. **Akses di browser**
   - http://localhost:5500 (jika menggunakan Live Server)
   - http://localhost:8000 (jika menggunakan Python/PHP)

## 📊 Struktur Data

### Accelerometer Data (JSON)
```json
{
    "timestamp": 100,           // ms
    "ax": 0.5,                  // Akselerasi X (m/s²)
    "ay": 0.3,                  // Akselerasi Y (m/s²)
    "az": 9.8,                  // Akselerasi Z (m/s²)
    "resultant": 9.82           // Resultan (m/s²)
}
```

### Accident Locations (JSON)
```json
{
    "id": 1,                      // Unique ID
    "name": "Nama Lokasi",        // Nama lokasi
    "address": "Alamat Lengkap",  // Alamat
    "latitude": -6.9175,          // Koordinat latitude
    "longitude": 107.6063,        // Koordinat longitude
    "severity": "critical",       // Level: critical, high, monitor
    "date": "2026-05-15",         // Tanggal insiden
    "description": "Deskripsi",   // Deskripsi lokasi
    "incident_count": 12          // Jumlah insiden
}
```

## 🔧 Fitur Teknis

### JavaScript Modules
- **main.js** - Inisialisasi halaman, smooth scroll, navbar
- **data.js** - Load data JSON, statistik, filtering
- **chart.js** - Buat chart dengan Chart.js
- **map.js** - Inisialisasi map Leaflet, marker, popup

### Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- All pages fully responsive

### Accessibility
- Semantic HTML5
- ARIA labels
- Keyboard navigation support
- Color contrast compliance

## 📖 Panduan Pengembangan

### Menambah Halaman Baru
1. Buat file HTML baru di root folder
2. Gunakan template dari halaman yang sudah ada
3. Tambahkan CSS khusus di folder `css/`
4. Import JavaScript yang diperlukan
5. Update navbar di semua halaman

### Menambah Data Baru
1. Buat file JSON baru di folder `data/`
2. Update `data.js` untuk load data baru
3. Buat fungsi untuk manage data
4. Update halaman yang relevan

### Styling Guidelines
- Gunakan CSS custom properties untuk konsistensi
- Follow Bootstrap utility class conventions
- Mobile-first approach dalam media queries
- Test di berbagai ukuran layar

## ⚙️ Konfigurasi

### Chart.js Configuration
- Responsive charts
- Doughnut, Bar, dan Line chart types
- Custom colors dan styling
- Legend positioning

### Leaflet Configuration
- Base layer: OpenStreetMap
- Custom marker colors berdasarkan severity
- Popup dengan HTML content
- Map center: Indonesia

## 🐛 Troubleshooting

### Data tidak muncul di tabel
- Check browser console untuk error message
- Verifikasi file JSON ada di folder `data/`
- Cek path ke file JSON di `data.js`

### Map tidak menampilkan marker
- Buka browser console
- Cek apakah `accident_locations.json` ter-load
- Verifikasi Leaflet.js library ter-load dengan benar

### Chart tidak menampilkan
- Cek apakah Chart.js library ter-load
- Verifikasi ID canvas element sesuai dengan kode JavaScript
- Cek data di browser console

## 📝 Best Practice yang Diimplementasikan

1. **Code Organization**
   - Separasi HTML, CSS, dan JS
   - Modular dan reusable components
   - Clear folder structure

2. **Performance**
   - Minified CSS dan JS (dalam production)
   - Lazy loading untuk images
   - CDN untuk external libraries

3. **Security**
   - No sensitive data di frontend
   - CSP (Content Security Policy) ready
   - Input validation

4. **SEO**
   - Meta tags
   - Semantic HTML
   - Descriptive titles dan descriptions

5. **Maintainability**
   - Clear variable names
   - Comments pada fungsi kompleks
   - Consistent coding style
   - Version control dengan Git

## 🤝 Kontribusi

Untuk pengembangan lebih lanjut:
1. Tambahkan fitur export data (CSV, PDF)
2. Implementasi backend API
3. Database integration
4. Real-time data update
5. User authentication

## 📄 Lisensi

© 2026 Universitas Timor - Sistem Deteksi Kecelakaan Otomatis

## 👨‍💼 Kontak

**Universitas Timor**
- Prodi: Sistem Informasi
- Email: si@unimor.ac.id
- Website: www.unimor.ac.id

---

**Last Updated**: Juni 2026
