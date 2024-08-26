import React from 'react'
import { MdDeleteForever } from "react-icons/md";

const ListTodo = ({tasks}) => {
  return (
    <div className='listTodo border mt-5 '>
    {tasks.length > 0 ? (
      tasks.map((task, index) => (
        <div key={index} className="container showTask-container">
          <div className="row align-items-center">
            <div className="col-8 col-sm-10">
              <div className='show-task my-2'>{task}</div>
            </div>
            <div className="col-4 col-sm-2 text-end">
              <span className="react-icon fs-4">
                <MdDeleteForever />
              </span>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No tasks available.</p>
    )}
  </div>
  
  )
}

export default ListTodo
