const TaskList = () => {

  // const [task, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || [] )//che mostrame en principio lo que haya en task del LS sino mostrame solo un arr vacio



        // const addTaskName = () => {
    //     setTask([...task])//lo nuevo q se va a mostrar va a ser una copia de lo que ya teniamos + ....

    return <>
    
    </>

}
export default TaskList

/*
hay que usar map, y decirle por cada task en el ls que cree 
        <>
          <h1 key={task.id}> {task.nombre}</h1>
          <button onClick={() => deleteTask(task.id)}>X</button>
          <button onClick={() => doneTask(task.id)}>X</button>
        </>
*/