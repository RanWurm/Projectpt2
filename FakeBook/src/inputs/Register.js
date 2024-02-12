import React, { useState } from 'react';
import '../css/inputsCss/Register.css'; // Import the CSS file

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const	[isValid,	setIsValid] =	useState(true);
  const [usersList,addUserToList] = useState([]);
  
  const handleRegister = ()=>{
	const user = {
		"userName": {username},
		"passWord": {password}
		
	}
	addUserToList([...usersList,user]);
  }
  
  const handleConfirm = () => {
    if (username === '' || password === '' || confirmedPassword === '' || password !== confirmedPassword) {
	  setIsValid(false)
    } else {
	  setIsValid(true)
	  handleRegister();
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
	setConfirmedPassword('');
	handleConfirm();
  };
  

  return (
    <div className="login-container"> 
      <h2 className>Register</h2>
	  {!isValid&&(
			<h4 className='wrong_input'>wrong inputs</h4>
		)}
      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> 
          <label htmlFor="password">Choose Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
		<div className="form-group"> {/* Added a class for styling */}
          <label htmlFor="confiremdPassword">Comfirm Password:</label>
          <input
            type="password"
            id="confirmedPassword"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            required
          />
        </div>
        <button className='button' type="submit">register</button>
      </form>
    </div>
  );
}

export default Register;
