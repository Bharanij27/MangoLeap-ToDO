import React, { useState } from 'react';
import NewItem from "../NewItem/NewItem";
import ListTask from '../ListTask/ListTask'

const ToDo = () => {

    const tasks = JSON.parse(localStorage.getItem('allToDoTasks')) || [];
    const [todoTask, setTodoTask] = useState(tasks);
    
    const AddTask = (newTaskName) => {
        let newTask = {name : newTaskName, completed : false};
        let taskList  = [...todoTask, newTask]
        saveChanges(taskList);    
    }

    const handleComplete = (taskName) => {
        let allTasks = todoTask.map((task) => {
            if(task.name === taskName) task.completed = !task.completed
            return task 
        });
        saveChanges(allTasks);
    }

    const handleEdit = (newName, oldName) => {
        let allTasks = todoTask.map((task) => {
            if(task.name === oldName) task.name = newName
            return task 
        });
        saveChanges(allTasks);
    } 

    const handleDelete = (taskName) => {
        let allTasks = todoTask.filter((task) => task.name !== taskName);
        saveChanges(allTasks);
    }

    const saveChanges = (allTasks) => {
        setTodoTask(allTasks);
        localStorage.setItem('allToDoTasks', JSON.stringify(allTasks));
    }

    return(
        <div className="todo row">
            <NewItem AddTask={AddTask}/>
            <ListTask title = 'ToDo' tasks = {todoTask} completed={false} handleDelete={handleDelete} handleEdit={handleEdit} handleComplete={handleComplete}/>
            <ListTask title = 'Completed' tasks = {todoTask} completed={true} handleDelete={handleDelete} handleEdit={handleEdit} handleComplete={handleComplete}/>
        </div>
    )
}

export default ToDo