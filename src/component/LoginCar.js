import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginCar extends Component {
  login = (event) => {
    alert("successful");
    axios.post('api/login') // Assuming this is the endpoint for Facebook login
      .then(res => {
        console.log(res.data);
        // Perform any necessary actions after successful login
      })
      .catch(error => {
        console.log(error);
        // Handle any errors that occur during the login process
      });

    axios.post("/user", function(data){
      ("#user").html(data.userAuthentication.details.name);
      (".unauthenticated").hide()
      (".authenticated").show()
      })
      .catch(error => {
        console.log(error);
        // Handle any errors that occur while retrieving user information
      });
  }

  render() {
    return (
      <div>
        <div className="container unauthenticated">
          Login With Facebook: <button onClick={this.login}>click here</button>
        </div>
        <div className="container authenticated" style={{ display: 'none' }}>
          Logged in as: <span id="user"></span>
        </div>
      </div>
    );
  }
}

export default LoginCar;
