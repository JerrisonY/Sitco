import './AboutUs.scss'

import { 
    ABOUT_HISTORY, 
    ABOUT_EXPERTISE, 
    ABOUT_EXPERTISE_TWO,
    ABOUT_EDM_ONE,
    ABOUT_EDM_TWO,
    ABOUT_EDM_THREE, 
    SERVICES,
    } from '../lib/constants'

import imgOne from '../assets/img/about-img-1.png'
import imgTwo from '../assets/img/about-img-2.jpg'

function AboutUs() {
  return (
    <div className='about-c'>
        <h1>About Us</h1>
        <hr />
        <p className='section-subhead'>HISTORY</p>
        <p>{ABOUT_HISTORY}</p>

        <p className="section-subhead">EXPERTISE</p>
        <p>{ABOUT_EXPERTISE}</p>
        <br />
        <p>{ABOUT_EXPERTISE_TWO}</p>

        <div className='about-img-c'>
            <img src={imgOne} alt="" />
            <img src={imgTwo} alt="" />
        </div>

        <p className="section-subhead">EDM</p>
        <p>{ABOUT_EDM_ONE}</p>
        <br />
        <p>{ABOUT_EDM_TWO}</p>
        <br />
        <p>{ABOUT_EDM_THREE}</p>

        <h1>Services</h1>
        <hr />
        <div className='services-c'>
            <p>{SERVICES}</p>
            <img src={imgOne} alt="" />
        </div>
    </div>
  )
}

export default AboutUs