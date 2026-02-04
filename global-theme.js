// Global Theme System for T&A
// This script should be included in all pages to enable theme switching

class GlobalThemeSwitcher {
    constructor() {
        this.currentTheme = localStorage.getItem('ai-nexus-theme') || 'dark';
        this.themeSwitcher = document.getElementById('themeSwitcher');
        this.themeIcon = document.getElementById('themeIcon');
        this.themeText = document.getElementById('themeText');
        
        this.init();
    }

    init() {
        // Apply saved theme on load
        this.applyTheme(this.currentTheme);
        
        // Add event listener
        if (this.themeSwitcher) {
            this.themeSwitcher.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for theme changes from other pages
        window.addEventListener('storage', (e) => {
            if (e.key === 'ai-nexus-theme' && e.newValue !== this.currentTheme) {
                this.currentTheme = e.newValue;
                this.applyTheme(this.currentTheme);
            }
        });
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('ai-nexus-theme', theme);
        this.applyTheme(theme);
        
        // Trigger storage event for other open pages
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'ai-nexus-theme',
            newValue: theme,
            url: window.location.href
        }));
    }

    applyTheme(theme) {
        const html = document.documentElement;
        const body = document.body;
        
        // Add transition class
        body.classList.add('theme-transition');
        
        if (theme === 'light') {
            html.classList.add('light-theme');
            this.updateThemeButton('🌞', 'LIGHT', 'text-orange-400', 'group-hover:text-orange-300');
        } else {
            html.classList.remove('light-theme');
            this.updateThemeButton('🌙', 'DARK', 'text-yellow-400', 'group-hover:text-yellow-300');
        }
        
        // Remove transition class after animation
        setTimeout(() => {
            body.classList.remove('theme-transition');
        }, 400);
    }

    updateThemeButton(icon, text, iconClass, hoverClass) {
        if (this.themeIcon && this.themeText) {
            // Update icon with animation
            this.themeIcon.style.transform = 'scale(0.8) rotate(180deg)';
            
            setTimeout(() => {
                this.themeIcon.innerHTML = `<span class="${iconClass} ${hoverClass} transition-colors text-sm">${icon}</span>`;
                this.themeText.textContent = text;
                this.themeIcon.style.transform = 'scale(1) rotate(0deg)';
            }, 150);
        }
    }

    // Static method to add theme button to any page
    static addThemeButton(container) {
        const button = document.createElement('button');
        button.id = 'themeSwitcher';
        button.className = 'group flex items-center space-x-2 px-3 py-2 bg-slate-800/60 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-950 shadow-lg backdrop-blur-sm';
        
        button.innerHTML = `
            <div id="themeIcon" class="w-4 h-4 flex items-center justify-center">
                <span class="text-yellow-400 group-hover:text-yellow-300 transition-colors text-sm">🌙</span>
            </div>
            <span id="themeText" class="text-xs font-medium text-slate-300 group-hover:text-white font-code tracking-wider hidden sm:block">DARK</span>
        `;
        
        container.appendChild(button);
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new GlobalThemeSwitcher();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GlobalThemeSwitcher;
}
