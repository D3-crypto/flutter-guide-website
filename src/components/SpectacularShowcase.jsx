import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Physics2DPlugin } from 'gsap/Physics2DPlugin'

// Register plugins
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, Physics2DPlugin)

const SpectacularShowcase = () => {
  const containerRef = useRef()
  const canvasRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a mesmerizing particle system
      createParticleSystem()
      
      // Morphing logo animation
      createMorphingAnimation()
      
      // Interactive magnetic cards
      createMagneticCards()
      
      // Liquid button effects
      createLiquidButtons()
      
      // Text that follows cursor
      createFollowCursor()
      
      // 3D flip cards with physics
      create3DFlipCards()
      
    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  const createParticleSystem = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles = []
    const particleCount = 100
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.radius = Math.random() * 3 + 1
        this.hue = Math.random() * 360
        this.saturation = 50 + Math.random() * 50
        this.lightness = 50 + Math.random() * 50
        this.alpha = Math.random() * 0.8 + 0.2
      }
      
      update() {
        this.x += this.vx
        this.y += this.vy
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        
        this.hue += 1
        if (this.hue > 360) this.hue = 0
      }
      
      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = (100 - distance) / 100 * 0.3
            ctx.strokeStyle = '#4cc9f0'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
      
      requestAnimationFrame(animate)
    }
    
    animate()
  }

  const createMorphingAnimation = () => {
    // Create SVG morphing animation
    const svg = document.querySelector('.morphing-svg')
    if (svg) {
      gsap.to('.morph-path', {
        morphSVG: 'M50,20 Q80,50 50,80 Q20,50 50,20',
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      })
    }
  }

  const createMagneticCards = () => {
    const cards = document.querySelectorAll('.magnetic-card')
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(card, {
          x: x * 0.1,
          y: y * 0.1,
          rotationX: y * 0.1,
          rotationY: x * 0.1,
          duration: 0.3,
          ease: "power2.out"
        })
        
        // Create trail effect
        const trail = document.createElement('div')
        trail.className = 'mouse-trail'
        trail.style.left = e.pageX + 'px'
        trail.style.top = e.pageY + 'px'
        document.body.appendChild(trail)
        
        gsap.to(trail, {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => trail.remove()
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power2.out"
        })
      })
    })
  }

  const createLiquidButtons = () => {
    const buttons = document.querySelectorAll('.liquid-button')
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        // Create liquid splash effect
        const splash = document.createElement('div')
        splash.className = 'liquid-splash'
        splash.style.left = x + 'px'
        splash.style.top = y + 'px'
        button.appendChild(splash)
        
        gsap.fromTo(splash, 
          { scale: 0, opacity: 1 },
          { 
            scale: 30, 
            opacity: 0, 
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => splash.remove()
          }
        )
        
        // Button deformation
        gsap.to(button, {
          scaleX: 0.95,
          scaleY: 1.1,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        })
      })
    })
  }

  const createFollowCursor = () => {
    const follower = document.querySelector('.cursor-follower')
    let mouseX = 0, mouseY = 0
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })
    
    gsap.to(follower, {
      x: () => mouseX,
      y: () => mouseY,
      duration: 0.8,
      ease: "power2.out",
      repeat: -1
    })
  }

  const create3DFlipCards = () => {
    const cards = document.querySelectorAll('.flip-card-3d')
    
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const isFlipped = card.classList.contains('flipped')
        
        gsap.to(card, {
          rotationY: isFlipped ? 0 : 180,
          duration: 0.8,
          ease: "power2.inOut",
          transformOrigin: "center center -50px"
        })
        
        // Add physics-based floating particles
        for (let i = 0; i < 10; i++) {
          const particle = document.createElement('div')
          particle.className = 'physics-particle'
          particle.style.position = 'absolute'
          particle.style.width = '4px'
          particle.style.height = '4px'
          particle.style.background = '#4cc9f0'
          particle.style.borderRadius = '50%'
          card.appendChild(particle)
          
          gsap.set(particle, {
            x: card.offsetWidth / 2,
            y: card.offsetHeight / 2
          })
          
          gsap.to(particle, {
            physics2D: {
              velocity: Math.random() * 400 - 200,
              angle: Math.random() * 360,
              gravity: 500
            },
            duration: 2,
            ease: "power1.out",
            onComplete: () => particle.remove()
          })
        }
        
        card.classList.toggle('flipped')
      })
    })
  }

  return (
    <section className="spectacular-showcase" ref={containerRef}>
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      {/* Cursor Follower */}
      <div className="cursor-follower"></div>
      
      <div className="container">
        <h2 className="showcase-title">Experience the Power of GSAP</h2>
        
        {/* Morphing SVG */}
        <div className="morphing-container">
          <svg className="morphing-svg" viewBox="0 0 100 100" width="200" height="200">
            <path className="morph-path" d="M50,10 Q90,50 50,90 Q10,50 50,10" fill="#4cc9f0" />
          </svg>
        </div>
        
        {/* Magnetic Cards */}
        <div className="cards-grid">
          <div className="magnetic-card">
            <h3>Magnetic Effect</h3>
            <p>Hover to see the magic!</p>
          </div>
          <div className="magnetic-card">
            <h3>3D Transform</h3>
            <p>Interactive animations</p>
          </div>
          <div className="magnetic-card">
            <h3>Particle Trail</h3>
            <p>Mouse tracking effects</p>
          </div>
        </div>
        
        {/* Liquid Buttons */}
        <div className="liquid-buttons">
          <button className="liquid-button">Liquid Splash</button>
          <button className="liquid-button">Physics Magic</button>
          <button className="liquid-button">Morphing Fun</button>
        </div>
        
        {/* 3D Flip Cards */}
        <div className="flip-cards">
          <div className="flip-card-3d">
            <div className="flip-card-front">
              <h3>Click to Flip</h3>
              <p>3D Animation with Physics</p>
            </div>
            <div className="flip-card-back">
              <h3>Amazing!</h3>
              <p>GSAP Physics2D Plugin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpectacularShowcase
