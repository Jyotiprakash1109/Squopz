import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import ProjectsSection from '@/components/projects/ProjectsSection'

export default function Home() {

  return (

    <main className="bg-[#050816]">

      <Navbar />

      <Hero />

      <Services />

      <About />

      <Contact />

      <Footer />

      <Chatbot />

    </main>
  )
}