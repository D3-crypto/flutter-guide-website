import { CheckCircle, XCircle, Zap, HardDrive, Clock, Code, Crown } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AndroidStudioComparison = () => {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate comparison rows with stunning effects
      gsap.fromTo('.comparison-row', 
        { 
          x: -50, 
          opacity: 0, 
          scale: 0.95
        },
        { 
          x: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.comparison-table',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate winner badges
      gsap.fromTo('.winner-badge', 
        { scale: 0, rotation: -90 },
        { 
          scale: 1, 
          rotation: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: '.comparison-table',
            start: "top 70%",
          }
        }
      )
      
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  const comparisons = [
    {
      feature: 'Installation Size',
      androidStudio: '3-4 GB',
      vsCode: '200 MB',
      icon: <HardDrive className="comparison-icon" />,
      winner: 'vscode'
    },
    {
      feature: 'Startup Time',
      androidStudio: '30-60 seconds',
      vsCode: '2-5 seconds',
      icon: <Clock className="comparison-icon" />,
      winner: 'vscode'
    },
    {
      feature: 'Memory Usage',
      androidStudio: '2-4 GB RAM',
      vsCode: '300-500 MB',
      icon: <Zap className="comparison-icon" />,
      winner: 'vscode'
    },
    {
      feature: 'Flutter Development',
      androidStudio: 'Excellent',
      vsCode: 'Excellent',
      icon: <Code className="comparison-icon" />,
      winner: 'tie'
    },
    {
      feature: 'Built-in Emulator',
      androidStudio: 'Yes',
      vsCode: 'No (use external)',
      icon: <CheckCircle className="comparison-icon" />,
      winner: 'android'
    }
  ]

  return (
    <section id="comparison" className="android-studio-comparison" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="comparison-header section-header"
          initial={{ opacity: 0, y: 50 }}
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
            Why Choose VS Code Over Android Studio?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            While Android Studio is excellent, VS Code offers a lightweight alternative for Flutter development
          </motion.p>
        </motion.div>

        <motion.div 
          className="comparison-table"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="comparison-grid-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="comparison-title">Feature</div>
            <div className="comparison-title android-studio">Android Studio</div>
            <motion.div 
              className="comparison-title vscode"
              whileHover={{ 
                scale: 1.05,
                color: "#0466c8"
              }}
            >
              VS Code
            </motion.div>
          </motion.div>

          {comparisons.map((item, index) => (
            <motion.div 
              key={index} 
              className="comparison-row"
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                y: -2,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="comparison-feature"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <span>{item.feature}</span>
              </motion.div>
              <motion.div 
                className="comparison-value android-studio-value"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(247, 37, 133, 0.1)"
                }}
              >
                {item.androidStudio}
              </motion.div>
              <motion.div 
                className="comparison-value vscode-value"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(4, 102, 200, 0.1)"
                }}
              >
                {item.vsCode}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="comparison-conclusion"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="conclusion-card"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              boxShadow: "0 15px 35px rgba(4, 102, 200, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ display: "inline-block" }}
              >
                💡
              </motion.span>
              {" "}The Verdict
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              For Flutter development, VS Code provides everything you need with significantly less resource usage. 
              Perfect for developers who prefer a fast, lightweight IDE without compromising on functionality.
            </motion.p>

            {/* Interactive CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="#platforms" 
                className="btn btn-primary cta-button"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 15px 35px rgba(4, 102, 200, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Start with VS Code →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AndroidStudioComparison
