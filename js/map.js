/* ===========================
   MAP MANAGEMENT
   Initialize and manage Leaflet map
   =========================== */

let map;
let markers = [];
let markerLayers = {};

/**
 * Initialize map on page load
 */
async function initializeMap() {
    try {
        log('Initializing map...');
        
        // Load accident locations data
        await loadAccidentLocations();
        
        // Initialize Leaflet map centered on Indonesia
        map = L.map('map').setView([-1.974, 113.921], 5);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);
        
        // Add markers
        addMarkers();
        
        // Update statistics
        updateLocationStats();
        
        // Handle map clicks
        handleMapEvents();
        
        logSuccess('Map initialized');
    } catch (error) {
        logError('Failed to initialize map', error);
    }
}

/**
 * Add markers to map
 */
function addMarkers() {
    accidentLocations.forEach(location => {
        addMarker(location);
    });
}

/**
 * Add single marker to map
 */
function addMarker(location) {
    const color = getMarkerColor(location.severity);
    const icon = L.icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-${color}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    
    const marker = L.marker(
        [location.latitude, location.longitude],
        { icon: icon }
    ).addTo(map);
    
    // Create popup content
    const popupContent = `
        <div class="marker-popup">
            <h6 class="fw-bold">${location.name}</h6>
            <p class="mb-2 text-muted small">${location.address}</p>
            <div class="severity-badge mb-2">
                <span class="badge bg-${getSeverityBadge(location.severity)}">
                    ${location.severity.toUpperCase()}
                </span>
            </div>
            <p class="text-muted small mb-1"><i class="fas fa-calendar"></i> ${location.date}</p>
            <p class="text-muted small mb-1"><i class="fas fa-info-circle"></i> ${location.description}</p>
            <p class="text-muted small"><i class="fas fa-bar-chart"></i> Incidents: ${location.incident_count}</p>
        </div>
    `;
    
    marker.bindPopup(popupContent);
    
    // Add click event
    marker.on('click', function () {
        displayLocationInfo(location);
    });
    
    markers.push(marker);
}

/**
 * Display location information in sidebar
 */
function displayLocationInfo(location) {
    const infoContainer = document.getElementById('locationInfo');
    if (!infoContainer) return;
    
    const severityColor = getSeverityColor(location.severity);
    
    infoContainer.innerHTML = `
        <div class="location-info">
            <div class="info-row">
                <div class="info-label">Lokasi</div>
                <div class="info-value fw-bold">${location.name}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Alamat</div>
                <div class="info-value">${location.address}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Tingkat Risiko</div>
                <div class="info-value">
                    <span class="badge bg-${getSeverityBadge(location.severity)}" style="color: ${severityColor};">
                        ${location.severity.charAt(0).toUpperCase() + location.severity.slice(1)}
                    </span>
                </div>
            </div>
            <div class="info-row">
                <div class="info-label">Tanggal</div>
                <div class="info-value">${location.date}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Deskripsi</div>
                <div class="info-value">${location.description}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Jumlah Insiden</div>
                <div class="info-value fw-bold">${location.incident_count}</div>
            </div>
            <div>
                <div class="info-label">Koordinat</div>
                <div class="info-value text-muted small">${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}</div>
            </div>
        </div>
    `;
}

/**
 * Update location statistics
 */
function updateLocationStats() {
    const stats = getLocationStats();
    
    document.getElementById('criticalCount').textContent = stats.critical;
    document.getElementById('highCount').textContent = stats.high;
    document.getElementById('monitorCount').textContent = stats.monitor;
    document.getElementById('totalCount').textContent = stats.total;
}

/**
 * Get marker color based on severity
 */
function getMarkerColor(severity) {
    switch (severity) {
        case 'critical': return 'red';
        case 'high': return 'orange';
        case 'monitor': return 'blue';
        default: return 'grey';
    }
}

/**
 * Get severity badge class
 */
function getSeverityBadge(severity) {
    switch (severity) {
        case 'critical': return 'danger';
        case 'high': return 'warning';
        case 'monitor': return 'info';
        default: return 'secondary';
    }
}

/**
 * Get severity color
 */
function getSeverityColor(severity) {
    switch (severity) {
        case 'critical': return '#dc3545';
        case 'high': return '#ffc107';
        case 'monitor': return '#17a2b8';
        default: return '#6c757d';
    }
}

/**
 * Handle map events
 */
function handleMapEvents() {
    // You can add additional map event handlers here
    // For example, handle zoom or pan events
    
    map.on('zoom', function () {
        log(`Map zoomed to level ${map.getZoom()}`);
    });
}

/**
 * Filter markers by severity
 */
function filterMarkersBySeverity(severity) {
    // Clear all markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    // Add only markers matching severity
    const filteredLocations = getLocationsBySeverity(severity);
    filteredLocations.forEach(location => {
        addMarker(location);
    });
    
    log(`Filtered to ${severity} locations: ${filteredLocations.length}`);
}

/**
 * Show all markers
 */
function showAllMarkers() {
    markers = [];
    addMarkers();
    updateLocationStats();
    log('Showing all markers');
}

// Initialize map when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMap);
} else {
    initializeMap();
}
