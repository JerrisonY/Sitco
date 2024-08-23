import './Navbar.scss'
import { Link } from 'react-scroll';
import SitcoLogo from '/Sitco.svg'

function Navbar() {
  return (
    <nav className='nav-container'>
        <Link to='hero' smooth={true}>
            <img src={SitcoLogo} alt="" style={{height: '40px'}}/>
        </Link>
        <div className='nav-links'>
            <Link to='about-us' smooth={true}>About Us</Link>
            <Link to='services' smooth={true}>Services</Link>
            <Link to='quality' smooth={true}>Quality</Link>
            <Link to='contact' smooth={true}>Contact Us</Link>
        </div>
    </nav>
  )
}

export default Navbar