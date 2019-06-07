import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
// import { withRouter } from "react-router";
// public key: KZeepwzkDFgCnpzuCx43quqVMD4

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      username: '',
      email: ''
    }
  }

  componentDidMount () {
    const oauthScript = document.createElement("script");
    oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
  }

  handleClick(e) {
    // Prevents page reload
    e.preventDefault();

    // Initializes OAuth.io with API key
    // Sign-up an account to get one
    window.OAuth.initialize('KZeepwzkDFgCnpzuCx43quqVMD4');

    // Popup Github and ask for authorization
    window.OAuth.popup('google').then((provider) => {
      // Prompts 'welcome' message with User's name on successful login
      // Check console logs for additional User info
      provider.me().then((data) => {
        console.log("data: ", data);
        localStorage.setItem("id_token", provider.id_token)        
        this.setState({
          email: data.email,
          username: data.raw.names[0].displayName
        })     
        this.sendAuth()
      });
    });
  }
  sendAuth = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('id_token'),
        email: this.state.email,
        username: this.state.username
      })
    })
  }

  render() {
    return (<a href="" onClick={this.handleClick.bind(this)} className="btn btn-social btn-github">
             <span className="fa fa-github"></span> Sign in with Google
           </a>)
  }
}


export default App;
