# 🔄 ALUR KERJA WEBSITE - DIAGRAM & PENJELASAN LENGKAP

## 1️⃣ ALUR UMUM LOADING WEBSITE

```
┌─────────────────────────────────────────────────────────┐
│  User Membuka index.html di Browser                     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  Browser Parse HTML & Download CSS/JS dari CDN          │
│  ├─ style.css (global styling)                          │
│  ├─ Bootstrap 5 CSS                                     │
│  ├─ Font Awesome CSS                                    │
│  └─ home.css (page-specific)                            │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  Browser Render HTML Structure                          │
│  ├─ Navbar                                              │
│  ├─ Hero Section                                        │
│  ├─ Content Sections                                    │
│  └─ Footer                                              │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  Browser Load JavaScript Files                          │
│  ├─ main.js (core functions)                            │
│  ├─ Bootstrap JS                                        │
│  └─ main.js:initializePage()                            │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  DOMContentLoaded Event Triggered                       │
│  ├─ Smooth scroll setup                                 │
│  ├─ Navbar collapse handler                             │
│  ├─ Tooltips initialized                                │
│  └─ Event listeners attached                            │
└─────────────────────────────────────────────────────────┘
                          ↓
✅ Website Siap & Interaktif
```

---

## 2️⃣ ALUR HALAMAN HOME (index.html)

```
User membuka atau klik "Beranda" dari navbar
                    ↓
        index.html di-load
                    ↓
    CSS ter-load & di-apply:
    ├─ style.css (global styles)
    ├─ home.css (home-specific)
    └─ Bootstrap responsive grid
                    ↓
    HTML Elements di-render:
    ├─ Navbar (sticky, dengan links)
    ├─ Hero Section (gradient bg)
    │  └─ CTA buttons
    ├─ About Section (2 cards)
    ├─ Technology Section (4 cards)
    ├─ Features Section (4 cards)
    ├─ CTA Section (call to action)
    └─ Footer (sticky bottom)
                    ↓
    JavaScript ter-load:
    └─ main.js: initializePage()
       ├─ addSmoothScroll()
       ├─ handleNavbarCollapse()
       └─ initializeTooltips()
                    ↓
✅ Halaman Home Siap
   User dapat:
   ├─ Click navbar links → navigate ke page lain
   ├─ Click CTA buttons → ke accelerometer/map
   ├─ Smooth scroll with navbar links
   └─ Mobile navbar collapse/expand
```

---

## 3️⃣ ALUR HALAMAN DATA ACCELEROMETER (accelerometer.html)

```
User klik "Data Accelerometer" di navbar
                    ↓
        accelerometer.html di-load
                    ↓
    ┌─ HTML Structure Render:
    │  ├─ Navbar
    │  ├─ Page Header
    │  ├─ 3 Empty Tab Panels (navtabs)
    │  │  ├─ Tab 1: Normal Data Table (empty <tbody>)
    │  │  ├─ Tab 2: Fall Data Table (empty <tbody>)
    │  │  └─ Tab 3: 4 Chart Containers (empty <canvas>)
    │  ├─ Footer
    │  └─ Script tags dengan 3 file:
    │     ├─ data.js
    │     ├─ chart.js
    │     └─ main.js
    │
    └─ CSS ter-load:
       ├─ style.css (global)
       ├─ accelerometer.css (specific)
       └─ Bootstrap utilities
                    ↓
    Browser download JS libraries:
    └─ Chart.js 3.9.1 dari CDN
       (jika belum ter-cache)
                    ↓
    ✨ DOM Ready Event:
    └─ chart.js: initializeCharts() EXECUTE
       
       ┌── async function initializeCharts()
       │
       ├─ Step 1: loadAccelerometerData()
       │  ├─ fetch('data/accelerometer_normal.json')
       │  │  └─ Response OK?
       │  │     ├─ YES → Parse JSON → Save ke accelerometerData.normal
       │  │     └─ NO → Catch error
       │  │
       │  └─ fetch('data/accelerometer_fall.json')
       │     └─ Response OK?
       │        ├─ YES → Parse JSON → Save ke accelerometerData.fall
       │        └─ NO → Catch error
       │
       ├─ Step 2: populateTables()
       │  ├─ populateTableData('normalTable', accelerometerData.normal)
       │  │  ├─ Get <tbody> dari #normalTable
       │  │  ├─ Loop data (20 records)
       │  │  ├─ Create <tr> untuk setiap record
       │  │  │  └─ Insert: No | Timestamp | Ax | Ay | Az | Resultant
       │  │  └─ Append to tbody
       │  │
       │  └─ populateTableData('fallTable', accelerometerData.fall)
       │     └─ Sama seperti normal table
       │
       ├─ Step 3: createLineChart()
       │  ├─ Get canvas element: #lineChart
       │  ├─ Extract data: resultants dari normal data
       │  ├─ Create labels: 1, 2, 3, ..., 20
       │  ├─ Initialize Chart.js:
       │  │  ├─ Type: 'line'
       │  │  ├─ Data: {labels, datasets}
       │  │  ├─ Options: responsive, legend, scales
       │  │  └─ Render chart di canvas
       │  └─ Save instance ke charts.lineChart
       │
       ├─ Step 4: createBarChart()
       │  ├─ Get canvas element: #barChart
       │  ├─ Calculate statistics:
       │  │  ├─ normalStats = getAccelerometerStats(normal data)
       │  │  └─ fallStats = getAccelerometerStats(fall data)
       │  ├─ Extract: maxResultant, avgResultant, minResultant
       │  ├─ Create 2 datasets (normal vs fall)
       │  ├─ Initialize Chart.js bar chart
       │  └─ Render di canvas
       │
       ├─ Step 5: createDoughnutChart()
       │  ├─ Get canvas element: #doughnutChart
       │  ├─ Count: normalData.length vs fallData.length
       │  ├─ Create 2 labels: "Data Normal" vs "Data Jatuh"
       │  ├─ Create 1 dataset dengan 2 values
       │  ├─ Initialize Chart.js doughnut chart
       │  └─ Render di canvas
       │
       └─ Step 6: createStatistics()
          ├─ Get container: #statisticsContainer
          ├─ Calculate full stats untuk both datasets
          ├─ Generate HTML: 2 stat boxes
          ├─ Display: Jumlah, Max, Rata-rata, Min
          └─ Insert ke container
                    ↓
✅ Halaman Data Selesai & Siap Interaktif
   User dapat:
   ├─ Click tabs → switch antara Normal | Fall | Charts
   ├─ Lihat 2 tabel berisi 20 data points
   ├─ Lihat 3 chart visualisasi
   ├─ Lihat statistik ringkas
   └─ Click navbar → navigate ke page lain
```

