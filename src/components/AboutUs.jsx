import './AboutUs.scss'

import { ABOUT_HISTORY } from '../lib/constants'
import { ABOUT_EXPERTISE } from '../lib/constants'

function AboutUs() {
  return (
    <div className='about-c'>
        <h1>About Us</h1>
        <hr />
        <p>{ABOUT_HISTORY}</p>
        <p>{ABOUT_EXPERTISE}</p>
    </div>
  )
}

export default AboutUs