// AI Nexus - Neural Learning Interface - Main JavaScript
// Check if user is already logged in on page load
document.addEventListener('DOMContentLoaded', function() {
    const userId = localStorage.getItem('userId');
    
    if (userId) {
        // User is logged in, show dashboard
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainDashboard').classList.remove('hidden');
        
        // Update welcome message
        const userWelcome = document.getElementById('userWelcome');
        const userText = document.getElementById('userText');
        if (userWelcome && userText) {
            userText.textContent = `Welcome, ${userId}`;
            userWelcome.style.display = 'block';
        }
        
        // Initialize logout functionality
        initLogoutButton();
        
        // Initialize dashboard animations
        optimizedAnimations.init();
    }
});

// Main login form submission
document.getElementById('mainLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userid = document.getElementById('mainUserid').value.trim();
    const button = this.querySelector('button[type="submit"]');
    const spinner = document.getElementById('mainLoadingSpinner');
    const buttonText = button.querySelector('span:first-child');
    
    // Basic validation
    if (!userid) {
        alert('Please enter your User ID');
        return;
    }
    
    // Show loading state
    spinner.classList.remove('hidden');
    buttonText.textContent = 'Connecting...';
    button.disabled = true;
    
    // Simulate login process
    setTimeout(() => {
        // Hide loading state
        spinner.classList.add('hidden');
        buttonText.textContent = 'Access Granted';
        button.style.background = 'linear-gradient(to right, #10B981, #059669, #047857)';
        
        // Store user ID
        localStorage.setItem('userId', userid);
        
        // Transition to dashboard
        setTimeout(() => {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('mainDashboard').classList.remove('hidden');
            
            // Update welcome message
            const userWelcome = document.getElementById('userWelcome');
            const userText = document.getElementById('userText');
            if (userWelcome && userText) {
                userText.textContent = `Welcome, ${userid}`;
                userWelcome.style.display = 'block';
            }
            
            // Initialize logout functionality
            initLogoutButton();
            
            // Initialize dashboard animations
            optimizedAnimations.init();
        }, 1000);
    }, 1500);
});

// Logout functionality
function initLogoutButton() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Clear stored user ID
            localStorage.removeItem('userId');
            
            // Hide dashboard and show login screen
            document.getElementById('mainDashboard').classList.add('hidden');
            document.getElementById('loginScreen').style.display = 'flex';
            
            // Reset login form
            document.getElementById('mainUserid').value = '';
            const button = document.querySelector('#mainLoginForm button[type="submit"]');
            const buttonText = button.querySelector('span:first-child');
            buttonText.textContent = 'Access Dashboard';
            button.style.background = 'linear-gradient(to right, #3B82F6, #2563EB, #06B6D4)';
            button.disabled = false;
        });
    }
}

// Particle system for login screen
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
    particle.style.background = ['#3B82F6', '#06B6D4', '#8B5CF6', '#10B981'][Math.floor(Math.random() * 4)];
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 5000);
}

// Create particles periodically (only when login screen is visible)
setInterval(() => {
    const loginScreen = document.getElementById('loginScreen');
    if (loginScreen && loginScreen.style.display !== 'none') {
        createParticle();
    }
}, 2000);

// Neural scan effect on input focus
document.querySelectorAll('.neural-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
        this.style.borderColor = '#3B82F6';
    });
    
    input.addEventListener('blur', function() {
        this.style.boxShadow = 'none';
        this.style.borderColor = 'rgba(74, 85, 104, 0.5)';
    });
});

// Performance: Use requestAnimationFrame for smooth animations
const optimizedAnimations = {
    init() {
        // Respect user's motion preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0s');
            return;
        }
        
        // Initialize intersection observer for lazy animations
        this.setupIntersectionObserver();
    },
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '50px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate on scroll
        document.querySelectorAll('.animate-slide-up').forEach(el => {
            observer.observe(el);
        });
    }
};

// Performance: Announce progress updates to screen readers
function announceProgress(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => {
        if (document.body.contains(announcement)) {
            document.body.removeChild(announcement);
        }
    }, 1000);
}

// Performance: Preload hover states
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.hover-optimized')) {
        // Trigger hover state preparation
        e.target.closest('.hover-optimized').style.willChange = 'transform, box-shadow';
    }
}, { passive: true });

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.hover-optimized')) {
        // Clean up will-change
        setTimeout(() => {
            if (e.target.closest('.hover-optimized')) {
                e.target.closest('.hover-optimized').style.willChange = 'auto';
            }
        }, 300);
    }
}, { passive: true });
