import React from 'react'
import Menu from './Pages/Menu'
import LoginPage from './Pages/LoginPage'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom'

const PageRouter = (props) => {

 

  return (
    <Router>
      <Route path='/menu' render={() => <Menu user={props.user}/>}/>
      <Route path='/login' render={() => <LoginPage
      setStateUsernameEmailToken={props.setStateUsernameEmailToken}
      user={props.user}
      />}/>
      <Route path="/" render={() => props.user.token === ''?
      <Redirect to='/login'/>:
      <Redirect to='/menu'/>}/>
    </Router>
  )

}

export default PageRouter