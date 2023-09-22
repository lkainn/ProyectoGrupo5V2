import React, { useState, useEffect } from 'react';
import NewTaskForm from './NewTaskForm';
import TaskEditForm from './TaskEditForm';
import TaskDeleteButton from './TaskDeleteButton';
import TaskFilter from './TaskFilter';
import {} from '../styles/globals.css';

const TasksPage = ({ user, onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  // Obtener el token del almacenamiento local
  const authToken = localStorage.getItem('authToken');

  // Hacer una solicitud GET para obtener las tareas del usuario al cargar la página
  useEffect(() => {
    // Actualiza la URL para apuntar al endpoint correcto de tu API Django
    fetch('http://127.0.0.1:8000/api/tasks/', {
      method: 'GET',
      headers: {
        Authorization: `Token ${authToken}`, // Incluye el token en el encabezado de autorización
      },
    })
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, [authToken]);



  // Función para filtrar tareas según el estado seleccionado
  const filterTasks = (filter, tasks) => {
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    } else if (filter === 'incomplete') {
      return tasks.filter((task) => !task.completed);
    } else {
      return tasks;
    }
  };

  

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (updatedTask) => {
    // Actualizar la tarea en la lista de tareas
    const updatedTasks = tasks.map((t) =>
      t === editingTask ? updatedTask : t
    );
    setTasks(updatedTasks);

    // Cerrar el formulario de edición
    setEditingTask(null);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((t) => t !== taskToDelete);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (task) => {
    const updatedTasks = tasks.map((t) =>
      t === task ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredTasks = filterTasks(filter, tasks);

  return (
    <div>
      <p className='mens-container'>Bienvenido, {user.username}!</p>
      <button className='button-container' onClick={onLogout}>Logout</button>

      <NewTaskForm onAddTask={handleAddTask} />

      <div className="task-container">
        <h2>Lista de tareas</h2>
        <TaskFilter onFilterChange={handleFilterChange} />
        <ul className="task-list">
          {Array.isArray(filteredTasks) && filteredTasks.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-info">
                <strong>{task.title}</strong>: {task.description}
              </div>
              <div className="task-actions">
                <button onClick={() => handleEditTask(task)}>Editar</button>
                <TaskDeleteButton onDelete={() => handleDeleteTask(task)} />
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {editingTask && (
        <TaskEditForm
          task={editingTask}
          onUpdateTask={handleUpdateTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default TasksPage;
