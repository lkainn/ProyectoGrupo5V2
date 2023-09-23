import React, { useState } from 'react';
import {} from '../styles/globals.css'


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const user = { username };
    onLogin(user);
  };

  return (
    <div className='container' >
    <div className='centrarButton'>
      <h2>Login</h2>
      <p>Nombre de usuario</p>
      <input type="text" placeholder="Ingresa tu usuario" onChange={handleUsernameChange} />
      <p>Contraseña</p>
      <input type="password" placeholder="Ingresa tu contraseña" onChange={handlePasswordChange} />
      <br/>
      <br/>
      <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default LoginForm;