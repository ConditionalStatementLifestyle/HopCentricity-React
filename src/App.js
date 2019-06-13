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
      reviews: []
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
      this.getProfileData(user.email)
    }
  }

  componentWillMount() {
    this.getUserDataIfRefreshed()
  }

  getProfileData = (email) => {
    fetch('http://localhost:3000/api/v1/userReviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    })
    .then(res => res.json())
    .then(json => this.setReviews(json))
  }

  setReviews = (reviews) => {
    if (reviews.length > 0) {
      this.setState({reviews})
    }
  }

  pushReviewInApp = (review) => {
    let reviews = this.state.reviews
    reviews.push(review)
    this.setState({reviews})
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
          <Route exact path='/menu' render={() => <Menu user={this.state.user} reviews={this.state.reviews.length}/>}/>
          <Route exact path='/search' render={() => <Search user={this.state.user} pushReviewInApp={this.props.pushReviewInApp}/>}/>
          <Route exact path='/profile' render={() => <Profile user={this.state.user} reviews={this.state.reviews} />}/>
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