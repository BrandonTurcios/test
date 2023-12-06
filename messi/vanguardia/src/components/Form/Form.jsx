import React from 'react';
import './Form.css';
import Boton from '../Boton/Boton';
const Form = () => {
  let username = '';
  let password = '';

  const handleUsernameChange = (e) => {
    username = e.target.value;
  };

  const handlePasswordChange = (e) => {
    password = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label className='usernameLabel'>
      Username:       
        <input className="usernameInput" type="text" onChange={handleUsernameChange} />
      </label>
      <br />
      <label className='passwordLabel'>
      Password:       
        <input className='passwordInput' type="password" onChange={handlePasswordChange} />
      </label>
      <br />
      <Boton texto="Login"/>
    </form>
  );
};

export default Form;
