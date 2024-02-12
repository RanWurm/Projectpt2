import React, { useState } from 'react';
import '../css/inputsCss/Login.css'; // Import the CSS file
import {Navigate} from "react-router-dom"
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [goToFeed,  setGoToFeed] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [toReg, setToReg] = useState(false);  
  
  const handleValid = () =>{
    if (username !== '' && password !==''){
      setIsValid(true);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    handleValid();
    setUsername('');
    setPassword('');
  };

  const handleLogin=()=>{
    setGoToFeed(true);
  }
  const handregister=()=>{
    setToReg(true);
  }
  if (goToFeed && isValid){
    return <Navigate to='/feed'/>
  }
  if (toReg){
    return <Navigate to='/register'/>
  }

 
  return (
    <div className="login-container"> {/* Added a class for styling */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Added a class for styling */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> {/* Added a class for styling */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className = "button"type="submit" onClick={handleLogin}>Login</button>
      </form>
      <button className='register_button'onClick={handregister}>Create Fakount</button>
    </div>
  );
}

export default Login;
