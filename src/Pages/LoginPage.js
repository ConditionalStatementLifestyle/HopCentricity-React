import React from 'react'
import Login from '../Components/Login'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class LoginPage extends React.Component {

  constructor() {
    super() 
    this.state = {
      page: false
    }
  }

  componentDidMount() {
    this.setState({page: true})
  } 

  componentWillUnmount() {
    this.setState({page: false})
  } 

  getPage = () => {
    if (this.state.page) {
      return (
        <Login
        setStateUsernameEmailToken={this.props.setStateUsernameEmailToken}
        user={this.props.user}
        />
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

export default LoginPage
