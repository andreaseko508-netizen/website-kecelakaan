# RINGKASAN LENGKAP STRUKTUR PROJECT

## 📋 Informasi Project

**Judul Penelitian:**
Sistem Deteksi Kecelakaan Otomatis Berbasis Smartphone Menggunakan Algoritma Decision Tree untuk Meningkatkan Keselamatan Pengguna Jalan

**Universitas:** Universitas Timor  
**Program Studi:** Sistem Informasi  
**Tipe:** Website Informasi (Non-Login, No Admin Dashboard)  
**Status:** Siap Dibuka di VS Code

---

## 🌳 STRUKTUR FOLDER LENGKAP

```
website-kecelakaan/
│
├── 📄 index.html                           [HALAMAN UTAMA - BERANDA]
├── 📄 accelerometer.html                   [HALAMAN DATA ACCELEROMETER]
├── 📄 map.html                             [HALAMAN PETA LOKASI KECELAKAAN]
├── 📄 about.html                           [HALAMAN TENTANG SISTEM]
│
├── 📁 assets/                              [FOLDER ASET - MEDIA & DATASETS]
│   ├── 📁 images/                          [Gambar dan foto (placeholder kosong)]
│   ├── 📁 icons/                           [Icon custom (placeholder kosong)]
│   ├── 📁 logos/                           [Logo universitas (placeholder kosong)]
│   └── 📁 datasets/                        [Dataset tambahan (placeholder kosong)]
│
├── 📁 css/                                 [FOLDER STYLESHEET - STYLING]
│   ├── 📄 style.css                        [CSS Global - Utility & Reusable]
│   ├── 📄 home.css                         [CSS Halaman Home]
│   ├── 📄 accelerometer.css                [CSS Halaman Accelerometer]
│   ├── 📄 map.css                          [CSS Halaman Map]
│   └── 📄 about.css                        [CSS Halaman About]
│
├── 📁 js/                                  [FOLDER JAVASCRIPT - LOGIKA]
│   ├── 📄 main.js                          [Main JS - Inisialisasi & Event]
│   ├── 📄 data.js                          [Data Management - Load & Filter]
│   ├── 📄 chart.js                         [Chart.js Integration - Visualisasi]
│   └── 📄 map.js                           [Leaflet.js Integration - Pemetaan]
│
├── 📁 data/                                [FOLDER DATA - JSON FILES]
│   ├── 📄 accelerometer_normal.json        [Data Accelerometer Normal (20 records)]
│   ├── 📄 accelerometer_fall.json          [Data Accelerometer Jatuh (20 records)]
│   └── 📄 accident_locations.json          [Data Lokasi Kecelakaan (10 locations)]
│
├── 📁 components/                          [FOLDER KOMPONEN - REUSABLE]
│   ├── 📄 navbar.html                      [Navbar Component]
│   ├── 📄 footer.html                      [Footer Component]
│   └── 📄 hero.html                        [Hero Section Component]
│
├── 📁 docs/                                [FOLDER DOKUMENTASI]
│   ├── 📄 README.md                        [Dokumentasi Utama & Setup]
│   └── 📄 documentation.md                 [Dokumentasi Teknis & API]
│
└── 📄 .gitignore                           [Git Ignore File]
```

---

## 📂 FUNGSI MASING-MASING FOLDER

### 🎯 **Root Level Files**

| File | Fungsi | Penjelasan |
|------|--------|-----------|
| `index.html` | Halaman Utama | Landing page dengan hero section, deskripsi, dan teknologi |
| `accelerometer.html` | Data Accelerometer | Tampilkan tabel & grafik data sensor accelerometer |
| `map.html` | Peta Lokasi | Peta interaktif lokasi rawan kecelakaan dengan Leaflet |
| `about.html` | Tentang Sistem | Dokumentasi lengkap penelitian dan profil peneliti |

