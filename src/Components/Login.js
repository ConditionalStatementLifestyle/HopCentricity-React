import React from 'react'
import { withRouter } from "react-router-dom";

class Login extends React.Component {

    componentDidMount() {
        const oauthScript = document.createElement("script");
        oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";
        document.body.appendChild(oauthScript);
      }

      handleClick(e) {
        // Prevents page reload
        e.preventDefault();
        // Initializes OAuth.io with API key
        // Sign-up an account to get one
        window.OAuth.initialize('KZeepwzkDFgCnpzuCx43quqVMD4');
        // Popup Github and ask for authorization
        window.OAuth.popup('google').then((provider) => {
          // Prompts 'welcome' message with User's name on successful login
          // Check console logs for additional User info
          provider.me().then((data) => {
            // console.log("data: ", data);
            localStorage.setItem("HopCentricity_Token", provider.id_token)
            localStorage.setItem("HopCentricity_Email", data.email)
            localStorage.setItem("HopCentricity_Username", data.raw.names[0].displayName)
            this.props.setStateUsernameEmailToken(data)
            // this.props.history.push('/menu') //Uncomment to login directly after OAuth
          this.sendAuth()
          });
        });
      }

      sendAuth = () => {
        fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: localStorage.getItem('HopCentricity_Token'),
            email: this.props.user.email,
            username: this.props.user.username
          })
        })
        .then(res => res.json)
        // .then( json => console.log('here is fetch return:',json))
      }


      render() {
        return (
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h2 className="ui teal image header cursor" onClick={this.handleClick.bind(this)}>
                  <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' className="image cursor App-logo"></img>
                  <div className="content cursor">
                    Log-in with Google
                  </div> 
                </h2>           
              </div>  
            </div>
          </div>
        )
      }
}

export default withRouter(Login)
