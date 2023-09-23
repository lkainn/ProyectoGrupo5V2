import React, { useState } from 'react';
import {} from '../styles/globals.css';

const NewTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      const newTaskData = {
        title: title,
        description: description,
      };

      const authToken = localStorage.getItem('authToken');

      try {
        const response = await fetch('http://127.0.0.1:8000/api/tasks/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${authToken}`,
          },
          body: JSON.stringify(newTaskData),
        });

        if (response.ok) {
          const newTask = await response.json();
          onAddTask(newTask);
          setTitle('');
          setDescription('');
        } else {
          console.error('Error al crear la tarea.');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
  };

  return (
    <div >
      <h2>Crear nueva tarea</h2>
      <form onSubmit={handleSubmit}>
      
        <div className="input-group">
         <p>Titulo</p>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="input-group">
        <p>Descripcion</p>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
