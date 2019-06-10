import React from 'react'
import Login from '../Components/Login'

const LoginPage = (props) => {

  return (
    <div>
        <Login
        setStateUsernameEmailToken={props.setStateUsernameEmailToken}
        user={props.user}
        />
    </div>
  )

}

export default LoginPage
