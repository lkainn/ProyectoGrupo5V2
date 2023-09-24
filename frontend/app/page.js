"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import LoginForm from '../components/LoginForm';
import TasksPage from '../components/TasksPage';
import {} from '../styles/globals.css'

const Home = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
    <h1>Administrador de tareas</h1>
    
    <div >
      
      {user ? (
        <TasksPage user={user} onLogout={handleLogout} />
      ) : (
        <>
          <LoginForm onLogin={handleLogin} />
          
        </>
      )}
    </div>
      <p>No tenes cuenta? <Link href="/register">Regístrate aca</Link></p>
    </div>
  );
};

export default Home;
