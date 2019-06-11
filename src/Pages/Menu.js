import React from 'react'
import hopCard from '../hopCard.png'
import ReactDOM from 'react-dom';

const Menu = (props) => {

  

  return (
    <div className="outerCard">
      <div className="middle">
        <div className="innerCard">
          <div className="ui card cardBackground">
            <div className="image">
              <img src={hopCard}></img>
            </div>
            <div className="content">
              <a className="header">Logged in as {props.user.username}</a>
              <div className="meta">
                <span className="date">Congrats on Being a Hop Lover</span>
              </div>
              <div className="description">
                
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                # of Reviews here
              </a>
            </div>
          </div>
        </div>
        <div className="outerButton">
          <div className="innerButton">
          <a href='/search'>
            <button class="ui button menuButton" 
            onClick={() => props.falsifyInitialMenuRedirect()}>
              Search Hoppy Beers
            </button>
          </a>
          <a href='/profile'>
            <button class="ui button menuButton">
              Your Hoppy Profile
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Menu