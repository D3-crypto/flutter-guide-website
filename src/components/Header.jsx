import { Github, Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useState } from 'react'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="nav">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <h2>Flutter Guide</h2>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="nav-links desktop-nav">
            <a href="#platforms">Platforms</a>
            <a href="#comparison">Why VS Code?</a>
            <a href="#installation">Installation</a>
            <a href="#vscode">VS Code</a>
            <a href="#structure">Project Structure</a>
            <a href="#first-app">First App</a>
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <a href="https://github.com/D3-crypto" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-nav-links">
                <a href="#platforms" onClick={closeMobileMenu}>Platforms</a>
                <a href="#comparison" onClick={closeMobileMenu}>Why VS Code?</a>
                <a href="#installation" onClick={closeMobileMenu}>Installation</a>
                <a href="#vscode" onClick={closeMobileMenu}>VS Code</a>
                <a href="#structure" onClick={closeMobileMenu}>Project Structure</a>
                <a href="#first-app" onClick={closeMobileMenu}>First App</a>
                <div className="mobile-nav-actions">
                  <motion.button
                    className="theme-toggle"
                    onClick={() => {
                      toggleTheme()
                      closeMobileMenu()
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                  </motion.button>
                  <a 
                    href="https://github.com/D3-crypto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
