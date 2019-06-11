import React from 'react'
import Menu from './Pages/Menu'
import LoginPage from './Pages/LoginPage'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const PageRouter = (props) => {

  return (
    <Router>
      <Route exact path='/menu' render={() => <Menu user={props.user} handlePageChange={props.handlePageChange}/>}/>
      <Route exact path='/search' render={() => <Search user={props.user}/>}/>
      <Route exact path='/profile' render={() => <Profile user={props.user}/>}/>
      <Route exact path='/login' render={() => <LoginPage
        setStateUsernameEmailToken={props.setStateUsernameEmailToken}
        user={props.user}/>}/>
      {/* <Route exact path="/" render={() => props.user.token === ''?
        <Redirect to='/login'/>:
        null}/> */}
    </Router>
  )

}

export default PageRouter