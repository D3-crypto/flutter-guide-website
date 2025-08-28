import { motion } from 'framer-motion'
import { Folder, File, ChevronRight, Info } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const ProjectStructure = ({ platform = 'windows' }) => {
  const containerRef = useRef()
  const treeRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create spectacular folder tree animation
      createFolderTreeAnimation()
      
      // Add interactive hover effects
      addInteractiveEffects()
      
      // Create typing animation for descriptions
      createTypingAnimation()
      
      // Add scroll-triggered animations
      createScrollAnimations()
      
    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  const createFolderTreeAnimation = () => {
    // Animate folder items with spectacular effects
    gsap.fromTo('.folder-item', 
      { 
        x: -100, 
        opacity: 0, 
        rotationY: -90,
        scale: 0.8
      },
      { 
        x: 0, 
        opacity: 1, 
        rotationY: 0,
        scale: 1,
        duration: 1,
        stagger: {
          amount: 2,
          from: "start",
          ease: "power2.out"
        },
        ease: "back.out(1.7)"
      }
    )
    
    // Animate file icons with bouncing effect
    gsap.fromTo('.file-icon', 
      { scale: 0, rotation: -180 },
      { 
        scale: 1, 
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "elastic.out(1, 0.3)",
        delay: 0.5
      }
    )
    
    // Create connecting lines animation
    gsap.fromTo('.tree-line', 
      { scaleX: 0, transformOrigin: "left center" },
      { 
        scaleX: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1
      }
    )
  }

  const addInteractiveEffects = () => {
    const folderItems = document.querySelectorAll('.folder-item')
    
    folderItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        // Create pulsing glow effect
        gsap.to(item, {
          boxShadow: "0 0 30px rgba(76, 201, 240, 0.5), 0 0 50px rgba(76, 201, 240, 0.3)",
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        })
        
        // Animate child elements
        const children = item.querySelectorAll('.child-item')
        gsap.to(children, {
          x: 10,
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out"
        })
        
        // Create particle burst effect
        createParticleBurst(item)
      })
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
        
        const children = item.querySelectorAll('.child-item')
        gsap.to(children, {
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })
  }

  const createParticleBurst = (element) => {
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div')
      particle.className = 'burst-particle'
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #4cc9f0;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
      `
      
      element.appendChild(particle)
      
      const angle = (i / 8) * Math.PI * 2
      const distance = 50
      
      gsap.fromTo(particle, 
        { 
          x: 0, 
          y: 0, 
          scale: 0,
          opacity: 1 
        },
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => particle.remove()
        }
      )
    }
  }

  const createTypingAnimation = () => {
    const descriptions = document.querySelectorAll('.item-description')
    
    descriptions.forEach((desc, index) => {
      const originalText = desc.textContent
      gsap.set(desc, { text: "" })
      
      ScrollTrigger.create({
        trigger: desc,
        start: "top 80%",
        onEnter: () => {
          gsap.to(desc, {
            text: originalText,
            duration: originalText.length * 0.03,
            ease: "none",
            delay: index * 0.1
          })
        }
      })
    })
  }

  const createScrollAnimations = () => {
    // Parallax effect for the entire tree
    gsap.to('.folder-tree', {
      y: -50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    })
    
    // Rotate important folders on scroll
    gsap.to('.important-folder', {
      rotation: 5,
      scale: 1.02,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    })
  }

  const projectStructure = [
    {
      name: 'android/',
      type: 'folder',
      description: 'Android platform specific code and configurations',
      location: 'Root directory',
      children: [
        { name: 'app/', type: 'folder', description: 'Main Android app module' },
        { name: 'build.gradle.kts', type: 'file', description: 'Android build configuration' },
        { name: 'gradle.properties', type: 'file', description: 'Gradle properties and settings' }
      ]
    },
    {
      name: 'ios/',
      type: 'folder',
      description: 'iOS platform specific code (Xcode project)',
      location: 'Root directory',
      children: [
        { name: 'Runner/', type: 'folder', description: 'iOS app target' },
        { name: 'Runner.xcodeproj/', type: 'folder', description: 'Xcode project file' }
      ]
    },
    {
      name: 'lib/',
      type: 'folder',
      description: '🎯 Main Dart code - This is where you write your Flutter app!',
      location: 'Root directory',
      important: true,
      children: [
        { name: 'main.dart', type: 'file', description: 'Entry point of your Flutter application', important: true }
      ]
    },
    {
      name: 'test/',
      type: 'folder',
      description: 'Unit and widget tests for your application',
      location: 'Root directory',
      children: [
        { name: 'widget_test.dart', type: 'file', description: 'Default widget test file' }
      ]
    },
    {
      name: 'web/',
      type: 'folder',
      description: 'Web platform specific files and assets',
      location: 'Root directory',
      children: [
        { name: 'index.html', type: 'file', description: 'Main HTML file for web app' },
        { name: 'favicon.png', type: 'file', description: 'Web app favicon' }
      ]
    },
    {
      name: 'windows/',
      type: 'folder',
      description: 'Windows platform specific code and configurations',
      location: 'Root directory',
      children: [
        { name: 'runner/', type: 'folder', description: 'Windows app runner' },
        { name: 'CMakeLists.txt', type: 'file', description: 'CMake build configuration' }
      ]
    },
    {
      name: 'pubspec.yaml',
      type: 'file',
      description: '📦 Package configuration - Add dependencies here!',
      location: 'Root directory',
      important: true
    },
    {
      name: 'pubspec.lock',
      type: 'file',
      description: 'Locked versions of dependencies (auto-generated)',
      location: 'Root directory'
    },
    {
      name: 'analysis_options.yaml',
      type: 'file',
      description: 'Dart analyzer configuration and linting rules',
      location: 'Root directory'
    },
    {
      name: 'README.md',
      type: 'file',
      description: 'Project documentation and setup instructions',
      location: 'Root directory'
    }
  ]

  const keyLocations = [
    {
      path: '/lib/main.dart',
      description: 'Your app\'s entry point - where the magic begins!',
      usage: 'Contains main() function and app initialization'
    },
    {
      path: '/lib/pages/',
      description: 'Create this folder for different app screens',
      usage: 'home_page.dart, login_page.dart, etc.'
    },
    {
      path: '/lib/widgets/',
      description: 'Custom reusable widgets go here',
      usage: 'custom_button.dart, user_card.dart, etc.'
    },
    {
      path: '/lib/models/',
      description: 'Data models and classes',
      usage: 'user.dart, product.dart, etc.'
    },
    {
      path: '/assets/',
      description: 'Images, fonts, and other static files',
      usage: 'images/, fonts/, data/ folders'
    }
  ]

  return (
    <section id="structure" className="project-structure">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Flutter Project Structure</h2>
          <p>Understanding your Flutter project folder structure and where to find everything</p>
        </motion.div>

        <div className="structure-content">
          <motion.div 
            className="folder-structure"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>📁 Project Root Structure</h3>
            <div className="folder-tree">
              {projectStructure.map((item, index) => (
                <div key={index} className={`folder-item ${item.important ? 'important' : ''}`}>
                  <div className="folder-main">
                    <div className="folder-icon">
                      {item.type === 'folder' ? <Folder className="icon" /> : <File className="icon" />}
                    </div>
                    <div className="folder-info">
                      <div className="folder-name">{item.name}</div>
                      <div className="folder-location">📍 {item.location}</div>
                    </div>
                    <ChevronRight className="expand-icon" />
                  </div>
                  <div className="folder-description">
                    {item.description}
                  </div>
                  {item.children && (
                    <div className="folder-children">
                      {item.children.map((child, childIndex) => (
                        <div key={childIndex} className={`child-item ${child.important ? 'important' : ''}`}>
                          <div className="child-icon">
                            {child.type === 'folder' ? <Folder className="icon small" /> : <File className="icon small" />}
                          </div>
                          <div className="child-info">
                            <div className="child-name">{child.name}</div>
                            <div className="child-description">{child.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="key-locations"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>🎯 Key Development Locations</h3>
            <div className="locations-list">
              {keyLocations.map((location, index) => (
                <motion.div 
                  key={index}
                  className="location-card"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="location-path">
                    <code>{location.path}</code>
                  </div>
                  <div className="location-description">
                    {location.description}
                  </div>
                  <div className="location-usage">
                    <Info className="info-icon" />
                    {location.usage}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="structure-tips"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>💡 Pro Tips for Project Organization</h3>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>🏗️ lib/ folder structure</h4>
              <p>Organize your Dart code into logical folders like pages/, widgets/, models/, and services/</p>
            </div>
            <div className="tip-card">
              <h4>📦 pubspec.yaml</h4>
              <p>Always run <code>flutter pub get</code> after adding new dependencies to this file</p>
            </div>
            <div className="tip-card">
              <h4>🔧 Platform folders</h4>
              <p>android/, ios/, web/, windows/ contain platform-specific configurations - modify carefully!</p>
            </div>
            <div className="tip-card">
              <h4>🧪 test/ folder</h4>
              <p>Write unit and widget tests here to ensure your app works correctly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectStructure
