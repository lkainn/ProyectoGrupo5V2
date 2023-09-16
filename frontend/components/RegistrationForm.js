import { useState } from 'react';


const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const apiUrl = 'http://127.0.0.1:8000/customusers/api/registry/';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    const validationErrors = {};

    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    }

    if (password.trim() === '') {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
      setErrorMessage('');
      return;
    }

    const registrationData = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        console.log('Data:', data);

        if (data.success) {
          // Registro exitoso
          setSuccessMessage('Registro exitoso');
          setErrorMessage('');
          // Limpiar los campos después de un registro exitoso
          setEmail('');
          setPassword('');
          setFirstName('');
          setLastName('');
          
         
        } else {
          // Manejar errores de validación
          setErrorMessage('Error en el registro. Verifica tus datos.');
          setSuccessMessage('');
        }
      } else {
        // Manejar errores de red u otros errores de la API
        setErrorMessage('Error en la solicitud. Inténtalo de nuevo más tarde.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      // Manejar errores de red u otros errores de la API
      setErrorMessage('Error en la solicitud. Inténtalo de nuevo más tarde.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Formulario de registro</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistrationForm;




