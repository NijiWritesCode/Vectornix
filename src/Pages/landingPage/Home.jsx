import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import bgImg from '../../assets/vc-bg.jpg'
import FeatureCard from './components/FeatureCard'
import { MessageCircleDashed, Search, Tv } from 'lucide-react'
import ShowcaseCard from './components/ShowcaseCard'
import image from '../../assets/vc-bg.jpg'
import StackCard from './components/StackCard'
import { SiDocker, SiFastapi, SiMinio, SiPostgresql, SiPython, SiReact, SiRedis } from 'react-icons/si'
import GetStarted from './components/GetStarted'
import Footer from '../../components/footer/footer'

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] bg-cover bg-center flex pt-12 flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/80"></div>

        <div className="w-full max-w-5xl z-10 -mt-6 md:-mt-10">
          <h1 className="text-white dark:text-gray-100 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight">
            Vectornix AI Studio: A Multi-Modal, Stateful AI Agent Platform.
          </h1>

          <p className="max-w-2xl text-gray-200 dark:text-gray-300 mt-5 mx-auto text-sm sm:text-base md:text-lg">
            Vectornix is a platform for building and deploying AI agents that interact with
            users in a variety of ways. It supports multiple modalities and maintains states
            across interactions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-lg mx-auto">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg md:text-xl px-4 py-2 sm:py-3 rounded-lg cursor-pointer hover:-translate-y-1 transition-all ease duration-200">
              Get Started
            </button>

            <button className="flex-1 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 text-white text-base sm:text-lg md:text-xl px-4 py-2 sm:py-3 rounded-lg cursor-pointer hover:-translate-y-1 transition-all ease duration-200">
              View On GitHub
            </button>
          </div>
        </div>
      </section>

      <main>
        {/* Features Section */}
        <section className="text-center mt-16 px-4 sm:px-6 md:px-10 mb-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 text-gray-900 dark:text-white">
              Features
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
              Vectornix offers a range of features to help you build and deploy AI agents.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <FeatureCard
              icon={<MessageCircleDashed className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />}
              topic="Chat Mode"
              subText="Engage in natural language conversations with your AI agent."
            />
            <FeatureCard
              icon={<Search className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />}
              topic="Search Mode"
              subText="Leverage the power of search engines to enhance your agent's knowledge."
            />
            <FeatureCard
              icon={<Tv className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />}
              topic="Research Mode"
              subText="Conduct in-depth research and analysis with your AI agent."
            />
          </div>
        </section>

        {/* Showcase Section */}
        <section className="text-center mt-20 sm:mt-28 lg:mt-40 px-4 sm:px-6 md:px-10 mb-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 text-gray-900 dark:text-white">
              Showcase
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
              See Vectornix AI Studio in action with these examples.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <ShowcaseCard img={image} topic="Chat Mode" />
            <ShowcaseCard img={image} topic="Search Mode" />
            <ShowcaseCard img={image} topic="Research Mode" />
          </div>
        </section>

        {/* Tech Stack Section */}
       <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Tech Stack
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Vectornix AI Studio is built on a robust and modern tech stack.
        </p>
      </div>

      {/* Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        <StackCard icon={SiPython} color="#3776AB" label="Python" />
        <StackCard icon={SiFastapi} color="#009688" label="FastAPI" />
        <StackCard icon={SiReact} color="#61DAFB" label="React" />
        <StackCard icon={SiDocker} color="#2496ED" label="Docker" />
        <StackCard icon={SiRedis} color="#DC382D" label="Redis" />
        <StackCard icon={SiPostgresql} color="#336791" label="PostgreSQL" />
        <StackCard icon={SiMinio} color="#C72E49" label="MinIO" />
      </div>
    </section>

    <section>
      <GetStarted />
    </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home