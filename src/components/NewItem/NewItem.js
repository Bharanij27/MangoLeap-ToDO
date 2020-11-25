import React, { useState } from 'react';
import './NewItem.css';

const NewItem = ({ AddTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim().length === 0) return;
        AddTask(task);
        setTask('')
    }
    return(
        <>
            <div className="col-12 left-title">Add Item</div>
            <div className="mb-3 col-12">
                <hr className="hr-bold mb-4" />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input id="add-new"type="text" value={task} onChange={(e) => setTask(e.target.value)}></input>
                    <input type="submit" className="btn btn-primary new-item-btn m-right" value="Add"></input>
                </form>
            </div>
        </>
    )
}

export default NewItem;