import React, { useState } from "react";
import { Terminal, GitBranch, Settings, Play, BookOpen, Zap, Package, Database, Cpu } from "lucide-react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";

const Docs = () => {
  const [activeTab, setActiveTab] = useState("docker");
  const [copiedStep, setCopiedStep] = useState(null);

  const copyToClipboard = (text, step) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const sidebarSections = [
    { id: "setup", label: "Setup", icon: Zap },
    { id: "prerequisites", label: "Prerequisites", icon: Package },
    { id: "steps", label: "Installation Steps", icon: Terminal },
    { id: "configuration", label: "Configuration", icon: Settings },
    { id: "architecture", label: "Architecture", icon: Cpu },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 dark:opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 dark:opacity-10"></div>
      </div>

      {/* Navbar placeholder - replace with your component */}
      <Navbar />

      <main className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 sticky top-24 self-start">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                  Documentation
                </h3>
              </div>
              <ul className="space-y-2">
                {sidebarSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
                    >
                      <section.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                <span className="text-blue-600 dark:text-blue-300 text-sm font-semibold flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Getting Started
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
                Setup Guide
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Get started with <strong>Vectornix AI Studio</strong> in minutes. Choose between Docker for the quickest setup or manual installation for more control.
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-12" id="setup">
              <div className="flex gap-4 bg-gray-100 dark:bg-gray-800/50 p-2 rounded-xl border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setActiveTab("docker")}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    activeTab === "docker"
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  🐳 Docker Setup
                </button>
                <button
                  onClick={() => setActiveTab("manual")}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    activeTab === "manual"
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  ⚙️ Manual Setup
                </button>
              </div>
            </div>

            {/* Docker Setup Content */}
            {activeTab === "docker" && (
              <div className="space-y-12">
                {/* Introduction */}
                <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Terminal className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        Docker Setup (Recommended)
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        The easiest and fastest way to get started. Docker ensures all dependencies are correctly installed and provides a consistent environment across different systems.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Prerequisites */}
                <section id="prerequisites">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                    <Package className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                    Prerequisites
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a
                      href="https://docs.docker.com/get-docker/"
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all hover:scale-105"
                    >
                      <div className="text-4xl mb-3">🐳</div>
                      <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Docker</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Container platform for running applications
                      </p>
                      <span className="text-blue-600 dark:text-blue-400 text-sm mt-3 inline-block group-hover:translate-x-1 transition-transform">
                        Install Docker →
                      </span>
                    </a>
                    <a
                      href="https://docs.docker.com/compose/install/"
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-purple-500 hover:shadow-xl transition-all hover:scale-105"
                    >
                      <div className="text-4xl mb-3">📦</div>
                      <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Docker Compose</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Tool for defining multi-container applications
                      </p>
                      <span className="text-purple-600 dark:text-purple-400 text-sm mt-3 inline-block group-hover:translate-x-1 transition-transform">
                        Install Compose →
                      </span>
                    </a>
                  </div>
                </section>

                {/* Installation Steps */}
                <section id="steps">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
                    <Terminal className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    Installation Steps
                  </h3>

                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="relative bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                          1
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                            <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Clone the Repository
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Get the latest version of Vectornix AI Studio from GitHub
                          </p>
                          <div className="relative group">
                            <pre className="bg-gray-900 dark:bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
                              <code className="text-sm font-mono">
{`git clone https://github.com/your-org/vectornix-ai-studio.git
cd vectornix-ai-studio`}
                              </code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard('git clone https://github.com/your-org/vectornix-ai-studio.git\ncd vectornix-ai-studio', 1)}
                              className="absolute top-3 right-3 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              {copiedStep === 1 ? '✓ Copied!' : 'Copy'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold shadow-lg">
                          2
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                            <Settings className="w-5 h-5 text-green-600 dark:text-green-400" />
                            Configure Environment Variables
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Set up your environment configuration file
                          </p>
                          <div className="relative group">
                            <pre className="bg-gray-900 dark:bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
                              <code className="text-sm font-mono">cp .env.example .env</code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard('cp .env.example .env', 2)}
                              className="absolute top-3 right-3 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              {copiedStep === 2 ? '✓ Copied!' : 'Copy'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                          3
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                            <Play className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            Start the Services
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Launch all Vectornix AI Studio services with Docker Compose
                          </p>
                          <div className="relative group">
                            <pre className="bg-gray-900 dark:bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
                              <code className="text-sm font-mono">docker-compose up -d</code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard('docker-compose up -d', 3)}
                              className="absolute top-3 right-3 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              {copiedStep === 3 ? '✓ Copied!' : 'Copy'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Success Message */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">You're all set!</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Vectornix AI Studio is now running at <code className="px-2 py-1 bg-white dark:bg-gray-800 rounded text-sm">http://localhost:3000</code>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Manual Setup Content */}
            {activeTab === "manual" && (
              <div className="space-y-12">
                {/* Introduction */}
                <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        Manual Setup
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        For developers who prefer more control over their environment. This method requires manual installation of dependencies.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Manual Steps */}
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="relative bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Clone the Repository</h4>
                        <div className="relative group">
                          <pre className="bg-gray-900 dark:bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
                            <code className="text-sm font-mono">
{`git clone https://github.com/your-org/vectornix-ai-studio.git
cd vectornix-ai-studio`}
                            </code>
                          </pre>
                          <button
                            onClick={() => copyToClipboard('git clone https://github.com/your-org/vectornix-ai-studio.git\ncd vectornix-ai-studio', 4)}
                            className="absolute top-3 right-3 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copiedStep === 4 ? '✓ Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold shadow-lg">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Install Dependencies</h4>
                        <div className="relative group">
                          <pre className="bg-gray-900 dark:bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
                            <code className="text-sm font-mono">npm install</code>
                          </pre>
                          <button
                            onClick={() => copyToClipboard('npm install', 5)}
                            className="absolute top-3 right-3 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copiedStep === 5 ? '✓ Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Start the Application</h4>
                        <div className="relative group">
                          <pre className="bg-gray-900 dark:bg-black/50 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
                            <code className="text-sm font-mono">npm run dev</code>
                          </pre>
                          <button
                            onClick={() => copyToClipboard('npm run dev', 6)}
                            className="absolute top-3 right-3 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copiedStep === 6 ? '✓ Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer placeholder */}
      <Footer />
    </div>
  );
};

export default Docs;