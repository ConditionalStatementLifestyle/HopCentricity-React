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
    // this.getUserDataIfRefreshed()
  }

  getUserDataIfRefreshed = () => {
    if (localStorage.getItem('HopCentricity_Token') !== null) {
      let user = {...this.state.user}
      user.email = localStorage.getItem('HopCentricity_Email')
      user.username = localStorage.getItem('HopCentricity_Username')
      user.token = localStorage.getItem('HopCentricity_Token')
      this.setState(
        {user},
        () => {
          this.props.history.push('/menu')
        })
        console.log('here is state',this.state.user)
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
    this.setState(
      {user},
      () => {
        this.props.history.push('/menu')
      })
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
        setStateUsernameEmailToken={this.setStateUsernameEmailToken}
        user={this.state.user}/>
      </div>
    )
  }
}


export default withRouter(App);

