/* ===========================
   MAIN JAVASCRIPT
   Initialize global functions and event listeners
   =========================== */

document.addEventListener('DOMContentLoaded', function () {
    console.log('Website loaded successfully');
    initializePage();
});

/**
 * Initialize page
 */
function initializePage() {
    // Add smooth scroll behavior
    addSmoothScroll();
    
    // Initialize tooltips if needed
    initializeTooltips();
    
    // Handle responsive navbar
    handleNavbarCollapse();
}

/**
 * Add smooth scroll behavior
 */
function addSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize Bootstrap tooltips
 */
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

/**
 * Handle navbar collapse on link click
 */
function handleNavbarCollapse() {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggle && navbarCollapse) {
        document.querySelectorAll('.navbar-nav a').forEach(link => {
            link.addEventListener('click', function () {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggle.click();
                }
            });
        });
    }
}

/**
 * Utility function to format numbers
 */
function formatNumber(num, decimals = 2) {
    return parseFloat(num).toFixed(decimals);
}

/**
 * Utility function to format timestamp
 */
function formatTimestamp(ms) {
    return `${ms}ms`;
}

/**
 * Log function for debugging
 */
function log(message, data = null) {
    if (data) {
        console.log(`[LOG] ${message}:`, data);
    } else {
        console.log(`[LOG] ${message}`);
    }
}

/**
 * Error logging function
 */
function logError(message, error = null) {
    if (error) {
        console.error(`[ERROR] ${message}:`, error);
    } else {
        console.error(`[ERROR] ${message}`);
    }
}

/**
 * Success logging function
 */
function logSuccess(message) {
    console.log(`[SUCCESS] ${message}`);
}
