import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';


export default class Google extends Component {
    state = {
        isSignedIn: false,
        email: '',
        name: '',
        picture: '',
        userID: ''
    }
    responseGoogle = response => {
        console.log(response);
        this.setState({
          isSignedIn: true,
          userID: response.userId,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url
        });
      }
      componentClicked = () => console.log('clicked');
      render() {
        let glContent;
    
        if(this.state.isLoggedIn){
           glContent= (
             <div style={{
               width: '400px',
               margin: 'auto',
               background: '#f4f4f4',
               padding: '20px'
             }}>
             <img src={this.state.picture} alt={this.state.name} />
             <h2>Welcome {this.state.name}</h2>
             Email: {this.state.email}
             </div>
           );
        } else {
          glContent = (
            <GoogleLogin clientId='client_id":"641000933497-f8eprvm0qv4ghnvrqfb2h4k7j66cvd8d.apps.googleusercontent.com'
            autoLoad={true}
            fields='name,email,picture'
            onClick={this.componentClicked}
            callback={this.responseGoogle} />
          );
        }
        return (
          <div>
            {glContent}
          </div>
        )
      }
}
