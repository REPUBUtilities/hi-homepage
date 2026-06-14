import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import OperationsSection from './components/sections/OperationsSection'
import CorpsSection from './components/sections/CorpsSection'
import JoinSection from './components/sections/JoinSection'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <OperationsSection />
        <CorpsSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  )
}
