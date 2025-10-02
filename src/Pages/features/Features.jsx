import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import FeatureCard from './components/FeatureCard'
import { Bot, Database, Image, Shield, User } from 'lucide-react'
import Footer from '../../components/footer/footer'
import Reveal from '../../components/reveal/Reveal'
import { ScrollRestoration } from 'react-router-dom'

const Features = () => {
  return (

    <>
        <header>
            <Navbar />
        </header>

        <main className='w-[90%] mx-auto pt-25'>

            <h1 className='text-center text-4xl font-semibold'>
                Features
            </h1>

        <Reveal>
            <section className='flex gap-5 mt-20 justify-center items-center flex-wrap mb-10'>
                <FeatureCard icon={<Image />} topic={'Multi-Modal'} subText={'Vectornix AI Studio supports multiple modalities including text, image and audio, allowing you to build AI agents that can interact with users in a variety of ways.'}/>
                <FeatureCard icon={<Bot />} topic={'Agent Modes'} subText={'Vectornix AI Studio offers a variety of agent modes, including conversational, task-oriented, and hybrid, allowing you to build AI agents that are tailored to your specific needs.'}/>
                <FeatureCard icon={<Database />} topic={'Persistent Memory'} subText={'Vectornix AI Studio provides persistent memory for AI Agents, allowing them to remember past interactions and learn from them over time.'}/>
                <FeatureCard icon={<Shield />} topic={'Gatekeeper Mechanism'} subText={'Vectornix AI Studio includes a gatekeeper mechanism that allows you to control the behaviour of AI agents and prevent them from performing actions that are not allowed.'}/>
                <FeatureCard icon={<User />} topic={'Human-in-the-Loop'} subText={'Vectornix AI Studio supports human-in-the-loop, allowing you to intervene in AI agent interactions and provide feedback or guidance.'}/>
            </section>
        </Reveal>
        </main>

        <footer>
            <Footer/>
        </footer>

        <ScrollRestoration />
    </>

  )
}

export default Features