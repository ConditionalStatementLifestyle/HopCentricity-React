import React from 'react'
import hopCard from '../hopCard.png'
// import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";


class Menu extends React.Component {

  render() {
    return (
      <div className="outerCard">
        <div className="middle">
          <div className="innerCard">
            <div className="ui card cardBackground">
              <div className="image">
                <img src={hopCard} alt='oh no'></img>
              </div>
              <div className="content">
                <div className="header">Logged in as {this.props.user.username}</div>
                <div className="meta">
                  <span className="date">Congrats on Being a Hop Lover</span>
                </div>
                <div className="description">
                  
                </div>
              </div>
              <div className="extra content">
                  <i className="user icon"></i>
                  # of Reviews here
              </div>
            </div>
          </div>
          <div className="outerButton">
            <div className="innerButton">
              <button className="ui button menuButton" onClick={() => this.props.history.push('/search')}>
                Search Hoppy Beers
              </button>
              <button className="ui button menuButton" onClick={() => this.props.history.push('/profile')}>
                Your Hoppy Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Menu)

