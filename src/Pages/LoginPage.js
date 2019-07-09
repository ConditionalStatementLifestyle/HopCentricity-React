import React  from 'react'
import Login from '../Components/Login'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Transition, Dimmer, Loader, Image } from 'semantic-ui-react'
import BeerBottle from '../BeerBottle.png'
import { withRouter } from "react-router-dom";
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
    this.props.setSiteEntered(false)
    setInterval(this.toggleVisiblity,4500)
  }

  toggleVisiblity = () => {
    let visible = !this.state.visible
    this.setState({ visible })
  }

  handleMouseEnterHop = () => {
    this.setState({inHop: true})
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

  enterSite = () => {
    this.props.history.push('/menu')
    this.props.setSiteEntered(true)
  }

  checkIfHopInBeer = () => {
    if (this.state.inBeer && this.state.inHop) {
      if (localStorage.getItem("HopCentricity_Token") !== null) {
        this.enterSite()
      }
    }
  }

  getPage = () => {
    if (this.state.page) {
      return (
        <div>
          <div className='login-top-space'>
            <h2 className='login-title'>Hop Centricity</h2>
            {
              this.props.user.username === '' ?
                <div>
                  <Login
                    setStateUsernameEmailToken={this.props.setStateUsernameEmailToken}
                    user={this.props.user}
                    setLoading={this.props.setLoading}
                  />
                  <Dimmer active={this.props.isLoading}>
                    <Loader />
                  </Dimmer>
                </div>
              :
                <ReactCSSTransitionGroup transitionName="pageTransition" transitionEnterTimeout={500} transitionLeaveTimeout={200}>
                  <div className='outer'>\
                    <h3 className='login-message'>
                      Welcome {localStorage.getItem("HopCentricity_Username").split(' ')[0]}, please move the hop into the beer to enter the site
                    </h3>
                    <h4 className='login-message'>
                      For Mobile Devices
                    </h4>
                    <h3 className='login-message'>
                      <button className="ui inverted teal button menuButton huge" onClick={this.enterSite}>
                        Mobile Login
                      </button>
                    </h3>
                  </div>
                </ReactCSSTransitionGroup>
            }
          </div>
          <div className='hop-login' onMouseEnter={this.handleMouseEnterHop} onMouseLeave={this.handleMouseLeaveHop}>
            <Box />
          </div>
          <Transition animation={'bounce'} duration={2000} visible={this.state.visible}>
            <div 
              className='bottle' 
              onMouseEnter={this.handleMouseEnterBeer} 
              onMouseLeave={this.handleMouseLeaveBeer}>
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
          <ReactCSSTransitionGroup 
            transitionName="pageTransition" 
            transitionEnterTimeout={1500} 
            transitionLeaveTimeout={200}>
            {this.getPage()}
            {/* {this.checkPage()} */}
          </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default withRouter(LoginPage)
