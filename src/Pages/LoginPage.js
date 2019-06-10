import React from 'react'
import Login from '../Components/Login'

const LoginPage = (props) => {

  return (
    <div>
        <Login
        setUsernameAndPassword={props.setUsernameAndPassword}
        user={props.user}
        />
    </div>
  )

}

export default LoginPage
