import React, { useState } from 'react';
import { MdDeleteForever, MdOutlineEditCalendar } from "react-icons/md";
import '../style/App.css';

const ListTodo = ({ tasks, handleDelete, updateTask }) => {
  // states for editing the task
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState('');
  // state for track the completed tasks
  const [completeTask, setCompleteTask] = useState({});


  // Hnadler for editing the task
  const handleEditText = (index, task) => {
    setEditIndex(index);
    setEditTask(task);
  }

  // Funtion to save edited task
  const handleSave = (index) => {
    updateTask(index, editTask);
    setEditIndex(null);
  };


  // function to check the task
        const toggleCheck = (index)=>{
                setCompleteTask({
                  ...completeTask, [index] : !completeTask[index],
                });
        }

  return (
    <div className='listTodo mt-5 w-100 rounded'>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="container showTask-container my-3 p-3">
            <div className="row align-items-center">
              <div className="col-1 col-md-1 text-center">
                <input type="checkbox"  checked={!!completeTask[index]} onChange={()=>toggleCheck(index)}/>
              </div>
              <div className="col-7 col-md-7">
                {editIndex === index ? (
                  <input
                    type="text"
                    className='form-control'
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    style={{ width: '100%' }}
                  />
                ) : (
                  <div className={`show-task ${completeTask[index]? 'strike-through' : ''}`}>{task}</div>
                )}
              </div>
              <div className="col-2 col-md-2 text-center">
                {editIndex === index ? (
                  <button
                    className="btn btn-success w-100"
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </button>
                ) : (
                  <span className="react-icon-edit fs-3" onClick={() => handleEditText(index, task)}>
                    <MdOutlineEditCalendar />
                  </span>
                )}
              </div>
              <div className="col-2 col-md-2 text-center">
                <span className="react-icon-delete fs-3" onClick={() => handleDelete(index)}>
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
