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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { ...task, title, description };

    try {
      const response = await fetch(`http://127.0.0.1:8000/taskmanager/tasks/${task.id}/update/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTU5MjYzMzczLCJpYXQiOjE2OTUyNjMzNzMsImp0aSI6IjIyN2YzYTI3ZTZiYjQxM2E4N2Q1YjZhYjY0YzAwZmRmIiwidXNlcl9pZCI6IjEyMzRAMTIzNC4xMjM0IiwidXNlcm5hbWUiOiIxMjM0In0.d_jvDbxcZ4z_ItMMGqfJrcRdFhriz7Nr26wmE940xlA`,
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

