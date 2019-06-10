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



  render() {
    return (<Login/>)
  }
}


export default App;
