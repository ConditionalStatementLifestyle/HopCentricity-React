import React from 'react'
// import Logout from './Logout'
import logo from '../hop.png'
import {Link} from 'react-router-dom'


const Navbar = (props) => {

  const toggle = () => {
    let mainNav = document.getElementById("js-menu");
    mainNav.classList.toggle("active");
  }


  return (
    <div>
      <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle" onClick={() => toggle()}>
            <i className="fas fa-bars"></i>
          </span>
            <Link to="/menu" className='cursor'>
              <img src={logo} alt=''></img>
            </Link>
            <div className='nav-title inner'>Hop Centricity</div>
          <ul className="main-nav" id="js-menu">
            <li>
              <Link to="/search" className='nav-links'>Search</Link>
            </li>
            <li>
              <Link to="/profile" className='nav-links'>Profile</Link>
            </li>
            <li>
              <Link to="/login" className="nav-links" onClick={() => props.handleLogout()}>Logout</Link>
            </li>
            </ul>
        </nav>
      </div>
  )

}

export default Navbar
