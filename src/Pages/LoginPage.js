import React from 'react'
import Login from '../Components/Login'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import posed from 'react-pose';

const Box = posed.div({
  draggable: true

});

const Example = () => <Box className="box" />;


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

  Box = posed.div({
    draggable: true
  });


  getPage = (Box) => {
    if (this.state.page) {
      return (
        <div>
           <h2 className='login-title'>Hop Centricity</h2>
        <Login
        setStateUsernameEmailToken={this.props.setStateUsernameEmailToken}
        user={this.props.user}
        />
        <Example />
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

export default LoginPage
