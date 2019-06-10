import React from 'react'
import Menu from './Pages/Menu'
import LoginPage from './Pages/LoginPage'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom'


const PageRouter = (props) => {

 

  return (
    <div>
    {console.log('props statement',props.user.token!== '')}
    <Router>
      <Route path='/menu' render={() => <Menu/>}/>
      <Route path='/login' render={() => <LoginPage
      setUsernameAndPassword={props.setUsernameAndPassword}
      user={props.user}
      />}/>
      <Route path="/" render={() => props.user.token === ''?
      <Redirect to='/login'/>:
      <Redirect to='/menu'/>}/>
    
    </Router>
    </div>
  )

}

export default PageRouter