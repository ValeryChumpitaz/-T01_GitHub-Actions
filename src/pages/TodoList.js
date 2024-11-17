import React, { useState } from "react";
import "../styles/TodoList.css"; // Estilos específicos para la página de inicio

// Componente TodoList
export const TodoList = () => {
  const [tasks, setTasks] = useState([]); // Estado para las tareas
  const [newTask, setNewTask] = useState(""); // Estado para la nueva tarea
  const [editTaskIndex, setEditTaskIndex] = useState(null); // Estado para controlar la tarea que se está editando
  const [editTaskText, setEditTaskText] = useState(""); // Estado para el texto de la tarea que se está editando

  // Agregar tarea
  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]); // Agregar la nueva tarea a la lista
      setNewTask(""); // Limpiar el campo de entrada
    }
  };

  // Eliminar tarea
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Filtrar la tarea a eliminar
    setTasks(newTasks); // Actualizar las tareas
  };

  // Editar tarea
  const handleEditTask = (index) => {
    setEditTaskIndex(index); // Establecer el índice de la tarea que se está editando
    setEditTaskText(tasks[index]); // Establecer el texto actual de la tarea
  };

  // Guardar la tarea editada
  const handleSaveTask = () => {
    const newTasks = [...tasks];
    newTasks[editTaskIndex] = editTaskText; // Actualizar el texto de la tarea editada
    setTasks(newTasks); // Actualizar las tareas
    setEditTaskIndex(null); // Limpiar el índice de la tarea editada
    setEditTaskText(""); // Limpiar el texto de la tarea editada
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      
      {/* Campo para agregar tarea */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} // Actualizar el estado de la nueva tarea
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      {/* Mostrar lista de tareas */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {/* Si estamos editando una tarea, mostramos un campo de entrada para editarla */}
            {editTaskIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)} // Cambiar el texto de la tarea editada
                />
                <button onClick={handleSaveTask}>Save</button>
              </div>
            ) : (
              <div>
                <span>{task}</span>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
