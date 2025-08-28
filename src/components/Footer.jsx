import { Github, ExternalLink, Heart, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Flutter Guide</h3>
            <p>Your complete guide to Flutter development with VS Code. No Android Studio required!</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#installation">Installation</a></li>
              <li><a href="#vscode">VS Code Setup</a></li>
              <li><a href="#first-app">First App</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">
                  Flutter Documentation <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://dart.dev" target="_blank" rel="noopener noreferrer">
                  Dart Language <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
                  VS Code <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/D3-crypto" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sonu-jha-692708248/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/sonu.106/" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-text">
            <p>Made with <Heart size={16} className="heart" /> for Flutter developers</p>
          </div>
          <div className="footer-text">
            <p>&copy; 2025 Flutter Guide. Open source and free to use.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
