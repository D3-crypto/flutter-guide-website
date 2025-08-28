# Flutter Guide Website 🚀

A modern, responsive React website that provides a comprehensive guide for installing and using Flutter with VS Code - no Android Studio required! Perfect for developers who prefer a lightweight development environment.

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with responsive design
- **📱 Mobile-First**: Fully responsive across all devices (mobile, tablet, desktop)
- **📚 Step-by-Step Guide**: Complete Flutter installation instructions for Windows
- **💻 VS Code Focus**: Optimized for VS Code development environment
- **📱 Mobile Development**: Guide for connecting Android devices without Android Studio
- **⚡ Interactive Examples**: Live code samples and commands
- **🌙 Dark/Light Theme**: Toggle between themes
- **🚀 GitHub Pages Ready**: Configured for easy deployment
- **⚡ Fast Performance**: Built with Vite for lightning-fast builds

## 🛠️ Tech Stack

- **React 19** - Latest frontend framework
- **Vite 7** - Next-generation build tool
- **Framer Motion** - Smooth animations
- **GSAP** - Advanced animations
- **Lucide React** - Beautiful icon library
- **CSS3** - Modern styling with custom properties
- **GitHub Pages** - Free hosting platform

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Git installed
- GitHub account (for deployment)

### Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/flutter-guide-website.git
   cd flutter-guide-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Local: [http://localhost:5173/flutter-guide-website/](http://localhost:5173/flutter-guide-website/)
   - The site will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Fork or clone this repository**

2. **Update the repository name in `vite.config.js`:**
   ```javascript
   base: '/your-repository-name/',
   ```

3. **Install dependencies and deploy:**
   ```bash
   npm install
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Your site will be live at: `https://yourusername.github.io/repository-name/`

### Manual Setup

1. **Create a new repository** on GitHub named `flutter-guide-website`

2. **Initialize git and connect:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Flutter guide website"
   git branch -M main
   git remote add origin https://github.com/yourusername/flutter-guide-website.git
   git push -u origin main
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
flutter-guide-website/
├── public/
│   ├── vite.svg                # Vite logo
│   └── ...                     # Other static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Responsive navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with animations
│   │   ├── PlatformSelector.jsx # Platform selection guide
│   │   ├── InstallationSteps.jsx # Step-by-step installation
│   │   ├── AndroidStudioComparison.jsx # VS Code vs Android Studio
│   │   ├── VSCodeSetup.jsx     # VS Code configuration
│   │   ├── ProjectStructure.jsx # Flutter project structure
│   │   ├── FirstApp.jsx        # First Flutter app tutorial
│   │   ├── SpectacularShowcase.jsx # Feature showcase
│   │   └── Footer.jsx          # Footer with social links
│   ├── contexts/
│   │   └── ThemeContext.jsx    # Dark/Light theme management
│   ├── assets/
│   │   └── react.svg           # React logo
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Comprehensive styles with responsive design
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── .gitignore                  # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── README.md                  # This file
└── vite.config.js            # Vite configuration
```

## 🎨 Responsive Design

The website is fully responsive with breakpoints for:
- **320px+**: Extra small mobile devices
- **480px+**: Small mobile devices  
- **640px+**: Large mobile devices
- **768px+**: Tablets
- **1024px+**: Small laptops
- **1200px+**: Desktop

Features include:
- Mobile-first hamburger navigation
- Responsive typography and spacing
- Touch-friendly buttons and interactions
- Optimized animations for mobile devices
- Accessible design patterns

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌟 Key Features Guide

### Navigation
- **Desktop**: Horizontal navigation with theme toggle
- **Mobile**: Collapsible hamburger menu with smooth animations

### Theme Support
- Toggle between light and dark themes
- Persistent theme preference
- Smooth transitions between themes

### Animations
- **GSAP**: Advanced scroll-triggered animations
- **Framer Motion**: Smooth component transitions
- **CSS**: Custom hover and focus effects

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sonu Jha**
- GitHub: [@D3-crypto](https://github.com/D3-crypto)
- LinkedIn: [Sonu Jha](https://www.linkedin.com/in/sonu-jha-692708248/)
- Instagram: [@sonu.106](https://www.instagram.com/sonu.106/)

## 🙏 Acknowledgments

- Flutter team for the amazing framework
- VS Code team for the excellent editor
- React and Vite communities for the powerful tools

---

**Made with ❤️ for Flutter developers who prefer VS Code over Android Studio!**

*⭐ If this project helped you, please give it a star on GitHub!*
