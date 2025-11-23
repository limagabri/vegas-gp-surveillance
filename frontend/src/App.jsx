import React from 'react';
import Dashboard from './components/Dashboard';
import { Radio, Activity } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="bg-black border-b-4 border-f1-red shadow-neon-red">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Title */}
            <div className="flex items-center gap-4">
              <div className="bg-f1-red p-2 rounded">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-white font-racing text-2xl md:text-3xl font-black tracking-tight">
                  LAS VEGAS GP
                </h1>
                <p className="text-f1-red font-mono text-xs md:text-sm uppercase tracking-widest">
                  Surveillance • Mission Control
                </p>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-panel-gray px-4 py-2 rounded border border-panel-border">
                <Activity className="w-4 h-4 text-green-500 animate-pulse" />
                <span className="text-green-500 font-mono text-sm uppercase tracking-wide">
                  System Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Dashboard />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-panel-border mt-12">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-text-gray font-mono text-xs">
              GP Las Vegas Mission Control Dashboard
            </p>
            <p className="text-text-gray font-mono text-xs">
              RTC Southern Nevada Traffic Cameras • 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