---

## 4️⃣ ALUR HALAMAN PETA (map.html)

```
User klik "Peta Lokasi" di navbar
                    ↓
        map.html di-load
                    ↓
    ┌─ HTML Structure Render:
    │  ├─ Navbar
    │  ├─ Page Header
    │  ├─ Main Container dengan:
    │  │  ├─ Left Column:
    │  │  │  └─ <div id="map"></div> (empty)
    │  │  └─ Right Column:
    │  │     ├─ Location info sidebar (empty)
    │  │     └─ Legend (static)
    │  ├─ Statistics Row (4 empty stat cards)
    │  ├─ Footer
    │  └─ Script tags:
    │     ├─ Leaflet JS/CSS dari CDN
    │     ├─ data.js
    │     ├─ map.js
    │     └─ main.js
    │
    └─ CSS ter-load:
       ├─ style.css (global)
       ├─ map.css (specific)
       ├─ Leaflet CSS
       └─ Bootstrap utilities
                    ↓
    Browser download dari CDN:
    ├─ Leaflet.js 1.9.4
    └─ Font Awesome (jika belum)
                    ↓
    ✨ DOM Ready Event:
    └─ map.js: initializeMap() EXECUTE
       
       ┌── async function initializeMap()
       │
       ├─ Step 1: loadAccidentLocations()
       │  ├─ fetch('data/accident_locations.json')
       │  ├─ Response OK?
       │  │  ├─ YES → Parse JSON → Save ke accidentLocations array
       │  │  └─ NO → Catch error, console.error
       │  └─ Return boolean success/fail
       │
       ├─ Step 2: Initialize Leaflet Map
       │  ├─ L.map('map') → Create map instance
       │  ├─ .setView([-1.974, 113.921], 5) → Center di Indonesia, zoom 5
       │  ├─ Add to global variable: map
       │  └─ Map container now punya Leaflet canvas
       │
       ├─ Step 3: Add Map Tiles (OpenStreetMap)
       │  ├─ L.tileLayer('https://{s}.tile.openstreetmap.org/...')
       │  ├─ Download tiles dari OSM server
       │  ├─ Render tiles di map canvas
       │  └─ Add attribution
       │
       ├─ Step 4: addMarkers()
       │  ├─ Loop setiap location di accidentLocations array
       │  └─ Untuk setiap location:
       │     ├─ addMarker(location)
       │     │  ├─ Determine marker color by severity:
       │     │  │  ├─ critical → red
       │     │  │  ├─ high → orange
       │     │  │  └─ monitor → blue
       │     │  │
       │     │  ├─ Create L.icon dengan color marker
       │     │  ├─ Create L.marker dengan:
       │     │  │  ├─ Coordinates: [latitude, longitude]
       │     │  │  ├─ Icon dari step di atas
       │     │  │  └─ Add to map
       │     │  │
       │     │  ├─ Create popup content (HTML):
       │     │  │  ├─ Lokasi name
       │     │  │  ├─ Address
       │     │  │  ├─ Severity badge
       │     │  │  ├─ Date
       │     │  │  ├─ Description
       │     │  │  └─ Incident count
       │     │  │
       │     │  ├─ marker.bindPopup(popupContent)
       │     │  ├─ marker.on('click', function)
       │     │  │  └─ displayLocationInfo(location) → Update sidebar
       │     │  │
       │     │  └─ markers.push(marker) → Save instance
       │
       ├─ Step 5: updateLocationStats()
       │  ├─ getLocationStats() → Count by severity
       │  ├─ Update #criticalCount dengan stats.critical
       │  ├─ Update #highCount dengan stats.high
       │  ├─ Update #monitorCount dengan stats.monitor
       │  └─ Update #totalCount dengan stats.total
       │
       ├─ Step 6: handleMapEvents()
       │  ├─ map.on('zoom', function) → Log zoom level
       │  └─ Bisa add event handlers lainnya
       │
       └─ End: logSuccess('Map initialized')
                    ↓
✅ Halaman Map Selesai & Siap Interaktif
   User dapat:
   ├─ Scroll/zoom map dengan mouse wheel
   ├─ Drag untuk pan around
   ├─ Click marker → Popup muncul
   ├─ Click marker → Sidebar update dengan info
   ├─ Hover legend untuk understand colors
   ├─ Lihat statistics (4 cards)
   └─ Click navbar → navigate ke page lain
```

---

## 5️⃣ ALUR HALAMAN TENTANG (about.html)

```
User klik "Tentang Sistem" di navbar
                    ↓
        about.html di-load
                    ↓
    ┌─ HTML Structure Render:
    │  ├─ Navbar
    │  ├─ Page Header
    │  ├─ Section 1: About Research (2 cards)
    │  ├─ Section 2: Research Objectives (bulleted list)
    │  ├─ Section 3: Technology Used (4 tech cards)
    │  ├─ Section 4: Researcher Profiles (3 profile cards)
    │  ├─ Section 5: Research Methodology (numbered list)
    │  ├─ Section 6: Expected Results (bullet list)
    │  ├─ Footer
    │  └─ Script tags:
    │     ├─ main.js
    │     └─ Bootstrap JS (for tooltips)
    │
    └─ CSS ter-load:
       ├─ style.css (global)
       ├─ about.css (specific styling)
       └─ Bootstrap utilities
                    ↓
    ✨ DOM Ready Event:
    └─ main.js: initializePage() EXECUTE
       ├─ addSmoothScroll()
       ├─ handleNavbarCollapse()
       └─ initializeTooltips()
                    ↓
✅ Halaman About Selesai
   User dapat:
   ├─ Baca semua informasi penelitian
   ├─ Scroll down untuk lebih detail
   ├─ Click navbar links untuk navigate
   └─ Mobile-friendly responsive layout
```

---

## 6️⃣ INTERAKSI USER DENGAN DATA

### **SCENARIO 1: User View Chart dan Interaksi**
```
User di halaman accelerometer.html, klik tab "Perbandingan Grafik"
                    ↓
Bootstrap tab JS trigger:
├─ Tab panel #comparison-chart show
├─ Tab panel #normal-data hide
├─ Tab panel #fall-data hide
                    ↓
User melihat 4 charts:
├─ Line chart: resultan accelerometer normal
├─ Bar chart: perbandingan max/avg/min
├─ Doughnut chart: distribusi data
└─ Statistics: ringkas data
                    ↓
User bisa:
├─ Hover chart → tooltip muncul
├─ Click legend → toggle dataset visibility
└─ Check responsive pada mobile
```

### **SCENARIO 2: User Interact dengan Map**
```
User di halaman map.html, lihat peta dengan 10 markers
                    ↓
User wheel scroll di area map
                    ↓
Leaflet zoom event trigger:
├─ Map zoom level change
├─ Tiles di-rerender untuk level baru
└─ map.on('zoom') event dijalankan
                    ↓
User klik marker (e.g., lokasi "Bundaran HI")
                    ↓
Leaflet marker click event trigger:
├─ marker.on('click') callback dijalankan
├─ displayLocationInfo(location) dijalankan
│  ├─ Get location data dari accidentLocations array
│  ├─ Generate HTML dengan detail:
│  │  ├─ Name, Address, Severity badge
│  │  ├─ Date, Description, Incident count
│  │  └─ Coordinates
│  └─ Insert HTML ke #locationInfo sidebar
├─ Popup muncul di map dengan info
└─ Sidebar update dengan detail lengkap
                    ↓
User bisa:
├─ Click marker lain → sidebar update
├─ Drag map → explore area lain
├─ Zoom in/out → lihat detail lebih
└─ Check severity dari warna marker
```

