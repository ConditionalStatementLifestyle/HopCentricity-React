import React from 'react'
import { withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import back0 from '../Pictures/back0.jpg'
import back1 from '../Pictures/back1.jpg'
import back2 from '../Pictures/back2.jpg'
import back3 from '../Pictures/back3.jpg'
import back4 from '../Pictures/back4.jpg'
import back5 from '../Pictures/back5.jpg'
import back6 from '../Pictures/back6.jpg'

var images = {
  0: `url(${back0})`,
  1: `url(${back1})`,
  2: `url(${back2})`,
  3: `url(${back3})`,
  4: `url(${back4})`,
  5: `url(${back5})`,
  6: `url(${back6})`
}

var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: images[`${Math.floor(Math.random()*7)}`],
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

class Menu extends React.Component {

  constructor() {
    super() 
    this.state ={
      date: '',
      time: '',
      AMPM: '',
      disablePopup: false,
      page: false
    }
  }

  componentWillMount() {
    this.props.getProfileData() 
    setInterval( () => this.handleTime(),1500)
  }

  componentDidMount() {
    this.setState({page: true})
  }

  handleTime = () => {
    let dateTime = new Date().toLocaleString().split(' ')
    let date = dateTime[0].slice(0,-1)
    let time = dateTime[1].slice(0,-3)
    let AMPM = dateTime[2]
    this.setState({
      date,
      time,
      AMPM
    })
  }

  getPage = () => {
    if (this.state.page === true) {
      return (
        <div>
          <div className='menu-top' style={ sectionStyle }><br></br><br></br><br></br><br></br>
              {/* <div className='menu-date'>{ this.state.date }</div> */}
              <ReactCSSTransitionGroup transitionName="searchCardTransition" transitionEnterTimeout={700} transitionLeaveTimeout={200}>
                {this.getTime()}
              </ReactCSSTransitionGroup>
            </div><br></br>             
            <div className="outerButton">
              <div className="innerButton">
                <button className="ui inverted teal button menuButton huge" onClick={() => this.props.history.push('/search')}>
                  Search Hoppy Beers
                </button>
                <button className="ui inverted teal button menuButton huge" onClick={() => this.props.history.push('/profile')}>
                  Your Hoppy Profile
                </button>
              </div>
            </div>
          </div>
      )
    }
  }

  getTime = () => {
    if (this.state.time !== '') {
      return <div className='menu-time'>{ this.state.time + this.state.AMPM }</div>
    }
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="pageTransition" transitionEnterTimeout={1500} transitionLeaveTimeout={200}>
          {this.getPage()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default withRouter(Menu)


