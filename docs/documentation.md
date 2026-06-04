# Dokumentasi Teknis - Sistem Deteksi Kecelakaan Otomatis

## 📚 Daftar Isi
1. [Arsitektur Sistem](#arsitektur-sistem)
2. [Alur Kerja Website](#alur-kerja-website)
3. [Dokumentasi API Data](#dokumentasi-api-data)
4. [Panduan Implementasi](#panduan-implementasi)
5. [Best Practice](#best-practice)
6. [Troubleshooting](#troubleshooting)

---

## 🏗️ Arsitektur Sistem

### Struktur Aplikasi
```
┌─────────────────────────────────────┐
│     User Browser / Frontend         │
├─────────────────────────────────────┤
│         HTML5 + Bootstrap 5         │
│    (Presentasi & Layout)            │
├─────────────────────────────────────┤
│   CSS3 (Styling & Responsive)       │
├─────────────────────────────────────┤
│ JavaScript ES6 (Logika & Event)     │
│ ├─ main.js (Core)                   │
│ ├─ data.js (Data Management)        │
│ ├─ chart.js (Visualisasi)          │
│ └─ map.js (Pemetaan)               │
├─────────────────────────────────────┤
│    External Libraries               │
│ ├─ Chart.js 3.9.1                   │
│ ├─ Leaflet.js 1.9.4                 │
│ ├─ Bootstrap 5.3.0                  │
│ └─ Font Awesome 6.4.0               │
├─────────────────────────────────────┤
│   Static Data (JSON Files)          │
│ ├─ accelerometer_normal.json        │
│ ├─ accelerometer_fall.json          │
│ └─ accident_locations.json          │
└─────────────────────────────────────┘
```

### Diagram Alur Data
```
index.html
├── main.js → Inisialisasi halaman
├── CSS files → Styling
└── assets → Media

accelerometer.html
├── data.js → Load JSON data
├── chart.js → Create charts
├── main.js → Navigation
└── Bootstrap/Chart.js libraries

map.html
├── data.js → Load location data
├── map.js → Initialize Leaflet map
├── main.js → Navigation
└── Leaflet.js library

about.html
├── main.js → Navigation
├── CSS styling
└── Bootstrap
```

---

## 🔄 Alur Kerja Website

### 1. Load Halaman Awal (Index.html)
```
User membuka website
    ↓
Browser load index.html
    ↓
Bootstrap CSS di-load
    ↓
main.js dijalankan
    ↓
Halaman ditampilkan dengan navbar dan footer
    ↓
User dapat navigasi ke halaman lain
```

### 2. Load Halaman Accelerometer
```
User klik "Data Accelerometer"
    ↓
accelerometer.html ter-load
    ↓
main.js inisialisasi navbar
    ↓
data.js memulai load data
    ↓
accelerometer_normal.json di-fetch
    ↓
accelerometer_fall.json di-fetch
    ↓
populateTables() mengisi tabel HTML
    ↓
chart.js membuat 3 chart
    ↓
createStatistics() menampilkan stats
    ↓
Halaman selesai dimuat dengan semua data
```

### 3. Load Halaman Map
```
User klik "Peta Lokasi"
    ↓
map.html ter-load
    ↓
Leaflet.js di-load dari CDN
    ↓
map.js dijalankan
    ↓
loadAccidentLocations() fetch JSON
    ↓
Leaflet map di-inisialisasi (Indonesia center)
    ↓
OpenStreetMap tiles di-load
    ↓
addMarkers() menambah setiap lokasi
    ↓
updateLocationStats() update statistics
    ↓
Peta siap interaktif dengan marker
```

### 4. Interaksi User dengan Map
```
User klik marker
    ↓
marker.on('click') event trigger
    ↓
displayLocationInfo() dijalankan
    ↓
Sidebar update dengan info lokasi
    ↓
Popup muncul di map
```

---

## 📡 Dokumentasi API Data

### File: `accelerometer_normal.json`
**Deskripsi**: Data sensor accelerometer saat smartphone dalam posisi normal (tidak jatuh)

**Struktur Data**:
```json
[
    {
        "timestamp": 100,      // Waktu dalam millisecond
        "ax": 0.5,            // Akselerasi pada sumbu X (m/s²)
        "ay": 0.3,            // Akselerasi pada sumbu Y (m/s²)
        "az": 9.8,            // Akselerasi pada sumbu Z (m/s²)
        "resultant": 9.82     // Magnitude resultan (√(ax²+ay²+az²))
    },
    ...
]
```

**Format**: Array of objects
**Jumlah Record**: 20+ sample data
**Sumber Data**: Simulated accelerometer sensor readings

### File: `accelerometer_fall.json`
**Deskripsi**: Data sensor accelerometer saat smartphone dalam posisi jatuh (terdeteksi jatuh)

**Struktur Data**: Sama dengan accelerometer_normal.json

**Ciri Khas Data Jatuh**:
- Nilai resultant lebih besar (biasanya > 15 m/s²)
- Terjadi spike pada akselerasi X, Y, Z
- Pattern menunjukkan perubahan cepat

### File: `accident_locations.json`
**Deskripsi**: Data lokasi-lokasi rawan kecelakaan di Indonesia

**Struktur Data**:
```json
[
    {
        "id": 1,                              // Unique identifier
        "name": "Persimpangan Jln Ahmad Yani", // Nama lokasi
        "address": "Kuningan, Bandung",       // Alamat lengkap
        "latitude": -6.9175,                  // Koordinat latitude
        "longitude": 107.6063,                // Koordinat longitude
        "severity": "critical",               // Level: critical|high|monitor
        "date": "2026-05-15",                 // Tanggal terakhir incident
        "description": "Lokasi rawan dengan...", // Deskripsi
        "incident_count": 12                  // Jumlah insiden terjadi
    },
    ...
]
```

**Severity Levels**:
- `critical` (Merah) - Sangat rawan kecelakaan
- `high` (Orange) - Rawan kecelakaan
- `monitor` (Biru) - Area monitoring

**Format**: Array of objects
**Jumlah Record**: 10+ lokasi di Indonesia

---

## 💡 Panduan Implementasi

### Menambah Data Accelerometer Baru

1. **Buat file JSON baru** (misal: `accelerometer_test.json`)
```json
[
    {
        "timestamp": 100,
        "ax": nilai_x,
        "ay": nilai_y,
        "az": nilai_z,
        "resultant": nilai_resultant
    }
]
```

2. **Update `data.js`**:
```javascript
let accelerometerData = {
    normal: [],
    fall: [],
    test: []  // Tambah property baru
};

async function loadAccelerometerData() {
    // ... existing code ...
    
    // Tambahkan ini:
    const testResponse = await fetch('data/accelerometer_test.json');
    accelerometerData.test = await testResponse.json();
}
```

3. **Update HTML** untuk menampilkan data baru

### Menambah Lokasi Kecelakaan

1. **Tambah object baru** di `accident_locations.json`:
```json
{
    "id": 11,
    "name": "Nama Lokasi Baru",
    "address": "Alamat",
    "latitude": -x.xxxx,
    "longitude": xxx.xxxx,
    "severity": "high",
    "date": "2026-06-01",
    "description": "Deskripsi...",
    "incident_count": 5
}
```

2. **Map otomatis akan update** ketika halaman dimuat ulang

### Membuat Chart Baru

1. **Buat function di `chart.js`**:
```javascript
function createCustomChart() {
    const ctx = document.getElementById('customChart');
    if (!ctx) return;
    
    // Your chart initialization
    new Chart(ctx, {
        type: 'scatter',
        data: {
            // ... data config ...
        },
        options: {
            // ... options ...
        }
    });
}
```

2. **Panggil function** di `initializeCharts()`:
```javascript
async function initializeCharts() {
    // ... existing code ...
    createCustomChart();  // Tambah ini
}
```

3. **Tambahkan canvas** di HTML:
```html
<canvas id="customChart"></canvas>
```

---

## ✅ Best Practice

### 1. **Code Quality**
- ✅ Use meaningful variable names
- ✅ Comment complex functions
- ✅ DRY (Don't Repeat Yourself)
- ✅ KISS (Keep It Simple, Stupid)

### 2. **Performance**
- ✅ Minimize DOM manipulation
- ✅ Use event delegation
- ✅ Cache frequently accessed elements
- ✅ Lazy load images
- ✅ Minify CSS/JS for production

### 3. **Responsiveness**
- ✅ Test di berbagai device
- ✅ Mobile-first approach
- ✅ Flexible layout dengan flexbox/grid
- ✅ Touch-friendly buttons (min 44px)

### 4. **Accessibility**
- ✅ Semantic HTML tags
- ✅ ARIA labels untuk screen readers
- ✅ Keyboard navigation
- ✅ Color contrast ratio > 4.5:1

### 5. **Security**
- ✅ No sensitive data di frontend
- ✅ Validate user input
- ✅ Use HTTPS in production
- ✅ CSP headers

### 6. **Documentation**
- ✅ Comment code
- ✅ README lengkap
- ✅ API documentation
- ✅ Changelog

---

## 🔍 Troubleshooting

### Problem: Chart tidak muncul
**Solusi**:
```javascript
// Pastikan canvas element ada
<canvas id="lineChart"></canvas>

// Pastikan Chart.js ter-load
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>

// Check browser console untuk error
console.log(accelerometerData.normal); // Verifikasi data ada
```

### Problem: Map tidak menampilkan marker
**Solusi**:
```javascript
// Verifikasi Leaflet ter-load
console.log(typeof L); // Harus "object"

// Check koordinat valid
console.log(accidentLocations); // Pastikan data ter-load

// Lihat console untuk error detail
// Network tab untuk check apakah OSM tiles ter-load
```

### Problem: Data tidak ter-load dari JSON
**Solusi**:
```javascript
// Check file path
fetch('data/accelerometer_normal.json')
    .then(response => console.log(response)) // Debug response
    .catch(error => console.error('Error:', error));

// Use relative paths
// Dari accelerometer.html: 'data/accelerometer_normal.json'
// Check file encoding (UTF-8)
```

### Problem: CORS Error di server
**Solusi**:
- Gunakan local development server
- Live Server VSCode
- Python: `python -m http.server 8000`
- PHP: `php -S localhost:8000`

---

## 📱 Responsive Breakpoints

```css
/* Extra small devices (phones, < 576px) */
@media (max-width: 575.98px) { ... }

/* Small devices (landscape phones, >= 576px) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, >= 768px) */
@media (min-width: 768px) { ... }

/* Large devices (desktops, >= 992px) */
@media (min-width: 992px) { ... }

/* Extra large devices (large desktops, >= 1200px) */
@media (min-width: 1200px) { ... }
```

---

## 🎯 Testing Checklist

- [ ] Semua link navigasi bekerja
- [ ] Chart menampilkan data dengan benar
- [ ] Map marker ter-load semua
- [ ] Responsive di mobile, tablet, desktop
- [ ] Tidak ada console error
- [ ] Load time < 3 detik
- [ ] Aksesibilitas OK (keyboard nav)
- [ ] SEO meta tags ada

---

**Last Updated**: Juni 2026
**Version**: 1.0.0
