import React, { useState, useEffect } from 'react';

const TaskEditForm = ({ task, onUpdateTask, onCancel, user }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Cuando el componente se monta, verifica si la tarea ya está editándose
    setIsEditing(true);
  }, []);
  

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };


  const authToken = localStorage.getItem('authToken'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { ...task, title, description, updated: new Date() };

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
      <h2>{isEditing ? 'Editar Tarea' : 'Crear Tarea'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Titulo</p>
          <input
            type="text"
            id="edit-title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <p>Descripcion</p>
          <textarea
            id="edit-description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">{isEditing ? 'Guardar Cambios' : 'Crear Tarea'}</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default TaskEditForm;

