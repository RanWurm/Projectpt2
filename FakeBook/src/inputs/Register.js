import React, { useState } from 'react';
import '../css/inputsCss/Register.css'; // Import the CSS file
import {Navigate} from "react-router-dom"

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickName,  setNickName] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const	[isValid,	setIsValid] =	useState(true);
  const [usersList,addUserToList] = useState([]);
  const [userImage,setUserImage] = useState(null);
  const [succsefulReg,setSuccsefulReg] = useState(false);

  
  const handleRegister = ()=>{
	const user = {
		"userName": {username},
		"passWord": {password},
    "nickName": {nickName},
    "image":    {userImage}
		}
	addUserToList([...usersList,user]);
  }
  
  const handleConfirm = () => {
    if (username === '' || password === '' || confirmedPassword === '' 
    || userImage === null || nickName === ''|| password !== confirmedPassword) {
	  setIsValid(false)
    setSuccsefulReg(false);
    } else {
	  setIsValid(true)
    setSuccsefulReg(true);
	  handleRegister();
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfirm();
    setUsername('');
    setPassword('');
	  setConfirmedPassword('');
    setNickName('');
    setUserImage(null);
  };
  
  if(succsefulReg){
        return <Navigate to='/feed'/>
  }

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
        <div className="form-group"> {/* Added a class for styling */}
          <label htmlFor="confiremdPassword">Choose FakeNick:</label>
          <input
            type="text"
            id="nickName"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> {/* Added a class for styling */}
          <label className ='image_input' htmlFor="confiremdPassword">add image:</label>
          <input
            className='image_input'
            type="file"
            accept='image/*'
            onChange={(e)=>setUserImage(e.target.files[0])}
            required
          />
        </div>
        <button className='button' type="submit">register</button>
      </form>
      <div>{String(isValid)}</div>
    </div>
  );
}

export default Register;
