import React, { useState, useEffect } from "react";
import SearchToDo from "./Components/SearchToDo";
import ListTodo from "./Components/ListTodo";



function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    try {
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (savedTasks && Array.isArray(savedTasks)) {
        setTasks(savedTasks);
      }
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
    }
  }, []);

  // Save tasks to localStorage when tasks state changes
  useEffect(() => {
        if(tasks.length>0){

          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    
  }, [tasks]);

  // Add a task
  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, task]);
    }
  };

  // Delete a task at a specified index
  const handleDelete = (indexOfDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexOfDelete);
    setTasks(updatedTasks);

     // setTasks(tasks.filter((task, index)=>{
            //   return index!== indexOfDelete
            // }))

 /* _: This is a conventional way to indicate that the first parameter is intentionally unused. In this case, _ represents the task but is not used in the function.
indexOfDelete: This is the index of the task that we want to delete.
Purpose: Since we don’t need the actual task in the filter function, we use _ to show that it’s intentionally ignored.*/

  };

  /* index !== indexToDelete: This is the condition. It means:

    "Keep the tasks whose position (index) is not equal to the indexToDelete."
    In other words, it removes the task that is at the position equal to indexToDelete.


     The filter method checks each task's index:
     Task 1 (index 0) → This index is not equal to 1, so it's kept.
     Task 2 (index 1) → This index is equal to 1, so it's removed.
     Task 3 (index 2) → This index is not equal to 1, so it's kept.*/

  return (
    <div>
      <h1 className="text-center my-5">To-Do List</h1>
      <SearchToDo addTask={addTask} />
      <ListTodo tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
