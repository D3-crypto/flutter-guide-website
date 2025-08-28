import { Download, Terminal, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const InstallationSteps = ({ platform = 'windows' }) => {
  const getSteps = () => {
    switch (platform) {
      case 'windows':
        return [
          {
            id: 1,
            title: "Download Flutter SDK",
            description: "Download the Flutter SDK for Windows from the official website",
            command: "Download from https://flutter.dev/docs/get-started/install/windows",
            icon: <Download className="step-icon" />
          },
          {
            id: 2,
            title: "Extract and Set PATH",
            description: "Extract the zip file and add Flutter to your PATH environment variable",
            command: "setx PATH \"%PATH%;C:\\flutter\\bin\"",
            icon: <Terminal className="step-icon" />
          },
          {
            id: 3,
            title: "Run Flutter Doctor",
            description: "Check your environment and see if there are any dependencies you need to install",
            command: "flutter doctor",
            icon: <CheckCircle className="step-icon" />
          }
        ]
      case 'macos':
        return [
          {
            id: 1,
            title: "Install using Homebrew",
            description: "Install Flutter using Homebrew package manager",
            command: "brew install --cask flutter",
            icon: <Download className="step-icon" />
          },
          {
            id: 2,
            title: "Update PATH",
            description: "Add Flutter to your PATH in your shell configuration",
            command: "export PATH=\"$PATH:`pwd`/flutter/bin\"",
            icon: <Terminal className="step-icon" />
          },
          {
            id: 3,
            title: "Run Flutter Doctor",
            description: "Verify your installation and check for any missing dependencies",
            command: "flutter doctor",
            icon: <CheckCircle className="step-icon" />
          }
        ]
      case 'linux':
        return [
          {
            id: 1,
            title: "Download Flutter SDK",
            description: "Download and extract the Flutter SDK for Linux",
            command: "wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.x.x-stable.tar.xz",
            icon: <Download className="step-icon" />
          },
          {
            id: 2,
            title: "Extract and Set PATH",
            description: "Extract the tarball and add Flutter to your PATH",
            command: "export PATH=\"$PATH:`pwd`/flutter/bin\"",
            icon: <Terminal className="step-icon" />
          },
          {
            id: 3,
            title: "Run Flutter Doctor",
            description: "Check your environment setup",
            command: "flutter doctor",
            icon: <CheckCircle className="step-icon" />
          }
        ]
      default:
        return []
    }
  }

  const steps = getSteps()

  return (
    <section id="installation" className="installation-steps">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Installation Steps for {platform}</h2>
          <p className="section-subtitle">
            Follow these steps to install Flutter on your {platform} system
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="step-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-header">
                <div className="step-number">{step.id}</div>
                <div className="step-info">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {step.icon}
              </div>
              
              <div className="step-command">
                <code>{step.command}</code>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="installation-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AlertCircle className="note-icon" />
          <div className="note-content">
            <h4>Important Note</h4>
            <p>
              After installation, restart your terminal or IDE to ensure the PATH changes take effect. 
              You may also need to install additional dependencies like Android Studio or Xcode depending on your target platforms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InstallationSteps
