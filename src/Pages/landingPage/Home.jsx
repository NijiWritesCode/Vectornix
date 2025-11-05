import React, { useState, useEffect } from "react";
import { MessageCircleDashed, Search, Tv, ArrowRight, Sparkles, Zap, Shield, Code, Github, Star, TrendingUp } from "lucide-react";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "AI Agents", value: "1000+", icon: Sparkles },
    { label: "Interactions/Day", value: "50K+", icon: TrendingUp },
    { label: "Uptime", value: "99.9%", icon: Shield },
    { label: "Response Time", value: "<100ms", icon: Zap }
  ];

  const features = [
    {
      icon: MessageCircleDashed,
      title: "Chat Mode",
      description: "Natural, context-aware conversations powered by advanced AI",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      icon: Search,
      title: "Search Mode",
      description: "Intelligent search with real-time knowledge enhancement",
      gradient: "from-purple-500 to-pink-500",
      delay: "150ms"
    },
    {
      icon: Tv,
      title: "Research Mode",
      description: "Deep analysis and comprehensive research capabilities",
      gradient: "from-orange-500 to-red-500",
      delay: "300ms"
    }
  ];

  const techStack = [
    { name: "Python", color: "#3776AB", logo: "🐍" },
    { name: "FastAPI", color: "#009688", logo: "⚡" },
    { name: "React", color: "#61DAFB", logo: "⚛️" },
    { name: "Docker", color: "#2496ED", logo: "🐳" },
    { name: "Redis", color: "#DC382D", logo: "🔴" },
    { name: "PostgreSQL", color: "#336791", logo: "🐘" },
    { name: "MinIO", color: "#C72E49", logo: "📦" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm animate-fade-in">
            <span className="text-blue-300 text-sm flex items-center gap-2">
              <Star className="w-4 h-4" /> Next-Gen AI Platform
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Vectornix AI Studio
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Multi-Modal, Stateful AI Agent Platform
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Build, deploy, and scale intelligent AI agents that understand context, maintain state, and interact naturally across multiple modalities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-gray-800 hover:bg-gray-700 border border-gray-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              View on GitHub
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all hover:scale-105 hover:border-blue-500/50">
                <stat.icon className="w-8 h-8 text-blue-400 mb-2 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Code className="absolute top-1/4 left-10 w-12 h-12 text-blue-500/30 animate-float" />
          <Zap className="absolute top-1/3 right-20 w-16 h-16 text-purple-500/30 animate-float" style={{ animationDelay: "1s" }} />
          <Sparkles className="absolute bottom-1/4 left-1/4 w-10 h-10 text-pink-500/30 animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to build intelligent, context-aware AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  activeFeature === i ? 'ring-2 ring-blue-500' : ''
                }`}
                style={{ animationDelay: feature.delay }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="relative py-32 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Modern Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with cutting-edge technologies for performance and scalability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{tech.logo}</div>
                <div className="text-sm font-semibold" style={{ color: tech.color }}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of developers building next-generation AI agents with Vectornix
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2">
                  Start Building Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Vectornix
          </div>
          <p>© 2025 Vectornix AI Studio. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
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

export default Home;