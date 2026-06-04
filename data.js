/* ===========================
   DATA MANAGEMENT
   Load and manage accelerometer data
   =========================== */

let accelerometerData = {
    normal: [],
    fall: []
};

let accidentLocations = [];

/**
 * Load accelerometer data from JSON
 */
async function loadAccelerometerData() {
    try {
        log('Loading accelerometer data...');
        
        // Load normal data
        const normalResponse = await fetch('data/accelerometer_normal.json');
        accelerometerData.normal = await normalResponse.json();
        
        // Load fall data
        const fallResponse = await fetch('data/accelerometer_fall.json');
        accelerometerData.fall = await fallResponse.json();
        
        logSuccess('Accelerometer data loaded');
        return true;
    } catch (error) {
        logError('Failed to load accelerometer data', error);
        return false;
    }
}

/**
 * Load accident locations from JSON
 */
async function loadAccidentLocations() {
    try {
        log('Loading accident locations...');
        
        const response = await fetch('data/accident_locations.json');
        accidentLocations = await response.json();
        
        logSuccess('Accident locations loaded');
        return true;
    } catch (error) {
        logError('Failed to load accident locations', error);
        return false;
    }
}

/**
 * Get statistics from accelerometer data
 */
function getAccelerometerStats(data) {
    if (!data || data.length === 0) {
        return {
            count: 0,
            avgResultant: 0,
            maxResultant: 0,
            minResultant: 0,
            avgAx: 0,
            avgAy: 0,
            avgAz: 0
        };
    }

    const resultants = data.map(d => d.resultant);
    const axValues = data.map(d => d.ax);
    const ayValues = data.map(d => d.ay);
    const azValues = data.map(d => d.az);

    return {
        count: data.length,
        avgResultant: formatNumber(resultants.reduce((a, b) => a + b, 0) / resultants.length),
        maxResultant: formatNumber(Math.max(...resultants)),
        minResultant: formatNumber(Math.min(...resultants)),
        avgAx: formatNumber(axValues.reduce((a, b) => a + b, 0) / axValues.length),
        avgAy: formatNumber(ayValues.reduce((a, b) => a + b, 0) / ayValues.length),
        avgAz: formatNumber(azValues.reduce((a, b) => a + b, 0) / azValues.length)
    };
}

/**
 * Get accident location statistics
 */
function getLocationStats() {
    const stats = {
        critical: 0,
        high: 0,
        monitor: 0,
        total: accidentLocations.length
    };

    accidentLocations.forEach(location => {
        if (location.severity === 'critical') stats.critical++;
        else if (location.severity === 'high') stats.high++;
        else if (location.severity === 'monitor') stats.monitor++;
    });

    return stats;
}

/**
 * Filter locations by severity
 */
function getLocationsBySeverity(severity) {
    return accidentLocations.filter(location => location.severity === severity);
}

/**
 * Get location by ID
 */
function getLocationById(id) {
    return accidentLocations.find(location => location.id === id);
}
