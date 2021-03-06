import React from 'react';
import './App.css';
import Menu from './Pages/Menu'
import LoginPage from './Pages/LoginPage'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import AudioPlayer from "react-h5-audio-player";
import mp3_file from './AdiosTurdNuggets.ogg';

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
      reviews: [],
      audio: false,
      alreadyReviewed: {},
      siteEntered: true,
      isLoading: false
    }

  }
  
  componentWillMount() {
    this.getUserDataIfRefreshed()
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

  toggleAudio = () => {
    let audio = !this.state.audio
    this.setState({audio})
  }

  getHopmeterRating = () => {
    if (this.state.reviews.length > 0) {
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
    } else {
      let hopRating = 0
      this.setHopmeterRating(hopRating)
    }
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
        hopmeter.color = 'yellow'
        hopmeter.thought = "Looks like the hops could treat you better, keep hopping around"
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
    let UserEmail = this.state.user.email
    if (UserEmail === localStorage.getItem('HopCentricity_Email')) {  
      fetch('https://gentle-everglades-64429.herokuapp.com/api/v1/userReviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email: UserEmail
        })
      })
      .then(res => res.json())
      .then(json => this.setReviews(json))
      .then( _ => this.getHopmeterRating())
    }
  }

  setReviews = (reviews) => {
    this.setState({reviews})
    this.setAlreadyReviewed()
  }

  setAlreadyReviewed = () => {
    let alreadyReviewed = {}
    for(let i = 0; i < this.state.reviews.length; i++) {
      let beer = this.state.reviews[i].beer.name
      alreadyReviewed[beer] = true
    }
    this.setState({ alreadyReviewed })
  }

  pushReviewToProfile = (review) => {
    let reviews = this.state.reviews
    reviews.push(review)
    this.setState({reviews})
    this.getHopmeterRating()
    this.setAlreadyReviewed()
  }

  updateReview = (updatedReview) => {
    let reviews = this.state.reviews
    let index = reviews.findIndex(review => {
      return review.id === updatedReview.id
    })
    reviews.splice(index,1,updatedReview)
    this.setState({ reviews })
    this.getHopmeterRating()
  }

  removeReview = (id) => {
    let reviews = this.state.reviews
    let index = reviews.findIndex(review => {
      return review.id === id
    })
    reviews.splice(index,1)
    this.setState({ reviews })
    this.getHopmeterRating()
    this.setAlreadyReviewed()
  }

  setStateUsernameEmailToken = (data) => {
    let user = {...this.state.user}
    user.email = data.email
    user.username = data.username
    user.token = localStorage.getItem('HopCentricity_Token')
    this.setState({ user })
    this.getProfileData()
    this.setLoading(false)
    // this.toggleSiteEntered()
  }

  setLoading = (isLoading) => {
    this.setState({ isLoading })
  }

  setSiteEntered = (siteEntered) => {
    this.setState({ siteEntered })
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
    this.setState({
      user: user,
      siteEntered: false
    })
    if (this.state.audio) {
      this.player.audio.play()
    }
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
          {this.state.siteEntered ? <Navbar audio={this.state.audio} toggleAudio={this.toggleAudio} handleLogout={this.handleLogout}/> : null}
          {this.state.siteEntered || this.state.user.username !== '' ? null : <Redirect to='/login'/>}
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/login'/>}/>
            <Route exact path='/menu' render={() => <Menu user={this.state.user} reviews={this.state.reviews.length} getProfileData={this.getProfileData}/>}/>
            <Route exact path='/search' render={() => <Search user={this.state.user} pushReviewToProfile={this.pushReviewToProfile} alreadyReviewed={this.state.alreadyReviewed}/>}/>
            <Route exact path='/profile' render={() => <Profile user={this.state.user} reviews={this.state.reviews} getProfileData={this.getProfileData} hopmeter={this.state.hopmeter} updateReview={this.updateReview} removeReview={this.removeReview}/>}/>
            <Route exact path='/login' render={() => <LoginPage isLoading={this.state.isLoading} setLoading={this.setLoading} setSiteEntered={this.setSiteEntered} setStateUsernameEmailToken={this.setStateUsernameEmailToken} user={this.state.user}/>}/>
            <Route exact path='/404' render={() => <NotFound />}/>
            <Route path='*' render={() => <Redirect to='/404'/>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
