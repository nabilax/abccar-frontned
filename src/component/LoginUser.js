import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      console.log(response.data); // Assuming the server returns "Login successful" upon successful authentication
      
      // Redirect to the dashboard on successful login
      history.push('/dashboard');
    } catch (error) {
      console.error(error);
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <React.Fragment>
            <div class="container-lg my-md-9 my-lg-6  align-items-center"> 
            <div class="row d-flex justify-content-center allign-items-center ">
    
        <div class="col-md-6 text-center d-none d-md-block shadow-lg">
        <img class="img-fluid" src="assests/images/cardemo.jpg" alt="car cover"/>
        </div>  
        

            <div class="col-md-4 text-bg-light text-center d-none d-md-block shadow-lg  ">
                <h3 class="text-danger">Login </h3>
                <form onSubmit={handleLogin}>
                <div class="mb-3 mt-3">
				<label for="name" class="form-label">Username:</label> <input
					type="text" class="form-control" 
					placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required="true" />
				<div class="valid-feedback">Valid.</div>
				<div class="invalid-feedback">Please fill out this field.</div>
			    </div>
                <div class="mb-3 mt-3">
				<label for="make" class="form-label">Password</label> <input
					type="text" class="form-control" 
					placeholder="Enter paassword" value={password} onChange={(e) => setPassword(e.target.value)} required="true" />
				<div class="valid-feedback">Valid.</div>
				<div class="invalid-feedback">Please fill out this field.</div>
			    </div>
                    <button class="btn btn-danger" type="submit" style={{position:'relative', top: '-10px'}}>Login</button>
                </form>
             {errorMessage && <p>{errorMessage}</p>}
            </div>     
        </div>
        </div>
    </React.Fragment>
    </div>
  );
};

export default LoginUser;

