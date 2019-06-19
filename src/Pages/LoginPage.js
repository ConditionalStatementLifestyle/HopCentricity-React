import React, { useState, useEffect }  from 'react'
import Login from '../Components/Login'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Transition, Image } from 'semantic-ui-react'
import BeerBottle from '../BeerBottle.png'
import { withRouter } from "react-router-dom";
// import posed from 'react-pose';
import hopPic from '../hopCard.png'
import Box from '../Components/DragHop'


class LoginPage extends React.Component {

  constructor() {
    super() 
    this.state = {
      page: false,
      inHop: false,
      inBeer: true,
      visible: true
    }
  }

  componentDidMount() {
    this.setState({page: true})
    setInterval(this.toggleVisiblity,4500)
  }

  toggleVisiblity = () => {
    let visible = !this.state.visible
    this.setState({ visible })
  }

  handleMouseEnterHop = () => {
    this.setState({inHop: true})
    // this.checkIfHopInBeer()
    // console.log('enter hop',this.state.inHop)
  }

  handleMouseLeaveHop = () => {
    this.setState({inHop: false})
  }

  handleMouseEnterBeer = () => {
    this.setState({inBeer: true})
    this.checkIfHopInBeer()
  }

  handleMouseLeaveBeer = () => {
    this.setState({Beer: false})
  }

  checkIfHopInBeer = () => {
    console.log('checkinbeer hop',this.state.inHop,'beer',this.state.inBeer)
    if (this.state.inBeer && this.state.inHop) {
      if (localStorage.getItem("HopCentricity_Token") !== null) {
        console.log('made it')
        this.props.history.push('/menu')
      }
    }
  }

  getPage = () => {
    if (this.state.page) {
      return (
        <div>
           <h2 className='login-title'>Hop Centricity</h2>
        <Login
        setStateUsernameEmailToken={this.props.setStateUsernameEmailToken}
        user={this.props.user}
        />
        <div className='hop-login' onMouseEnter={this.handleMouseEnterHop} onMouseLeave={this.handleMouseLeaveHop}>
          <Box />
        </div>
        <Transition animation={'bounce'} duration={4000} visible={this.state.visible}>
        <div className='bottle' 
          onMouseEnter={this.handleMouseEnterBeer} onMouseLeave={this.handleMouseLeaveBeer}>
          <Image src={BeerBottle} className="ui medium rounded image beer-bottle" />
        </div>
        </Transition>
        </div>
      )
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

export default withRouter(LoginPage)
