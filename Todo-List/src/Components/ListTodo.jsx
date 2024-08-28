import React, { useState } from 'react';
import { MdDeleteForever, MdOutlineEditCalendar   } from "react-icons/md";
import '../style/App.css'

const ListTodo = ({ tasks, handleDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState('');




  return (
    <div className='listTodo mt-5 w-75'>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="container showTask-container my-4">
            <div className="row align-items-center">

              <div className="col-10 col-sm-10">
                <div className='show-task my-2'>{task}</div>
              </div>
              <div className="col-2 col-sm-2">
              <span className="react-icon-edit fs-4" onClick={() => handleEditText(index)}>
              <MdOutlineEditCalendar />
                </span>
                <span className="react-icon-delete fs-4" onClick={() => handleDelete(index)}>
                  <MdDeleteForever />
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center my-3'>No tasks available.</p>
      )}
    </div>
  );
}

export default ListTodo;
