import './Navbar.scss'

import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='nav-container'>
        <NavLink to={'/'}>
            Logo
        </NavLink>
        <div className='nav-links'>
            <p>link</p>
            <p>link</p>
            <p>link</p>
        </div>
    </nav>
  )
}

export default Navbar