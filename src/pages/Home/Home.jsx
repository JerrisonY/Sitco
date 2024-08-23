import './Home.scss'
import { NavLink } from 'react-router-dom'

import HeroSection from '../../components/HeroSection'
import AboutUs from '../../components/AboutUs'
import LogoSection from '../../components/LogoSection'
import QualitySection from '../../components/QualitySection'

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <LogoSection />
      <QualitySection />
    </>
  )
}

export default Home