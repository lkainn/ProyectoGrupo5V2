import React, { useState } from 'react';
import Link from 'next/link';
import {} from '../styles/globals.css';


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Inicio de sesión exitoso
        const data = await response.json();

        // Almacenar el token en el almacenamiento local
        localStorage.setItem('authToken', data.token);

       

        // Llamar a la función onLogin con el nombre de usuario
        onLogin(username);
        setErrorMessage('');
      } else {
        <TasksPage />
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setErrorMessage('Error en la solicitud. Inténtalo de nuevo más tarde.');
    }
  };

  

  return (
    <div className='container' >
    <div className='centrarButton'>
      <h2>Login</h2>

      {errorMessage && <p className="error">{errorMessage}</p>}


      <p>Nombre de usuario</p>
      <input type="text" placeholder="Ingresa tu usuario" onChange={handleUsernameChange} />
      <p>Contraseña</p>
      <input type="password" placeholder="Ingresa tu contraseña" onChange={handlePasswordChange} />
      <br/>
      <br/>
      <br/>    
      <br/>


      <button onClick={handleLogin}>Login</button>
    </div>
    <p>No tenes cuenta? <Link href="/register">Regístrate aca</Link></p>
    </div>
  );
};

export default LoginForm;
