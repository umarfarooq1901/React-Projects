import React, { useState, useEffect } from "react";
import SearchToDo from "./Components/SearchToDo";
import ListTodo from "./Components/ListTodo"

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task)=>{
          if(task.trim()){
              setTasks([...tasks, task])
          }
    };

  return (
    <div>
      <h1 className="text-center my-5">To-Do List</h1>
          <SearchToDo addTask = {addTask}/>
          <ListTodo tasks = {tasks}/>
    </div>
  );
}

export default App;
