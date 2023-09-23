import React, { useState } from 'react';

const TaskEditForm = ({ task, onUpdateTask, onCancel, user }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };


  const authToken = localStorage.getItem('authToken'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { ...task, title, description };

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${authToken}`,
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        onUpdateTask(updatedTask);
        onCancel();
      } else {
        console.error('Error al actualizar la tarea.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <h2>Editar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="edit-title">Título:</label>
          <input
            type="text"
            id="edit-title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="edit-description">Descripción:</label>
          <textarea
            id="edit-description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">Guardar Cambios</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default TaskEditForm;

