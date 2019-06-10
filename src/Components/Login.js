import React from 'react'

class Login extends React.Component {

    constructor() {
      super()
    }

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
            this.props.setUsernameAndPassword(data)
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
        .then( json => console.log('here is fetch return:',json))
      }


      render() {
        return (
          <a href="" onClick={this.handleClick.bind(this)} className="btn btn-social btn-github">
                   <span className="fa fa-github"></span> Sign in with Google
          </a>
        )
      }
}

export default Login
