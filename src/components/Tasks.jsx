import {useState} from 'react'
import Task from './Task'
 
function Tasks({ task, onDelete, onToggle }){
    
    return(
        <div>
            {task.map((item)=>(
                <div key={item.id}>
                    <Task task={item} onDelete={onDelete} onToggle={onToggle}/>
                </div>
            ))}
        </div>
    )
}

export default Tasks