import React from 'react'
import Logout from './Logout'
import logo from '../hop.png'
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
                <a href="#" className='cursor'>
                  <img src={logo} alt=''></img>
                </a>
              <ul className="main-nav" id="js-menu">
                  <li>
                      <a href="/Search" className="nav-links" onClick={() => 
                      props.falsifyInitialMenuRedirect()}>Search</a>
                  </li>
                  <li>
                      <a href="#" className="nav-links">Profile</a>
                  </li>
                  <li>
                      <a href="#" className="nav-links" onClick={() => props.handleLogout()}>Logout</a>
                  </li>
              </ul>
          </nav>
    </div>
  )

}

export default Navbar
