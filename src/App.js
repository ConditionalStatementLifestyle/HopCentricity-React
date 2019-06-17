import React from 'react';
import './App.css';
import Menu from './Pages/Menu'
import LoginPage from './Pages/LoginPage'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Navbar from './Components/Navbar'
import AudioPlayer from "react-h5-audio-player";
import mp3_file from './AdiosTurdNuggets.ogg';


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
      hopmeter: {
        hopRating: 0,
        color: '',
        thought: ''
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
      this.getProfileData()
    }
  }

  componentWillMount() {
    this.getUserDataIfRefreshed()
  }

  getHopmeterRating = () => {
    let totalUserRatings = 0
    let totalGlobalRatings = 0
    let length = this.state.reviews.length
    this.state.reviews.map(review => {
        totalUserRatings += parseFloat(review.rating)
        totalGlobalRatings += parseFloat(review.beer.rating)
        return null
    })
    let userAverage = totalUserRatings/length
    let globalAverage = totalGlobalRatings/length
    let diff = userAverage - globalAverage
    let hopRating = (diff * 20) + 50
    hopRating = parseInt(hopRating * length/50)
    this.setHopmeterRating(hopRating)
}

setHopmeterRating = (hopRating) => {
  let hopmeter = {...this.state.hopmeter}
    if (hopRating < 25) {
        hopmeter.hopRating = hopRating
        hopmeter.color = 'red'
        hopmeter.thought = "Seems like you don't want hops in your life"
        this.setState({hopmeter})
    }

    else if (hopRating < 50 && hopRating > 25) {
        hopmeter.hopRating = hopRating
        hopmeter.color = 'orange'
        hopmeter.thought = "Looks like hops could treat you better, keep hopping around"
        this.setState({hopmeter})
    }

    else if (hopRating < 75 && hopRating > 50) {
        hopmeter.hopRating = hopRating
        hopmeter.color = 'teal'
        hopmeter.thought = "You and the hops are on a similar wavelength, keep it hoppy"
        this.setState({hopmeter})
    }

    else if (hopRating > 75) {
        hopmeter.hopRating = hopRating
        hopmeter.color = 'green'
        hopmeter.thought = "You and hops have become one, rejoice"
        this.setState({hopmeter})
    }
    else {
        return null
    }
}

  getProfileData = () => {
    let email = this.state.user.email
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
    .then( _ => this.getHopmeterRating())
  }

  setReviews = (reviews) => {
    if (reviews.length > 0) {
      this.setState({reviews})

    }
  }

  pushReviewToProfile = (review) => {
    let reviews = this.state.reviews
    reviews.push(review)
    this.setState({reviews})
    this.getHopmeterRating()
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
    this.player.audio.play()
  }

 toggle = () => {
    let mainNav = document.getElementById("js-menu");
    mainNav.classList.toggle("active");
  }

  render() {

    return (
      <div>
          <AudioPlayer hidePlayer={true} src={mp3_file} volume={1.0} ref={c => (this.player = c)}/>
        <Router>
          {this.state.user.token !== ''? <Navbar handleLogout={this.handleLogout}/>:<Redirect to='/login'/>}
          <Route exact path='/' render={() => <Redirect to='/menu'/>}/>
          <Route exact path='/menu' render={() => <Menu user={this.state.user} reviews={this.state.reviews.length} getProfileData={this.getProfileData}/>}/>
          <Route exact path='/search' render={() => <Search user={this.state.user} pushReviewToProfile={this.pushReviewToProfile}/>}/>
          <Route exact path='/profile' render={() => <Profile user={this.state.user} reviews={this.state.reviews} hopmeter={this.state.hopmeter}/>}/>
          <Route exact path='/login' render={() => <LoginPage setStateUsernameEmailToken={this.setStateUsernameEmailToken} user={this.state.user}/>}/>
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
