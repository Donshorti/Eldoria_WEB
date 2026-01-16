/**
 * Eldoria Wiki - Main JavaScript
 * Handles particles, navigation, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize floating particles
    initParticles();

    // Initialize smooth scroll navigation
    initSmoothScroll();
});

/**
 * Creates floating particle effects across the page
 */
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 30;
    const colors = ['#f4d675', '#8a4fc7', '#ff6b35', '#4a9fff'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';

        // Randomize particle color
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;

        particlesContainer.appendChild(particle);
    }
}

/**
 * Enables smooth scrolling for navigation anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });
}
