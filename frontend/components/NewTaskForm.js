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

      try {
        const response = await fetch('http://127.0.0.1:8000/taskmanager/tasks/create/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk1MzI0MTAyLCJpYXQiOjE2OTUyNjQxMDIsImp0aSI6IjZjNGJiNjFhNWMzYzRiZDVhOTYwYmFjOWE3ZjYzZGQxIiwidXNlcl9pZCI6NCwidXNlcm5hbWUiOiIxMjM0In0.NkU9kTPwKiNxudK2b9WUYCZZdt8MJkTDuylSyyjkqvM`,
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
    <div>
      <h2>Crear nueva tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Descripcion:</label>
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
