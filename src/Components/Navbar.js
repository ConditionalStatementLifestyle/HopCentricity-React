import React from 'react'
import Logout from './Logout'
const Navbar = (props) => {


  return (
    <div>
      <nav className="navbar">
              <span className="navbar-toggle" id="js-navbar-toggle">
                  <i className="fas fa-bars"></i>
              </span>
              <a href="#" className="logo">logo</a>
              <ul className="main-nav" id="js-menu">
                  <li>
                      <a href="#" className="nav-links">Home</a>
                  </li>
                  <li>
                      <a href="#" className="nav-links">Search</a>
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