---

## 7️⃣ DATA FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│                    USER BROWSER                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │            HTML (Struktur Konten)                   │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  index.html                                         │   │
│  │  accelerometer.html                                 │   │
│  │  map.html                                           │   │
│  │  about.html                                         │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↓                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │            CSS (Styling & Layout)                   │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  style.css (global)                                 │   │
│  │  home.css, accelerometer.css, map.css, about.css   │   │
│  │  Bootstrap 5 (from CDN)                             │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↓                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │          JavaScript (Logika & Event)                │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  main.js (core functions)                           │   │
│  │  data.js (load & manage data)                       │   │
│  │  chart.js (visualisasi)                             │   │
│  │  map.js (peta interaktif)                           │   │
│  │  Bootstrap JS (from CDN)                            │   │
│  │  Chart.js (from CDN)                                │   │
│  │  Leaflet.js (from CDN)                              │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↓                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │            Local Storage / Memory                   │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  accelerometerData object                            │   │
│  │  accidentLocations array                             │   │
│  │  charts object (Chart instances)                     │   │
│  │  map object (Leaflet map instance)                   │   │
│  │  markers array (Leaflet markers)                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↓                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │          Data Fetch from JSON Files                 │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  fetch('data/accelerometer_normal.json')             │   │
│  │  fetch('data/accelerometer_fall.json')               │   │
│  │  fetch('data/accident_locations.json')               │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↓                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │          Render to DOM & Display                    │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  Table tbody filled dengan data                      │   │
│  │  Canvas rendered dengan Chart.js                     │   │
│  │  Leaflet map dengan markers                          │   │
│  │  DOM elements updated dynamically                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↓                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │          User Interaksi & Events                    │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  Click navbar → navigate                            │   │
│  │  Click button → trigger action                      │   │
│  │  Click chart → tooltip                              │   │
│  │  Click marker → popup & sidebar                     │   │
│  │  Scroll map → zoom                                  │   │
│  │  Drag map → pan                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 8️⃣ EVENT LISTENER FLOW

```
DOMContentLoaded
├─ main.js:initializePage()
│  ├─ addSmoothScroll()
│  │  └─ document.querySelectorAll('a[href^="#"]').addEventListener('click')
│  │
│  ├─ handleNavbarCollapse()
│  │  └─ .navbar-nav a.addEventListener('click')
│  │
│  └─ initializeTooltips()
│     └─ Bootstrap Tooltip on [data-bs-toggle="tooltip"]
│
├─ data.js:loadAccelerometerData()
│  └─ fetch() → Promise → .then() → .catch()
│
├─ data.js:loadAccidentLocations()
│  └─ fetch() → Promise → .then() → .catch()
│
├─ chart.js:initializeCharts()
│  ├─ populateTables()
│  ├─ createLineChart()
│  ├─ createBarChart()
│  ├─ createDoughnutChart()
│  └─ createStatistics()
│
└─ map.js:initializeMap()
   ├─ L.map('map').setView()
   ├─ L.tileLayer().addTo(map)
   ├─ addMarkers()
   │  └─ untuk setiap marker:
   │     ├─ marker.on('click') → displayLocationInfo()
   │     └─ marker.on('mouseover/mouseout')
   │
   ├─ updateLocationStats()
   ├─ map.on('zoom')
   └─ map.on('pan')

User Event Listeners (Active):
├─ Navbar link click → document page change
├─ Tab click → Bootstrap show/hide tab panel
├─ Chart hover → Chart.js tooltip
├─ Map scroll → Leaflet zoom
├─ Map drag → Leaflet pan
└─ Marker click → displayLocationInfo() + popup
```

---

## ✅ WORKFLOW CHECKLIST

User membuka website:
- [ ] index.html ter-load dengan navbar
- [ ] CSS ter-load dan styled correctly
- [ ] Smooth scroll bekerja
- [ ] Mobile navbar collapse bekerja

User pergi ke Data page:
- [ ] accelerometer.html ter-load
- [ ] Normal table terisi dengan 20 records
- [ ] Fall table terisi dengan 20 records
- [ ] 3 charts render dengan data
- [ ] Statistics display
- [ ] Tabs switching bekerja

User pergi ke Map page:
- [ ] map.html ter-load
- [ ] Leaflet map render dengan OSM tiles
- [ ] 10 markers terlihat di peta
- [ ] Marker warna sesuai severity
- [ ] Click marker → popup muncul
- [ ] Click marker → sidebar update
- [ ] Zoom/pan map bekerja
- [ ] Statistics update

User pergi ke About page:
- [ ] about.html ter-load
- [ ] Semua sections visible
- [ ] Responsive pada mobile
- [ ] Navbar dapat navigate

---

**Workflow Complete! ✅**
