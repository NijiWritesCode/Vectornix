import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { ScrollRestoration } from "react-router-dom";
import CodeBlock from "./components/CodeBlock";
import { Terminal, GitBranch, Settings, Play } from "lucide-react";

const Docs = () => {
  const [activeTab, setActiveTab] = useState("docker");

  return (
    <>
      <header>
        <Navbar />
      </header>

      {/* Removed max-w-7xl, replaced with w-full so content spans full width */}
      <main className="relative w-full mx-auto p-6 flex gap-8 pt-24">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 sticky top-20 self-start border-r dark:border-gray-700 pr-4">
          <h3 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400">
            On this page
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#setup" className="hover:text-blue-500">Setup</a>
            </li>
            <li>
              <a href="#prerequisites" className="hover:text-blue-500">Prerequisites</a>
            </li>
            <li>
              <a href="#steps" className="hover:text-blue-500">Steps</a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Title */}
          <section id="setup">
            <h1 className="text-3xl font-bold mb-4">Setup</h1>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Get started with <strong>Vectornix AI Studio</strong> using Docker or
              by setting it up manually.
            </p>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b dark:border-gray-700 pb-2">
              <button
                onClick={() => setActiveTab("docker")}
                className={`pb-2 transition-colors ${
                  activeTab === "docker"
                    ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Docker Setup (Recommended)
              </button>
              <button
                onClick={() => setActiveTab("manual")}
                className={`pb-2 transition-colors ${
                  activeTab === "manual"
                    ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Manual Setup
              </button>
            </div>
          </section>

          {/* Docker Setup Section */}
          {activeTab === "docker" && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Docker Setup</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                The easiest way to get started with{" "}
                <strong>Vectornix AI Studio</strong> is by using Docker. This
                method ensures all dependencies are correctly installed and
                configured, providing a consistent environment across different
                systems.
              </p>

              {/* Prerequisites */}
              <h3 id="prerequisites" className="text-xl font-semibold mb-3">
                Prerequisites
              </h3>
              <ul className="list-disc ml-6 mb-8 space-y-1">
                <li>
                  <a
                    href="https://docs.docker.com/get-docker/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Docker
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.docker.com/compose/install/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Docker Compose
                  </a>
                </li>
              </ul>

              {/* Steps */}
              <h3 id="steps" className="text-xl font-semibold mb-6">Steps</h3>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <GitBranch size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold">1. Clone the Repository</h4>
                    <p className="mb-2 text-gray-600 dark:text-gray-400">
                      Clone the <strong>Vectornix AI Studio</strong> repository:
                    </p>
                    <CodeBlock
                      language="bash"
                      code={`git clone https://github.com/your-org/vectornix-ai-studio.git
cd vectornix-ai-studio`}
                    />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white">
                    <Settings size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      2. Configure Environment Variables
                    </h4>
                    <p className="mb-2 text-gray-600 dark:text-gray-400">
                      Copy the example environment file:
                    </p>
                    <CodeBlock language="bash" code={`cp .env.example .env`} />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    <Play size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold">3. Run Docker Compose</h4>
                    <p className="mb-2 text-gray-600 dark:text-gray-400">
                      Start <strong>Vectornix AI Studio</strong> services:
                    </p>
                    <CodeBlock language="bash" code={`docker-compose up -d`} />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Manual Setup Section */}
          {activeTab === "manual" && (
            <section>
              <h2 className="text-2xl font-semibold mb-3">Manual Setup</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you prefer to install <strong>Vectornix AI Studio</strong> manually:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">1. Clone the Repository</h4>
                  <CodeBlock
                    language="bash"
                    code={`git clone https://github.com/your-org/vectornix-ai-studio.git
cd vectornix-ai-studio`}
                  />
                </div>

                <div>
                  <h4 className="font-semibold">2. Install Dependencies</h4>
                  <CodeBlock language="bash" code={`npm install`} />
                </div>

                <div>
                  <h4 className="font-semibold">3. Start the App</h4>
                  <CodeBlock language="bash" code={`npm run dev`} />
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

      <ScrollRestoration />
    </>
  );
};

export default Docs;