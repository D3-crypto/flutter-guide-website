import React, { useState, useRef, useEffect } from 'react'
import { Monitor, Apple, HardDrive } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PlatformSelector = ({ onPlatformSelect, selectedPlatform }) => {
  const [currentPlatform, setCurrentPlatform] = useState(selectedPlatform || 'windows')
  const selectorRef = useRef(null)

  const platforms = [
    {
      id: 'windows',
      name: 'Windows',
      icon: Monitor,
      requirements: {
        os: 'Windows 10/11 (64-bit)',
        ram: '4 GB RAM minimum, 8 GB recommended',
        storage: '2 GB free space',
        processor: 'Intel i3 or AMD equivalent',
        additional: 'Windows PowerShell 5.0 or later'
      }
    },
    {
      id: 'macos',
      name: 'macOS',
      icon: Apple,
      requirements: {
        os: 'macOS 10.14 Mojave or later',
        ram: '4 GB RAM minimum, 8 GB recommended',
        storage: '2 GB free space',
        processor: 'Intel or Apple Silicon (M1/M2)',
        additional: 'Xcode command line tools'
      }
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: HardDrive,
      requirements: {
        os: 'Ubuntu 18.04+, Debian 10+, or equivalent',
        ram: '4 GB RAM minimum, 8 GB recommended',
        storage: '2 GB free space',
        processor: 'x64 architecture',
        additional: 'curl, git, unzip, xz-utils'
      }
    }
  ]

  useEffect(() => {
    // Set Windows as default
    if (!selectedPlatform) {
      setCurrentPlatform('windows')
      onPlatformSelect('windows')
    } else {
      setCurrentPlatform(selectedPlatform)
    }
  }, [selectedPlatform, onPlatformSelect])

  const handlePlatformClick = (platformId) => {
    setCurrentPlatform(platformId)
    onPlatformSelect(platformId)
  }

  const currentPlatformData = platforms.find(p => p.id === currentPlatform)

  return (
    <section id="platforms" className="platform-selector" ref={selectorRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose Your Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Select your operating system to get platform-specific installation instructions
          </motion.p>
        </motion.div>

        {/* Platform Buttons */}
        <motion.div 
          className="platform-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon
            const isSelected = currentPlatform === platform.id

            return (
              <motion.button
                key={platform.id}
                className={`platform-button ${isSelected ? 'selected' : ''}`}
                onClick={() => handlePlatformClick(platform.id)}
                whileHover={{ 
                  scale: 1.05,
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="platform-button-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent size={32} />
                </motion.div>
                <span className="platform-button-name">{platform.name}</span>
                {isSelected && (
                  <motion.div
                    className="selected-indicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    ✓
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Requirements Section */}
        <AnimatePresence mode="wait">
          {currentPlatformData && (
            <motion.div
              key={currentPlatform}
              className="platform-requirements"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                System Requirements for {currentPlatformData.name}
              </motion.h3>
              
              <motion.div 
                className="requirements-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="requirement-item">
                  <strong>Operating System:</strong>
                  <span>{currentPlatformData.requirements.os}</span>
                </div>
                <div className="requirement-item">
                  <strong>Memory:</strong>
                  <span>{currentPlatformData.requirements.ram}</span>
                </div>
                <div className="requirement-item">
                  <strong>Storage:</strong>
                  <span>{currentPlatformData.requirements.storage}</span>
                </div>
                <div className="requirement-item">
                  <strong>Processor:</strong>
                  <span>{currentPlatformData.requirements.processor}</span>
                </div>
                <div className="requirement-item">
                  <strong>Additional:</strong>
                  <span>{currentPlatformData.requirements.additional}</span>
                </div>
              </motion.div>

              <motion.div
                className="installation-preview"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h4>Quick Installation Steps:</h4>
                <ol>
                  <li>Download and install VS Code</li>
                  <li>Install Flutter SDK</li>
                  <li>Install Flutter and Dart extensions</li>
                  <li>Configure environment variables</li>
                  <li>Run flutter doctor to verify setup</li>
                </ol>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PlatformSelector
