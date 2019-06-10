import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage'
import Navbar from './Components/Navbar'
// import Navbar from 'HopCentricity-React/src/Components/Login.js'

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { withRouter } from "react-router";
// public key: KZeepwzkDFgCnpzuCx43quqVMD4

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: {
        email: '',
        username: ''
      }
    }
  }

  setUsernameAndPassword = (data) => {
    let user = {...this.state.user}
    user.email = data.email
    user.username = data.raw.names[0].displayName
    this.setState({user})
  }

  handleLogout = () => {
    localStorage.removeItem('HopCentricity_Token')
    let user = {...this.state.user}
    this.setState({user})
  }


  render() {
    return (
      <div>
      <Navbar handleLogout={this.handleLogout}/>
      <Router>
        <Route path='/' component={() => <LoginPage
        setUsernameAndPassword={this.setUsernameAndPassword}
        user={this.state.user}
        />}/>
      </Router>
      </div>
    )
  }
}


export default App;
