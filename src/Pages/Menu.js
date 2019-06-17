import React from 'react'
import hopCard from '../hopCard.png'
// import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import Background from '../back1.jpg'


class Menu extends React.Component {

  constructor() {
    super() 
    this.state ={
      date: '',
      time: '',
      AMPM: ''
    }
  }

  componentWillMount() {
    this.props.getProfileData() 
    setInterval( () => this.handleTime(),1500)
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

  render() {
    return (
      <div>
      <div>
      <img src={Background} alt='oh no' className='menu-top-image'> 
              {/* <div className="menu-date">{this.state.date !== ''?this.state.date:null}</div>
              <div className="menu-time">{this.state.time !== ''?this.state.time + this.state.AMPM:null}</div> */}
      </img>
              <div>
              <div>
                  You've Reviewed {this.props.reviews} Beers
              </div>
              </div><br></br><br></br>
          
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
          </div>
    
    )
  }
}

export default withRouter(Menu)

