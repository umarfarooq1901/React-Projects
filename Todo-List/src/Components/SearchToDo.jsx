import React, { useState } from 'react'

const SearchToDo = ({addTask}) => {

    const[userInput, setUserInput] = useState('');

    const handlesubmit = (e)=>{
            e.preventDefault();
                addTask(userInput);
                setUserInput('');
            
    }
  return (
    <div className='searchTodo'>
            <div className="form ">
                <form className='form-main  d-flex justify-content-center align-items-center' onSubmit={handlesubmit}>

                        <input className="form-control w-50" type="text" placeholder='What is the task today?' value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
                        <button type='submit' className='btn btn-success'>Add</button>

                </form>
            </div>
    </div>
  )
}

export default SearchToDo
