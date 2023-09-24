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


  const storedTaskIds = JSON.parse(localStorage.getItem('taskIds')) || [];

  const handleDeleteTask = (taskToDelete) => {
    // Realiza una solicitud para eliminar la tarea en la API
    fetch(`http://127.0.0.1:8000/api/tasks/${taskToDelete.id}/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${authToken}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Eliminación exitosa, actualiza la lista de tareas en el estado local
          const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
          setTasks(updatedTasks);
        } else {
          console.error('Error al eliminar la tarea.');
        }
      })
      .catch((error) => console.error('Error en la solicitud:', error));
  };

  const handleToggleComplete = (task) => {
    const updatedTask = { ...task, completed: !task.completed };
  
    fetch(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${authToken}`,
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => {
        if (response.ok) {
          const updatedTasks = tasks.map((t) =>
            t.id === task.id ? updatedTask : t
          );
          setTasks(updatedTasks);
        } else {
          console.error('Error al cambiar el estado de la tarea.');
        }
      })
      .catch((error) => console.error('Error en la solicitud:', error));
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredTasks = filterTasks(filter, tasks);3

  const handleLogout = () => {
    // Realiza una solicitud al backend para cerrar la sesión
    fetch('http://127.0.0.1:8000/auth/logout/', {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${authToken}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Elimina el token de autenticación del almacenamiento local
          localStorage.removeItem('authToken');
          // Ejecuta la función de cierre de sesión proporcionada como prop
          onLogout();
        } else {
          console.error('Error al cerrar la sesión.');
        }
      })
      .catch((error) => console.error('Error en la solicitud:', error));
  };




  return (

    <div  className='container2'>   
        
    
      <p className='mens-container'>Bienvenido, {user.username}!</p>
      <button className='button-container' onClick={onLogout}>Logout</button>


      <NewTaskForm onAddTask={handleAddTask} />        
    

    <h2>Lista de tareas</h2>
    <TaskFilter onFilterChange={handleFilterChange} /> {/* Agrega el componente de filtro */}
    <ul className="task-list">
      {filteredTasks.map((task, index) => (
        <li key={index} className="task-item">
          <div className="task-info">
            <strong>{task.title}</strong>: {task.description}
          </div>
          <div className="task-actions">
            <button onClick={() => handleEditTask(task)}>Editar</button>
            <TaskDeleteButton onDelete={() => handleDeleteTask(task)} /> {/* Agrega el componente de eliminación */}
            <input className='input-check'
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
            /> {/* Checkbox para tareas completadas */}
          </div>
        </li>
      ))}
    </ul>
  
  
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
