import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import PageRouter from './PageRouter'

import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom'
import { withRouter } from "react-router";
// public key: KZeepwzkDFgCnpzuCx43quqVMD4

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: {
        email: '',
        username: '',
        token: ''
      }
    }
  }

  setUsernameAndPassword = (data) => {
    let user = {...this.state.user}
    user.email = data.email
    user.username = data.raw.names[0].displayName
    user.token = localStorage.getItem('HopCentricity_Token')
    this.setState(
      {user},
      () => {
        this.props.history.push('/menu')
      })
  }

  handleLogout = () => {
    localStorage.removeItem('HopCentricity_Token')
    let user = {
      email: '',
      username: '',
      token: ''
    }
    this.setState({user},
      () => {
        this.props.history.push('/login')
      })
  }


  render() {
    
    return (
      <div>
        {this.state.user.token !== ''?
        <Navbar handleLogout={this.handleLogout}/>:null}
        <PageRouter 
        setUsernameAndPassword={this.setUsernameAndPassword}
        user={this.state.user}/>
      </div>
    )
  }
}


export default withRouter(App);

