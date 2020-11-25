import React, { useState } from 'react';
import './Task.css';

const Task = ({ data, handleComplete, handleEdit, handleDelete }) => {
    const [taskName, setTaskName] = useState(data.name);
    const [editing, setEditing] = useState(false);

    const handleClick = () => {
        if(editing) {
            handleEdit(taskName, data.name)
        }
        setEditing(!editing)
        console.log(taskName);
    }

    return (
        <>
            <div className="col-12 mb-4 task">
                <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-margin" checked={data.completed} disabled={editing} onChange={() => handleComplete(taskName)}/>
                    <span className="checkbox-custom rectangular"></span>
                </label>
                {
                    !editing ? 
                        <span className={data.completed ? 'task-completed task' : 'task'}> {taskName} </span>
                    : 
                        <input id="add-new" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
                } 
                <input type="submit" disabled={editing} onClick={() => handleDelete(data.name)} className="btn btn-danger del-btn m-right mr-2" value="Delete"></input>
                <button className="btn btn-success save-btn m-right mr-2" onClick={handleClick}>
                    {editing ? 'Save' : 'Edit'}
                </button>
            </div>
            <hr/>
        </>
    )
}

export default Task;