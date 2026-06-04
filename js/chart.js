/* ===========================
   CHART MANAGEMENT
   Create and manage Chart.js visualizations
   =========================== */

let charts = {
    lineChart: null,
    barChart: null,
    doughnutChart: null
};

/**
 * Initialize all charts on accelerometer page
 */
async function initializeCharts() {
    try {
        log('Initializing charts...');
        
        // Load data
        await loadAccelerometerData();
        
        // Populate tables
        populateTables();
        
        // Create charts
        createLineChart();
        createBarChart();
        createDoughnutChart();
        createStatistics();
        
        logSuccess('Charts initialized');
    } catch (error) {
        logError('Failed to initialize charts', error);
    }
}

/**
 * Populate data tables
 */
function populateTables() {
    populateTableData('normalTable', accelerometerData.normal);
    populateTableData('fallTable', accelerometerData.fall);
}

/**
 * Populate a specific table with data
 */
function populateTableData(tableId, data) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    
    data.slice(0, 20).forEach((row) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.no}</td>
            <td>${formatNumber(row.ax)}</td>
            <td>${formatNumber(row.ay)}</td>
            <td>${formatNumber(row.az)}</td>
            <td><strong>${formatNumber(row.resultant)}</strong></td>
        `;
        tbody.appendChild(tr);
    });
}

/**
 * Create line chart comparing accelerometer data
 */
function createLineChart() {
    const ctx = document.getElementById('lineChart');
    if (!ctx) return;
    
    const normalResultants = accelerometerData.normal.map(d => d.resultant);
    const fallResultants = accelerometerData.fall.map(d => d.resultant);
    
    const normalLabels = Array.from({length: normalResultants.length}, (_, i) => i + 1);
    
    // Destroy existing chart if it exists
    if (charts.lineChart) {
        charts.lineChart.destroy();
    }
    
    charts.lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: normalLabels,
            datasets: [
                {
                    label: 'Data Normal (Tidak Jatuh)',
                    data: normalResultants,
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 3,
                    pointBackgroundColor: '#28a745',
                    pointHoverRadius: 5
                },
                {
                    label: 'Data Jatuh',
                    data: fallResultants,
                    borderColor: '#dc3545',
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 3,
                    pointBackgroundColor: '#dc3545',
                    pointHoverRadius: 5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Resultan Accelerometer (ATt) [m/s²]'
                    }
                }
            }
        }
    });
}

/**
 * Create bar chart comparing max values
 */
function createBarChart() {
    const ctx = document.getElementById('barChart');
    if (!ctx) return;
    
    const normalStats = getAccelerometerStats(accelerometerData.normal);
    const fallStats = getAccelerometerStats(accelerometerData.fall);
    
    // Destroy existing chart if it exists
    if (charts.barChart) {
        charts.barChart.destroy();
    }
    
    charts.barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nilai Maksimal', 'Nilai Rata-rata', 'Nilai Minimal'],
            datasets: [
                {
                    label: 'Data Normal (Tidak Jatuh)',
                    data: [normalStats.maxResultant, normalStats.avgResultant, normalStats.minResultant],
                    backgroundColor: 'rgba(40, 167, 69, 0.8)',
                    borderColor: '#28a745',
                    borderWidth: 1
                },
                {
                    label: 'Data Jatuh',
                    data: [fallStats.maxResultant, fallStats.avgResultant, fallStats.minResultant],
                    backgroundColor: 'rgba(220, 53, 69, 0.8)',
                    borderColor: '#dc3545',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Resultan Accelerometer (m/s²)'
                    }
                }
            }
        }
    });
}

/**
 * Create doughnut chart for data distribution
 */
function createDoughnutChart() {
    const ctx = document.getElementById('doughnutChart');
    if (!ctx) return;
    
    const normalCount = accelerometerData.normal.length;
    const fallCount = accelerometerData.fall.length;
    
    // Destroy existing chart if it exists
    if (charts.doughnutChart) {
        charts.doughnutChart.destroy();
    }
    
    charts.doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Data Normal (Tidak Jatuh)', 'Data Jatuh'],
            datasets: [
                {
                    data: [normalCount, fallCount],
                    backgroundColor: ['#28a745', '#dc3545'],
                    borderColor: ['#1e7e34', '#bd2130'],
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
}

/**
 * Create statistics display
 */
function createStatistics() {
    const normalStats = getAccelerometerStats(accelerometerData.normal);
    const fallStats = getAccelerometerStats(accelerometerData.fall);
    
    const container = document.getElementById('statisticsContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="row g-3">
            <div class="col-6">
                <div class="stat-box">
                    <h6 class="text-success fw-bold">Data Normal</h6>
                    <p class="text-muted small mb-1"><i class="fas fa-database"></i> Jumlah: ${normalStats.count}</p>
                    <p class="text-muted small mb-1"><i class="fas fa-arrow-up"></i> Max: ${normalStats.maxResultant}</p>
                    <p class="text-muted small mb-1"><i class="fas fa-equals"></i> Rata-rata: ${normalStats.avgResultant}</p>
                    <p class="text-muted small"><i class="fas fa-arrow-down"></i> Min: ${normalStats.minResultant}</p>
                </div>
            </div>
            <div class="col-6">
                <div class="stat-box">
                    <h6 class="text-danger fw-bold">Data Jatuh</h6>
                    <p class="text-muted small mb-1"><i class="fas fa-database"></i> Jumlah: ${fallStats.count}</p>
                    <p class="text-muted small mb-1"><i class="fas fa-arrow-up"></i> Max: ${fallStats.maxResultant}</p>
                    <p class="text-muted small mb-1"><i class="fas fa-equals"></i> Rata-rata: ${fallStats.avgResultant}</p>
                    <p class="text-muted small"><i class="fas fa-arrow-down"></i> Min: ${fallStats.minResultant}</p>
                </div>
            </div>
        </div>
    `;
}

// Initialize charts when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCharts);
} else {
    initializeCharts();
}
