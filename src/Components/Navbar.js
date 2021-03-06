import React from 'react'
import AudioRadio from './AudioRadio'
import logo from '../hop.png'
import { Link } from 'react-router-dom'
import AudioPlayer from "react-h5-audio-player";
import mp3_file from '../Robot.ogg';

class Navbar extends React.Component {

  toggle = () => {
    let mainNav = document.getElementById("js-menu");
    mainNav.classList.toggle("active");
  }

  robot = () => {
    if (this.props.audio) {
      this.player.state.isPlaying = false
      this.player.clearListenTrack() 
      this.player.audio.play()
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle" onClick={() => this.toggle()}>
          <img alt='' src="https://img.icons8.com/android/24/000000/menu.png"></img>
          </span>
            <Link to="/menu" className='cursor'>
              <div className='nav-icon'><img src={logo} alt=''></img></div>
            </Link>
            <div className='nav-title'>Hop Centricity</div>
          <div >
            <ul className="main-nav" id="js-menu">
              <li>
                <Link onClick={() => this.robot()} to="/menu" className='nav-links'>Menu</Link>
              </li>
              <li>
                <Link onClick={() => this.robot()} to="/search" className='nav-links'>Search</Link>
              </li>
              <li>
                <Link onClick={() => this.robot()} to="/profile" className='nav-links'>Profile</Link>
              </li>
              <li>
                <Link to="/login" className="nav-links" onClick={() => this.props.handleLogout()}>Logout</Link>
              </li>
              <li>
                <div className='radio-space nav-links'>
                  <AudioRadio 
                    id='radio' 
                    className='radio-space' 
                    audio={this.props.audio} 
                    toggleAudio={this.props.toggleAudio}/>
                  <div className='audio-text-space'>Audio Off/On</div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <AudioPlayer
            hidePlayer={true}
            src={mp3_file}
            volume={1.0}
            ref={c => (this.player = c)}
            listenInterval={10}
          />
      </div>
    )
  }
}

export default Navbar
