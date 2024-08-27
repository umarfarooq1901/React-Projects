import React, { useState, useEffect } from "react";
import SearchToDo from "./Components/SearchToDo";
import ListTodo from "./Components/ListTodo";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage when tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a task
  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, task]);
    }
  };

  // Delete a task at a specified index
  const handleDelete = (indexOfDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexOfDelete));
  };

  return (
    <div>
      <h1 className="text-center my-5">To-Do List</h1>
      <SearchToDo addTask={addTask} />
      <ListTodo tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
