import { Code, Puzzle, Zap, Settings } from 'lucide-react'

const VSCodeSetup = ({ platform = 'windows' }) => {
  const extensions = [
    {
      name: "Flutter",
      id: "Dart-Code.flutter",
      description: "Official Flutter extension with Dart support, debugging, and hot reload",
      icon: <Code className="extension-icon" />
    },
    {
      name: "Dart",
      id: "Dart-Code.dart-code",
      description: "Dart language support with syntax highlighting and IntelliSense",
      icon: <Puzzle className="extension-icon" />
    },
    {
      name: "Flutter Widget Snippets",
      id: "alexisvt.flutter-snippets",
      description: "Code snippets for faster Flutter development",
      icon: <Zap className="extension-icon" />
    }
  ]

  const vsCodeSteps = [
    "Open VS Code",
    "Go to Extensions (Ctrl+Shift+X)",
    "Search for 'Flutter' and install the official extension",
    "Restart VS Code",
    "Open Command Palette (Ctrl+Shift+P)",
    "Type 'Flutter: New Project' to create your first app"
  ]

  return (
    <section id="vscode" className="vscode-setup">
      <div className="container">
        <div className="section-header">
          <h2>VS Code Setup for Flutter</h2>
          <p>Configure Visual Studio Code for optimal Flutter development experience</p>
        </div>
        
        <div className="vscode-content">
          <div className="setup-steps">
            <h3><Settings className="inline-icon" /> Setup Steps</h3>
            <ol className="step-list">
              {vsCodeSteps.map((step, index) => (
                <li key={index} className="step-item">{step}</li>
              ))}
            </ol>
          </div>

          <div className="extensions-grid">
            <h3>Essential Extensions</h3>
            <div className="extensions">
              {extensions.map((extension, index) => (
                <div key={index} className="extension-card">
                  <div className="extension-header">
                    {extension.icon}
                    <h4>{extension.name}</h4>
                  </div>
                  <p>{extension.description}</p>
                  <code className="extension-id">{extension.id}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pro-tips">
          <h3>💡 Pro Tips</h3>
          <div className="tips-grid">
            <div className="tip">
              <strong>Hot Reload:</strong> Use Ctrl+F5 or 'r' in terminal for instant updates
            </div>
            <div className="tip">
              <strong>Widget Inspector:</strong> Use Flutter Inspector to debug UI layouts
            </div>
            <div className="tip">
              <strong>Shortcuts:</strong> Type 'stless' for StatelessWidget snippet
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VSCodeSetup
