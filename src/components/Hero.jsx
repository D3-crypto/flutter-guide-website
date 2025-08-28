import { Download, Code, Smartphone, Github, Linkedin, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin)

const Hero = () => {
  const heroRef = useRef()
  const titleRef = useRef()
  const particlesRef = useRef()
  const codeRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles
      createFloatingParticles()
      
      // Spectacular title animation with morphing text
      const tl = gsap.timeline()
      
      // Split text animation
      gsap.set('.hero-title-word', { opacity: 0, y: 100, rotationX: -90 })
      tl.to('.hero-title-word', {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
      })
      
      // Typewriter effect for subtitle
      .to('.hero-subtitle', {
        text: "Build Beautiful Cross-Platform Apps with Flutter & VS Code",
        duration: 2,
        ease: "none"
      }, "-=0.5")
      
      // Animated code snippet
      .from('.code-snippet', {
        opacity: 0,
        scale: 0.8,
        rotationY: 45,
        duration: 1,
        ease: "power3.out"
      }, "-=1")
      
      // Floating phone with 3D rotation
      .to('.phone-mockup', {
        y: -20,
        rotationY: 15,
        rotationX: 5,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      }, "-=2")
      
      // Interactive stats counter with explosion effect
      .to('.counter', {
        textContent: 42,
        duration: 2,
        ease: "bounce.out",
        snap: { textContent: 1 },
        stagger: 0.1,
        onUpdate: function() {
          // Add glowing effect during count
          gsap.to(this.targets(), {
            textShadow: "0 0 20px #0466c8, 0 0 40px #0466c8",
            duration: 0.1
          })
        }
      }, "-=1")
      
      // Scroll-triggered parallax effects
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to('.hero-bg-shapes', {
            y: progress * 200,
            rotation: progress * 360,
            scale: 1 + progress * 0.5,
            duration: 0.3
          })
          
          gsap.to('.floating-elements', {
            y: progress * -100,
            x: progress * 50,
            rotation: progress * -180,
            duration: 0.3
          })
        }
      })
      
      // Interactive hover animations for buttons
      const buttons = document.querySelectorAll('.cta-button')
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(4, 102, 200, 0.4)",
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          })
          
          // Create ripple effect
          createRippleEffect(button)
        })
        
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      })
      
    }, heroRef)
    
    return () => ctx.revert()
  }, [])
  
  const createFloatingParticles = () => {
    const particleCount = 50
    const particles = []
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'floating-particle'
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: linear-gradient(45deg, #0466c8, #4cc9f0);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
      `
      
      particlesRef.current?.appendChild(particle)
      particles.push(particle)
      
      // Animate particles along random paths
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.8 + 0.2
      })
      
      gsap.to(particle, {
        motionPath: {
          path: `M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 200},${Math.random() * 200} ${Math.random() * 300},${Math.random() * 300}`,
          autoRotate: true
        },
        duration: Math.random() * 20 + 10,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 5
      })
      
      // Pulsing animation
      gsap.to(particle, {
        scale: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 3 + 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      })
    }
  }
  
  const createRippleEffect = (element) => {
    const ripple = document.createElement('div')
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `
    
    const rect = element.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    ripple.style.width = ripple.style.height = size + 'px'
    ripple.style.left = (rect.width - size) / 2 + 'px'
    ripple.style.top = (rect.height - size) / 2 + 'px'
    
    element.appendChild(ripple)
    
    gsap.to(ripple, {
      scale: 4,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => ripple.remove()
    })
  }

  return (
    <section className="hero" ref={heroRef}>
      {/* Floating particles container */}
      <div ref={particlesRef} className="particles-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 1 }}></div>
      
      {/* Animated background shapes */}
      <div className="hero-bg-shapes">
        <motion.div 
          className="bg-shape shape-1"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="bg-shape shape-2"
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="bg-shape shape-3"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="hero-title-word"
                initial={{ opacity: 0, rotateX: -90, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#4cc9f0",
                  textShadow: "0 0 20px rgba(76, 201, 240, 0.5)"
                }}
              >Learn</motion.span>
              {' '}
              <motion.span 
                className="hero-title-word"
                initial={{ opacity: 0, rotateX: -90, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#f72585",
                  textShadow: "0 0 20px rgba(247, 37, 133, 0.5)"
                }}
              >Flutter</motion.span>
              {' '}
              <motion.span 
                className="hero-title-word"
                initial={{ opacity: 0, rotateX: -90, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#06d6a0",
                  textShadow: "0 0 20px rgba(6, 214, 160, 0.5)"
                }}
              >Development</motion.span>
              {' '}
              <motion.span 
                className="hero-title-word"
                initial={{ opacity: 0, rotateX: -90, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#4cc9f0",
                  textShadow: "0 0 20px rgba(76, 201, 240, 0.5)"
                }}
              >with</motion.span>
              {' '}
              <motion.span 
                className="hero-title-word"
                initial={{ opacity: 0, rotateX: -90, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#0466c8",
                  textShadow: "0 0 20px rgba(4, 102, 200, 0.5)"
                }}
              >VS</motion.span>
              {' '}
              <motion.span 
                className="hero-title-word"
                initial={{ opacity: 0, rotateX: -90, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#0466c8",
                  textShadow: "0 0 20px rgba(4, 102, 200, 0.5)"
                }}
              >Code</motion.span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            ></motion.p>
            
            <motion.div 
              className="hero-features"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.div 
                className="feature floating-elements"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(4, 102, 200, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Code className="feature-icon" />
                <span>VS Code Only</span>
              </motion.div>
              <motion.div 
                className="feature floating-elements"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -5,
                  boxShadow: "0 10px 30px rgba(76, 201, 240, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Download className="feature-icon" />
                <span>Easy Setup</span>
              </motion.div>
              <motion.div 
                className="feature floating-elements"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(6, 214, 160, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Smartphone className="feature-icon" />
                <span>Mobile Ready</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              <motion.a 
                href="#platforms" 
                className="btn btn-primary cta-button"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(4, 102, 200, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Get Started
              </motion.a>
              <motion.a 
                href="#first-app" 
                className="btn btn-secondary cta-button"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(76, 201, 240, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Build Your First App
              </motion.a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="hero-social-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.p 
                className="social-intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                Connect with the developer:
              </motion.p>
              <motion.div 
                className="social-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <motion.a 
                  href="https://github.com/D3-crypto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn github"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/sonu-jha-692708248/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: "0 10px 25px rgba(0, 119, 181, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/sonu.106/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn instagram"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: "0 10px 25px rgba(225, 48, 108, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Interactive code snippet with framer-motion */}
            <motion.div 
              className="code-snippet"
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 2.4, ease: "backOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 50px rgba(4, 102, 200, 0.2)"
              }}
            >
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.8 }}
              >
                <code>
{`import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Flutter')),
        body: Center(
          child: Text('Hello World!'),
        ),
      ),
    );
  }
}`}
                </code>
              </motion.pre>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 100, rotateY: 30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="phone-mockup"
              animate={{ 
                y: [-10, 10, -10],
                rotateY: [15, -5, 15],
                rotateX: [5, -2, 5]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 25,
                rotateX: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="phone-screen"
                whileHover={{
                  boxShadow: "0 0 50px rgba(4, 102, 200, 0.5)"
                }}
              >
                <div className="app-demo">
                  <motion.div 
                    className="demo-header"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    Flutter Counter App
                  </motion.div>
                  <div className="demo-content">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.2 }}
                    >
                      You have pushed the button this many times:
                    </motion.p>
                    <motion.div 
                      className="counter"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 3.5, type: "spring", stiffness: 200 }}
                    >
                      0
                    </motion.div>
                  </div>
                  <motion.div 
                    className="demo-button cta-button"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 3.8, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 10px 30px rgba(4, 102, 200, 0.5)"
                    }}
                    whileTap={{ 
                      scale: 0.9,
                      rotate: -5
                    }}
                  >
                    +
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Additional floating elements */}
            <motion.div 
              className="floating-elements flutter-logo"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.div 
                className="logo-particle"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(4, 102, 200, 0.5)",
                    "0 0 40px rgba(76, 201, 240, 0.8)",
                    "0 0 20px rgba(4, 102, 200, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
