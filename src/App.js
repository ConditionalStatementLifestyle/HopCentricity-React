import React from 'react';
import './App.css';
import Menu from './Pages/Menu'
import LoginPage from './Pages/LoginPage'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
// import logo from './hop.png'
import Navbar from './Components/Navbar'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import { withRouter } from "react-router-dom";
// public key: KZeepwzkDFgCnpzuCx43quqVMD4

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: {
        email: '',
        username: '',
        token: ''
      },
      page: ''
    }
    // this.getUserDataIfRefreshed()
  }

  getUserDataIfRefreshed = () => {
    if (localStorage.getItem('HopCentricity_Token') !== null) {
      let user = {...this.state.user}
      user.email = localStorage.getItem('HopCentricity_Email')
      user.username = localStorage.getItem('HopCentricity_Username')
      user.token = localStorage.getItem('HopCentricity_Token')
      this.setState({user})
        // console.log('here is state',this.state.user)
        // ,
        // () => {
        //   this.props.history.push('/menu')
        // }
    }
  }

  componentWillMount() {
    this.getUserDataIfRefreshed()
  }

  setStateUsernameEmailToken = (data) => {
    let user = {...this.state.user}
    user.email = data.email
    user.username = data.raw.names[0].displayName
    user.token = localStorage.getItem('HopCentricity_Token')
    this.setState({user})
  }

  handleLogout = () => {
    localStorage.removeItem('HopCentricity_Token')
    localStorage.removeItem('HopCentricity_Email')
    localStorage.removeItem('HopCentricity_Username')
    let user = {
      email: '',
      username: '',
      token: ''
    }
    this.setState({user})
  }

  handlePageChange = (page) => {
    this.setState({page})
  }

 toggle = () => {
    let mainNav = document.getElementById("js-menu");
    mainNav.classList.toggle("active");
  }

  render() {
    
    return (
      <div>
        <Router>
          {this.state.user.token !== ''?  
            <Navbar handleLogout={this.handleLogout}/>:
              null}
          <Route exact path='/menu' render={() => <Menu user={this.state.user} handlePageChange={this.handlePageChange}/>}/>
          <Route exact path='/search' render={() => <Search user={this.state.user}/>}/>
          <Route exact path='/profile' render={() => <Profile user={this.state.user}/>}/>
          <Route exact path='/login' render={() => 
            <LoginPage
              setStateUsernameEmailToken={this.setStateUsernameEmailToken}
              user={this.state.user}/>}
            />
        </Router>
      </div>
    )
  }
}

export default App;

// /* 
// </Router>
//         <PageRouter 
//           setStateUsernameEmailToken={this.setStateUsernameEmailToken}
//           user={this.state.user}
//           handlePageChange={this.handlePageChange}
//         /> */