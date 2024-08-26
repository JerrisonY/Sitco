import './HeroSection.scss'

import landingImg from '../assets/img/landingimg.jpeg';

function HeroSection() {
  return (
    <div className='hero-c' id='hero'
      style={{
        backgroundImage: `url(${landingImg})`
      }}
    >
        <div className='hero-text-c'>
            <h1>SITCO Precision Machining</h1>
            <p className='hero-sub'>Expertise in Precision EDM Machining and Solutions Since 1978</p>
            <a className='hero-btn'>Get in touch with us now</a>
        </div>

    </div>
  )
}

export default HeroSection