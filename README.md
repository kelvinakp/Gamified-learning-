# 🤖 T&A - Neural Learning Interface

A futuristic, gamified AI learning platform with a professional Single Page Application (SPA) architecture, advanced UI/UX, full Light/Dark mode support, accessibility features, and a seamless user experience.

## 🚀 Getting Started

1. **Entry Point**: Open `login.html` in your web browser.
2. **Login**: Enter any User ID to access the platform.
3. **Dashboard**: After login, you'll be automatically redirected to the main learning dashboard (`index.html`).
4. **Navigation**: Use the top navigation bar or sidebar to explore different sections seamlessly via SPA routing.

## 🌟 Platform Features

### 🎯 Core Learning Experience
- **Interactive Dashboard** (`index.html`): Progress tracking, lesson management, and personalized learning paths.
- **Labs** (`labs.html`): Hands-on experimentation with AI concepts and tools.
- **Archive** (`archive.html`): Comprehensive library of historical data, completed experiments, and knowledge.
- **Profile** (`profile.html`): User progress, achievements, and skill development tracking.

### 🎮 Gamification Elements
- Real-time progress bars and completion tracking.
- Achievement badges and milestone rewards.
- Glassmorphism design and interactive UI nodes.
- XP system and level progression.

### 🌓 Global Theme System
- **True Dark/Light Modes**: Comprehensive styling for both modes using Tailwind CSS and CSS variables.
- **Persistent State**: Theme preference is saved locally via `localStorage` and persists across sessions.
- **Cross-Tab Synchronization**: Automatically syncs theme changes across open tabs in real-time using `storage` events.

### ⚡ SPA Navigation Architecture
- **No Page Reloads**: Uses `fetch` API and `history.pushState` to dynamically load page content without full browser refreshes.
- **Maintained State**: The header (with the theme toggle and user profile) remains static and fully functional across navigation.
- **Optimized Transitions**: Hardware-accelerated animations fade content in and out during navigation.

## 📁 File Structure

```
researchX/
├── index.html          # Main dashboard & SPA Shell
├── login.html          # Authentication entry point
├── profile.html        # User profile and achievements
├── labs.html           # Experimental AI environments
├── archive.html        # Historical data and completed experiments
├── scripts.js          # Main SPA navigation and session logic
├── global-theme.js     # Global theme switcher logic
└── README.md           # Documentation (this file)
```

## 🛠️ Technical Details

- **Framework**: Pure HTML5, CSS3, and JavaScript (ES6+). No external JS frameworks required.
- **Styling**: Tailwind CSS via CDN, heavily customized with glassmorphism and gradient utilities.
- **Typography**: Inter (body text) and Space Grotesk (headings) from Google Fonts.
- **Storage**: `localStorage` used for session management (`userSession`) and theme preferences.

## 🎨 Visual Design System
- **Colors**: Rich gradients featuring Blue (#3B82F6), Cyan (#06B6D4), and Purple (#8B5CF6).
- **Dark Theme**: Deep slate backgrounds (#0F172A, #1E293B) with glowing accents. 
- **Light Theme**: Bright, clean backgrounds (#F8FAFC) with vibrant gradient overrides for key elements to ensure they pop.
- **Interactive**: Hover, scale, and focus states with smooth transitions on buttons and cards.

## 💻 Contribution & Development
This dashboard is designed to be easily extensible. To add a new page:
1. Create a visually consistent HTML file (e.g., `settings.html`).
2. Exclude the Header and Theme Switcher from the new file (the SPA shell in `index.html` injects the content).
3. Add a navigation link with `data-page="settings.html"` and the `nav-link` class.
