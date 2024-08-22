import './Navbar.scss'
import { NavLink } from 'react-router-dom'

import SitcoLogo from '/Sitco.svg'

function Navbar() {
  return (
    <nav className='nav-container'>
        <NavLink to={'/'}>
            <img src={SitcoLogo} alt="" style={{height: '40px'}}/>
        </NavLink>
        <div className='nav-links'>
            <NavLink>About Us</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Quality</NavLink>
            <NavLink>Contact Us</NavLink>
        </div>
    </nav>
  )
}

export default Navbar