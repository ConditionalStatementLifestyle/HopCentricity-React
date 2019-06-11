import React from 'react'
import Menu from './Pages/Menu'
import LoginPage from './Pages/LoginPage'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom'

const PageRouter = (props) => {

  return (
    <Router>
      <Route path='/menu' render={() => <Menu user={props.user} falsifyInitialMenuRedirect={props.falsifyInitialMenuRedirect}/>}/>
      <Route path='/search' render={() => <Search user={props.user}/>}/>
      <Route path='/profile' render={() => <Profile user={props.user}/>}/>
      <Route path='/login' render={() => <LoginPage
        setStateUsernameEmailToken={props.setStateUsernameEmailToken}
        user={props.user}/>}/>
      <Route path="/" render={() => props.user.token === ''?
        <Redirect to='/login'/>:
        null}/>
      <Route path="/" render={() => props.user.token !== '' && props.menuRedirect?
        <Redirect to='/menu'/>:
        null}/>
    </Router>
  )

}

export default PageRouter