### 📁 **assets/** - Aset Media
Menyimpan semua file media dan dataset tambahan
- **images/** - Gambar, logo, screenshot
- **icons/** - Icon custom untuk UI
- **logos/** - Logo universitas dan sponsor
- **datasets/** - Dataset supplementary

### 📁 **css/** - Stylesheet
Menyimpan semua file CSS untuk styling

| File | Fungsi |
|------|--------|
| `style.css` | **Global CSS** - Reset, typography, buttons, cards, utility classes |
| `home.css` | **Home Specific** - Hero section, tech cards, feature cards, CTA |
| `accelerometer.css` | **Accelerometer Specific** - Tabs, tables, charts styling |
| `map.css` | **Map Specific** - Map container, Leaflet overrides, stats |
| `about.css` | **About Specific** - Section styling, profile cards, lists |

**Total CSS**: ~900+ lines

### 📁 **js/** - JavaScript Modules

| File | Fungsi | Lines |
|------|--------|-------|
| `main.js` | **Core Logic** - Inisialisasi halaman, smooth scroll, navbar, utilities | 100+ |
| `data.js` | **Data Management** - Load JSON, stats, filtering, utilities | 150+ |
| `chart.js` | **Chart Visualization** - Create 4 charts dengan Chart.js | 250+ |
| `map.js` | **Map Integration** - Leaflet initialization, markers, popups, events | 200+ |

**Total JavaScript**: ~700+ lines

### 📁 **data/** - Static Data JSON

| File | Records | Fields |
|------|---------|--------|
| `accelerometer_normal.json` | 20 | timestamp, ax, ay, az, resultant |
| `accelerometer_fall.json` | 20 | timestamp, ax, ay, az, resultant |
| `accident_locations.json` | 10 | id, name, address, lat, lng, severity, date, description, incident_count |

### 📁 **components/** - Reusable Components
Template dan reference untuk komponen yang bisa digunakan di halaman lain

### 📁 **docs/** - Documentation
- `README.md` - Setup guide, overview, troubleshooting
- `documentation.md` - Dokumentasi teknis, API, implementation guide

---

## 📄 FUNGSI MASING-MASING FILE DETAIL

### **HTML Files**

#### `index.html` (Landing Page)
**Sections:**
- Navbar (sticky)
- Hero section dengan CTA
- About research section (2 cards)
- Technology section (4 tech cards)
- Features section (4 feature cards)
- CTA section (call-to-action)
- Footer
**External Libraries:** Bootstrap 5, Font Awesome

#### `accelerometer.html` (Data Page)
**Sections:**
- Navbar
- Page header
- 3 Tab panels:
  1. Normal data table (20 rows)
  2. Fall data table (20 rows)
  3. Comparison charts (4 charts)
- Footer
**Charts:** Line chart, Bar chart, Doughnut chart, Statistics box
**Data Source:** accelerometer_normal.json, accelerometer_fall.json

#### `map.html` (Map Page)
**Sections:**
- Navbar
- Page header
- 2 Column layout:
  - Left: Leaflet map container
  - Right: Info sidebar + Legend
- Statistics row (4 stat cards)
- Footer
**Map:** Leaflet.js dengan OpenStreetMap tiles
**Data Source:** accident_locations.json
**Features:** Marker interaktif, popup, sidebar info, filtering

#### `about.html` (Info Page)
**Sections:**
- Navbar
- Page header
- About research section
- Research objectives (bulleted list)
- Technology used (4 technology cards)
- Researcher profiles (3 profile cards)
- Research methodology (numbered list)
- Expected results (2 column list)
- Footer

---

### **CSS Files**

#### `style.css` (Global Stylesheet)
**Content:**
- CSS Custom Properties (--primary-color, --shadow, etc.)
- Typography (headings, paragraphs, utility classes)
- Navbar styling
- Button styling dan hover effects
- Card styling dengan hover animation
- Divider line utility
- Scrollbar styling
- Responsive breakpoints
- Animations (fadeInUp, slideInLeft)

#### `home.css`
**Content:**
- Hero section background gradient
- Hero animation dengan slideInLeft
- Tech card styling dan hover
- Feature card styling
- CTA section background
- Page header styling
- Responsive overrides untuk mobile

#### `accelerometer.css`
**Content:**
- Nav tabs styling
- Table styling (striped, hover effects)
- Chart container styling
- Statistics cards styling
- Responsive table adjustments

#### `map.css`
**Content:**
- Map container sizing (600px height)
- Leaflet popup styling
- Location info sidebar styling
- Legend styling
- Statistics cards styling
- Responsive map height adjustments

#### `about.css`
**Content:**
- Section headers dengan ::after underline
- Researcher avatar styling
- List group items styling
- Technology cards styling dengan gradient
- Responsive card layouts

---

### **JavaScript Files**

#### `main.js` (Core)
**Functions:**
```javascript
initializePage()           - Main initialization
addSmoothScroll()         - Smooth scroll untuk anchor links
initializeTooltips()      - Bootstrap tooltips
handleNavbarCollapse()    - Mobile navbar collapse
formatNumber()            - Number formatting utility
formatTimestamp()         - Timestamp formatting
log()                     - Debug logging
logError()                - Error logging
logSuccess()              - Success logging
```

#### `data.js` (Data Management)
**Functions:**
```javascript
loadAccelerometerData()    - Fetch JSON files
loadAccidentLocations()    - Fetch location data
getAccelerometerStats()    - Calculate statistics
getLocationStats()         - Get location stats
getLocationsBySeverity()   - Filter by severity
getLocationById()          - Get location detail
```

#### `chart.js` (Chart.js Integration)
**Functions:**
```javascript
initializeCharts()         - Main initialization
populateTables()           - Fill table dengan data
populateTableData()        - Fill single table
createLineChart()          - Create line chart
createBarChart()           - Create bar chart
createDoughnutChart()      - Create doughnut chart
createStatistics()         - Display statistics
```

#### `map.js` (Leaflet Integration)
**Functions:**
```javascript
initializeMap()            - Map initialization
addMarkers()               - Add all markers
addMarker()                - Add single marker
displayLocationInfo()      - Update sidebar info
updateLocationStats()      - Update statistics
getMarkerColor()           - Color by severity
getSeverityBadge()         - Badge class by severity
handleMapEvents()          - Map event handlers
filterMarkersBySeverity()  - Filter markers
showAllMarkers()           - Show all markers
```

---

### **JSON Data Files**

#### `accelerometer_normal.json`
**Sample Record:**
```json
{
    "timestamp": 100,
    "ax": 0.5,
    "ay": 0.3,
    "az": 9.8,
    "resultant": 9.82
}
```
**Use Case:** Visualisasi data normal di tabel dan chart

#### `accelerometer_fall.json`
**Sample Record:**
```json
{
    "timestamp": 100,
    "ax": 8.5,
    "ay": 7.3,
    "az": 6.8,
    "resultant": 12.45
}
```
**Use Case:** Visualisasi data jatuh untuk perbandingan

#### `accident_locations.json`
**Sample Record:**
```json
{
    "id": 1,
    "name": "Persimpangan Jln Ahmad Yani - Jln Diponegoro",
    "address": "Kuningan, Bandung",
    "latitude": -6.9175,
    "longitude": 107.6063,
    "severity": "critical",
    "date": "2026-05-15",
    "description": "Lokasi rawan dengan sering terjadi tabrakan...",
    "incident_count": 12
}
```
**Use Case:** Tampilkan marker di peta dengan popup

---

## 🔄 ALUR KERJA WEBSITE

### **1. Alur Umum**
```
User membuka index.html di browser
    ↓
Browser load semua CSS dari <link>
    ↓
Browser render HTML struktur
    ↓
Browser load semua JS dari <script>
    ↓
main.js DOMContentLoaded event trigger
    ↓
initializePage() dijalankan
    ↓
Website siap - User dapat interact
```

### **2. Alur Halaman Home (index.html)**
```
Load index.html
    ↓
style.css + home.css ter-load (global + specific)
    ↓
main.js inisialisasi:
    - Smooth scroll untuk navbar links
    - Navbar collapse handler
    - Tooltips
    ↓
Halaman ditampilkan dengan:
    - Navbar dengan link ke semua page
    - Hero section dengan gradient background
    - 4 section konten
    - Footer dengan copyright
    ↓
User dapat klik navbar link ke halaman lain
```

### **3. Alur Halaman Data (accelerometer.html)**
```
User klik "Data Accelerometer" di navbar
    ↓
accelerometer.html ter-load
    ↓
HTML render dengan 3 empty tab panels
    ↓
CSS ter-load (style.css + accelerometer.css)
    ↓
JS ter-load:
    - main.js (untuk navbar)
    - data.js (untuk data management)
    - chart.js (untuk chart creation)
    ↓
DOM ready → initializeCharts() dijalankan
    ↓
loadAccelerometerData():
    - fetch('data/accelerometer_normal.json') → JSON ter-load
    - fetch('data/accelerometer_fall.json') → JSON ter-load
    - Data disimpan di accelerometerData object
    ↓
populateTables():
    - Looping data normal → insert ke table #1
    - Looping data fall → insert ke table #2
    ↓
createLineChart():
    - Get canvas element (#lineChart)
    - Setup Chart.js dengan normal data
    - Render line chart
    ↓
createBarChart():
    - Get statistics dari both dataset
    - Render comparison bar chart
    ↓
createDoughnutChart():
    - Count data records
    - Render distribution doughnut chart
    ↓
createStatistics():
    - Calculate avg, min, max, etc
    - Display di statistics box
    ↓
Halaman selesai dengan:
    - 2 tabel data terisi
    - 3 chart visualisasi
    - Statistics info
```

### **4. Alur Halaman Map (map.html)**
```
User klik "Peta Lokasi" di navbar
    ↓
map.html ter-load
    ↓
HTML render dengan #map container dan sidebar
    ↓
Leaflet.js ter-load dari CDN
    ↓
DOM ready → initializeMap() dijalankan
    ↓
loadAccidentLocations():
    - fetch('data/accident_locations.json')
    - Data disimpan di accidentLocations array
    ↓
L.map('map').setView([-1.974, 113.921], 5):
    - Initialize Leaflet map
    - Center di Indonesia
    - Zoom level 5
    ↓
L.tileLayer(...OSM...):
    - Load OpenStreetMap tiles dari CDN
    - Render di map
    ↓
addMarkers():
    - Loop setiap location di data
    - addMarker() untuk masing-masing:
        → Create L.icon dengan warna berdasar severity
        → Create L.marker dengan koordinat
        → bindPopup dengan HTML content
        → Add click event listener
        → Add marker ke map
    ↓
updateLocationStats():
    - Count lokasi by severity
    - Update #criticalCount, #highCount, dll
    ↓
User interact dengan map:
    - Scroll/zoom dengan mouse wheel
    - Drag untuk pan
    - Klik marker → popup muncul + sidebar update
    - Klik marker lagi → displayLocationInfo() update sidebar
```

### **5. Alur Halaman About (about.html)**
```
User klik "Tentang Sistem" di navbar
    ↓
about.html ter-load
    ↓
CSS ter-load (style.css + about.css)
    ↓
main.js inisialisasi navbar
    ↓
Halaman ditampilkan dengan:
    - About research info (2 cards)
    - Research objectives (list)
    - Technology section (4 tech cards)
    - Researcher profiles (3 cards)
    - Methodology (numbered list)
    - Expected results (bullet list)
    ↓
User scroll baca semua informasi
```

---

## ✅ BEST PRACTICE PENGEMBANGAN

### **1. File Organization**
✅ Separasi HTML, CSS, JavaScript dalam folder berbeda  
✅ Modular component dalam components/  
✅ Static data di folder data/ terpisah  
✅ Documentation di docs/  

### **2. Code Quality**
✅ Meaningful variable names (`accelerometerData`, bukan `data`)  
✅ Functions dengan single responsibility  
✅ Comments pada logic kompleks  
✅ Consistent indentation (2 spaces)  
✅ DRY principle (reusable functions)  

### **3. Performance**
✅ Minifikasi CSS & JS untuk production  
✅ CDN untuk external libraries  
✅ Lazy loading considerations  
✅ No inline styles - gunakan CSS classes  
✅ Event delegation untuk dynamic elements  

### **4. Responsive Design**
✅ Mobile-first approach  
✅ Flexible grid system (Bootstrap grid)  
✅ Responsive typography  
✅ Touch-friendly buttons (44px minimum)  
✅ Test di mobile, tablet, desktop  

### **5. Accessibility**
✅ Semantic HTML tags (`<header>`, `<main>`, `<footer>`)  
✅ ARIA labels untuk screen readers  
✅ Keyboard navigation support  
✅ Color contrast ratio > 4.5:1  
✅ Alt text untuk images  

### **6. Security**
✅ No sensitive data di frontend  
✅ Input validation (jika ada form)  
✅ CSP headers ready  
✅ HTTPS for production  

### **7. SEO**
✅ Meta tags di head  
✅ Descriptive titles & descriptions  
✅ Semantic HTML structure  
✅ Alt text untuk images  

### **8. Documentation**
✅ README.md lengkap  
✅ Technical documentation  
✅ Inline code comments  
✅ Function documentation  
✅ API documentation  

---

## 🎯 STANDAR YANG DIIKUTI

- **HTML5** - W3C Standards
- **CSS3** - Latest features + vendor prefixes
- **ES6+** - Modern JavaScript
- **Bootstrap 5** - Grid system, utilities, components
- **Accessibility** - WCAG 2.1 Level AA
- **Responsive** - Mobile-first design
- **Performance** - Lighthouse best practices

---

## 📊 STATISTIK PROJECT

| Metrik | Jumlah |
|--------|--------|
| HTML Files | 4 |
| CSS Files | 5 |
| JavaScript Files | 4 |
| JSON Data Files | 3 |
| Total Files | 16+ |
| Total Lines of Code | ~3000+ |
| Total CSS Lines | ~900+ |
| Total JS Lines | ~700+ |
| Supported Chart Types | 3 |
| Data Records | 50+ |
| Locations Mapped | 10 |
| Responsive Breakpoints | 5 |
| External Libraries | 5 |

---

## 🚀 CARA MENGGUNAKAN

### **Membuka di VS Code**
1. Buka VS Code
2. File → Open Folder
3. Pilih folder `website-kecelakaan`
4. Klik Live Server di bottom bar
5. Website akan terbuka di http://localhost:5500

### **Membuka tanpa Live Server**
- Double-click `index.html` untuk buka di browser
- Atau gunakan `python -m http.server 8000`

### **Deploy ke Web**
1. Upload semua file ke hosting
2. Pastikan path relatif tetap sama
3. Test semua link dan functionality
4. Check console untuk error

---

## 🔧 DEVELOPMENT WORKFLOW

```
1. Edit HTML di halaman
   ↓
2. Refresh browser (F5)
   ↓
3. Edit CSS di style.css atau page-specific.css
   ↓
4. Check live update (Auto-refresh jika Live Server)
   ↓
5. Edit JS di main.js atau page-specific.js
   ↓
6. Check console (F12 → Console tab)
   ↓
7. Test di berbagai device
   ↓
8. Commit ke Git
```

---

## 📱 RESPONSIVE BREAKPOINTS

- **Extra Small** (< 576px) - Phones
- **Small** (≥ 576px) - Landscape phones
- **Medium** (≥ 768px) - Tablets
- **Large** (≥ 992px) - Desktops
- **Extra Large** (≥ 1200px) - Large desktops

---

## ✨ FITUR YANG SIAP DIIMPLEMENTASIKAN

✅ 4 halaman fungsional  
✅ Responsive design  
✅ Data visualization (charts)  
✅ Interactive map  
✅ Table dengan data  
✅ Smooth navigation  
✅ Mobile friendly  
✅ Professional styling  
✅ Documentation lengkap  

---

**Project Status:** ✅ COMPLETE & READY TO USE  
**Last Updated:** Juni 2026  
**Version:** 1.0.0  

---

## 🎓 UNTUK PENGEMBANGAN LEBIH LANJUT

Silakan tambahkan:
1. **Backend Integration** - API untuk dynamic data
2. **Database** - Store data accelerometer
3. **Authentication** - User login (jika diperlukan)
4. **Admin Dashboard** - Manage data & locations
5. **Real-time Updates** - WebSocket untuk live data
6. **Export Features** - CSV, PDF export
7. **Mobile App** - React Native atau Flutter
8. **Analytics** - Google Analytics integration

---
