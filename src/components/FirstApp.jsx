import { Play, Smartphone, Globe, Monitor } from 'lucide-react'

const FirstApp = ({ platform = 'windows' }) => {
  const codeSnippet = `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First Flutter App',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
      ),
      home: const MyHomePage(title: 'Flutter Counter App'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('You have pushed the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}`

  const runCommands = [
    {
      platform: "Windows Desktop",
      command: "flutter run -d windows",
      icon: <Monitor className="platform-icon" />
    },
    {
      platform: "Web Browser",
      command: "flutter run -d chrome",
      icon: <Globe className="platform-icon" />
    },
    {
      platform: "Android Device",
      command: "flutter run -d android",
      icon: <Smartphone className="platform-icon" />
    }
  ]

  return (
    <section id="first-app" className="first-app">
      <div className="container">
        <div className="section-header">
          <h2>Build Your First Flutter App</h2>
          <p>Create a simple counter app to test your Flutter setup</p>
        </div>

        <div className="app-content">
          <div className="create-app">
            <h3><Play className="inline-icon" /> Create New Project</h3>
            <div className="command-box">
              <code>flutter create my_first_app</code>
              <code>cd my_first_app</code>
            </div>
          </div>

          <div className="code-section">
            <h3>Complete Counter App Code</h3>
            <div className="code-container">
              <pre className="code-block">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>

          <div className="run-options">
            <h3>Run Your App</h3>
            <div className="platforms-grid">
              {runCommands.map((platform, index) => (
                <div key={index} className="platform-card">
                  <div className="platform-header">
                    {platform.icon}
                    <h4>{platform.platform}</h4>
                  </div>
                  <div className="platform-command">
                    <code>{platform.command}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mobile-setup">
            <h3>📱 Connect Your Android Phone</h3>
            <div className="mobile-steps">
              <div className="mobile-step">
                <strong>Step 1:</strong> Enable Developer Options
                <p>Go to Settings → About Phone → Tap "Build Number" 7 times</p>
              </div>
              <div className="mobile-step">
                <strong>Step 2:</strong> Enable USB Debugging
                <p>Settings → Developer Options → Enable "USB Debugging"</p>
              </div>
              <div className="mobile-step">
                <strong>Step 3:</strong> Connect and Run
                <p>Connect via USB cable and run: <code>flutter run</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstApp
