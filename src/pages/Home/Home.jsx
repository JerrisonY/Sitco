import './Home.scss'
import { NavLink } from 'react-router-dom'

import HeroSection from '../../components/HeroSection'
import AboutUs from '../../components/AboutUs'

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
    </>
  )
}

export default Home