import './Home.scss'
import { NavLink } from 'react-router-dom'

import HeroSection from '../../components/HeroSection'
import AboutUs from '../../components/AboutUs'
import LogoSection from '../../components/LogoSection'

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <LogoSection />
    </>
  )
}

export default Home