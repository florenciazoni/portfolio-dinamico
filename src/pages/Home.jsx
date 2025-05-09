import React from 'react'
// import Titulo from '../components/Titulo' (duplicate removed)
import ParticlesBackground from '../components/ParticlesBackground'
/* import ProjectsSection from '../components/ProjectsSection' */
import IAChat from '../components/IAChat'
import SubTitleIA from '../components/SubtTitleIA'
import Hero from '../components/Hero'
import Titulo from '../components/Titulo'
import ProyectShowcase from '../components/ProjectShowcase'
import SkillsShowcase from '../components/SkillsShowcase'
import ContactSection from '../components/ContactSection'
import Navbar from './Navbar'


const Home = () => {
  
  return (
    <>
    <ParticlesBackground />
    <Navbar/>
    <Titulo/>
    <Hero/>
    <SubTitleIA />
    <IAChat />
    <ProyectShowcase />
    <SkillsShowcase/>
    <ContactSection/>
    {/* <ProjectsSection /> */}
      
    </>
  )
}

export default Home
