import Task from '../Task/Task';
import './ListTask.css';

const ListTask = ({ title, tasks = [], completed, handleComplete, handleEdit, handleDelete }) => {
    
    let isEmpty = tasks.filter(task => task.completed === completed).length === 0;

    return (
        <>
            <div className="col-12 mt-3 left-title">{title}</div>
            <div className="mb-3 col-12">
                <hr className="hr-bold mb-4" />
                {
                    tasks.length === 0 || isEmpty  
                        ? <div className="text-center"> Empty </div> 
                        : tasks.map((task) => {
                            
                            let TaskComponent = <Task 
                                    key={task.name} 
                                    data={task} 
                                    handleDelete={handleDelete} 
                                    handleEdit={handleEdit} 
                                    handleComplete={handleComplete}/>
                                     
                            if(completed && task.completed) return TaskComponent;
                            else if(!completed && !task.completed) return TaskComponent
                            else return <></>
                        })
                }
            </div>
        </>
    )
}

export default ListTask;