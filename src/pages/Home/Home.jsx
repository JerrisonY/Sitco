import './Home.scss'
import { NavLink } from 'react-router-dom'

import HeroSection from '../../components/HeroSection'
import AboutUs from '../../components/AboutUs'
import LogoSection from '../../components/LogoSection'
import QualitySection from '../../components/QualitySection'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <LogoSection />
      <QualitySection />
      <Contact />
      <Footer />
    </>
  )
}

export default Home