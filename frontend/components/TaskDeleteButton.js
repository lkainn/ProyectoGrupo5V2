import React from 'react';

const TaskDeleteButton = ({ onDelete }) => {
  const handleDeleteClick = () => {
    // Muestra un cuadro de confirmación antes de eliminar la tarea
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      onDelete();
    }
  };

  return (
    <button onClick={handleDeleteClick} style={{ color: 'red' }}>
      Eliminar
    </button>
  );
};

export default TaskDeleteButton;
