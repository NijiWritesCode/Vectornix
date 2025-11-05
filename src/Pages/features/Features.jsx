import React, { useState } from 'react';
import { Bot, Database, Image, Shield, User, Sparkles, Zap, ArrowRight, CheckCircle, Code, Layers, Lock, MessageSquare } from 'lucide-react';

// Import your components
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const mainFeatures = [
    {
      icon: Image,
      title: 'Multi-Modal Intelligence',
      description: 'Seamlessly work with text, images, and audio. Build AI agents that understand and process multiple types of content simultaneously.',
      gradient: 'from-blue-500 to-cyan-500',
      details: ['Text processing', 'Image analysis', 'Audio understanding', 'Cross-modal reasoning'],
      color: 'blue'
    },
    {
      icon: Bot,
      title: 'Flexible Agent Modes',
      description: 'Choose from conversational, task-oriented, or hybrid modes. Tailor your AI agents to match your specific use case perfectly.',
      gradient: 'from-purple-500 to-pink-500',
      details: ['Conversational AI', 'Task automation', 'Hybrid workflows', 'Custom behaviors'],
      color: 'purple'
    },
    {
      icon: Database,
      title: 'Persistent Memory',
      description: 'Your AI agents remember. Long-term memory enables learning from past interactions and building context over time.',
      gradient: 'from-green-500 to-emerald-500',
      details: ['Context retention', 'Learning capability', 'Conversation history', 'Knowledge accumulation'],
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Gatekeeper Mechanism',
      description: 'Stay in control. Advanced safeguards ensure your AI agents operate within defined boundaries and policies.',
      gradient: 'from-orange-500 to-red-500',
      details: ['Behavior control', 'Policy enforcement', 'Safety filters', 'Action validation'],
      color: 'orange'
    },
    {
      icon: User,
      title: 'Human-in-the-Loop',
      description: 'Keep humans in the loop. Intervene, provide feedback, and guide AI agents when needed for optimal outcomes.',
      gradient: 'from-indigo-500 to-blue-500',
      details: ['Manual intervention', 'Feedback loops', 'Guided responses', 'Quality control'],
      color: 'indigo'
    }
  ];

  const additionalFeatures = [
    { icon: Zap, title: 'High Performance', description: 'Lightning-fast response times' },
    { icon: Lock, title: 'Enterprise Security', description: 'Bank-grade encryption' },
    { icon: Layers, title: 'Scalable Architecture', description: 'Grows with your needs' },
    { icon: Code, title: 'Developer-Friendly', description: 'Easy integration & APIs' },
    { icon: MessageSquare, title: 'Real-time Processing', description: 'Instant interactions' },
    { icon: CheckCircle, title: 'Production Ready', description: 'Battle-tested reliability' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 dark:opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 dark:opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 dark:opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navbar placeholder */}
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm animate-fade-in">
              <span className="text-blue-600 dark:text-blue-300 text-sm font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Powerful Capabilities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-transparent">
                Built for the Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover the comprehensive feature set that makes Vectornix AI Studio the most advanced platform for building intelligent agents
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Feature Details */}
                  <div className={`space-y-2 transition-all duration-500 ${hoveredFeature === index ? 'opacity-100 max-h-48' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    {feature.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className={`w-4 h-4 text-${feature.color}-500`} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-12 border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                And Much More
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Everything you need to build production-ready AI agents
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-sm mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Vectornix?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how we compare to traditional AI platforms
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl">
            <div className="grid grid-cols-3 gap-px bg-gray-200 dark:bg-gray-700">
              {/* Header */}
              <div className="bg-white dark:bg-gray-800 p-6">
                <h3 className="font-bold text-gray-900 dark:text-white">Feature</h3>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6">
                <h3 className="font-bold text-blue-600 dark:text-blue-400">Vectornix AI Studio</h3>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6">
                <h3 className="font-bold text-gray-500 dark:text-gray-400">Others</h3>
              </div>

              {/* Rows */}
              {[
                { feature: 'Multi-Modal Support', vectornix: true, others: false },
                { feature: 'Persistent Memory', vectornix: true, others: false },
                { feature: 'Human-in-the-Loop', vectornix: true, others: true },
                { feature: 'Gatekeeper Controls', vectornix: true, others: false },
                { feature: 'Real-time Processing', vectornix: true, others: true },
                { feature: 'Enterprise Ready', vectornix: true, others: true }
              ].map((row, i) => (
                <React.Fragment key={i}>
                  <div className="bg-white dark:bg-gray-800 p-6 flex items-center">
                    <span className="text-gray-700 dark:text-gray-300">{row.feature}</span>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 flex items-center justify-center">
                    {row.vectornix ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 flex items-center justify-center">
                    {row.others ? (
                      <CheckCircle className="w-6 h-6 text-gray-400" />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join developers worldwide building the next generation of AI agents
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  Start Building Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer placeholder */}
      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default Features;