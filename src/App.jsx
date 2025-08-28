import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import AndroidStudioComparison from './components/AndroidStudioComparison'
import PlatformSelector from './components/PlatformSelector'
import InstallationSteps from './components/InstallationSteps'
import VSCodeSetup from './components/VSCodeSetup'
import ProjectStructure from './components/ProjectStructure'
import FirstApp from './components/FirstApp'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [showContent, setShowContent] = useState(false)

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform)
    setShowContent(true)
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <AndroidStudioComparison />
        <PlatformSelector 
          onPlatformSelect={handlePlatformSelect} 
          selectedPlatform={selectedPlatform}
        />
        
        {showContent && selectedPlatform && (
          <>
            <InstallationSteps platform={selectedPlatform} />
            <VSCodeSetup platform={selectedPlatform} />
            <ProjectStructure platform={selectedPlatform} />
            <FirstApp platform={selectedPlatform} />
          </>
        )}
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
