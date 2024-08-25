import React, { useState, useEffect } from "react";
import SearchToDo from "./Components/SearchToDo";

function App() {


  return (
    <div>
      <h1 className="text-center my-5">To-Do List</h1>
          <SearchToDo/>
    </div>
  );
}

export default App;
