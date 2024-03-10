import { useState } from "react";

const TaskCreator = (getTaskName) => {
    const [task, setNewTask] = useState("")


    const getTaskAdded = (e) => {
        e.preventDefault
        setNameCity(e.target.value)
    }

    
    

    
    return <div>
    <label htmlFor="taskNameInput">Tarea</label>
    <input type="text" id="taskNameInput" name="taskName" onChange={(e) => getTaskAdded(e)}/>
  </div>;
};

export default TaskCreator;

/*
1)Tengo que aplicar flexbox el div del return asi label queda arriba del input y debo agregar box shadow en hover del input

*/
