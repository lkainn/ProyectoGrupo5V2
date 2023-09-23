import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import {} from '../styles/globals.css'

const Register = () => {
  return (
    <div>
    <div className='centrarButton' >
      <h1>Administrador de tareas</h1>
      <RegistrationForm />
      </div>
      <p>Ya tenes cuenta? <a href="/">Loguea aca</a></p>
    </div>
  );
};

export default Register;
