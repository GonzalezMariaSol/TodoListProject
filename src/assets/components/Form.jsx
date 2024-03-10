// import TaskCreator from "./TaskCreator";
import TaskTypeSelector from "./TaskTypeSelector";
import { useState } from "react";

const Form = () => {
  //inicio mostrando lo que hay en taskName o sino creo un arr vacio
  const [lsTask, setLsTask] = useState(JSON.parse(localStorage.getItem("taskName")) || []); //VA ACTUALIZANDO AL LOCAL STORAGE

  const [loadedTask, setLoadedTask] = useState("");//VA ENVIANDO LO QUE SE ESTUVO ESCRIBIENDO EN EL INPUT ?????

  const getTaskAdded = (e) => {
    setLoadedTask(e.target.value);
  }; //SOLO CAPTURA LO QUE ESCRIBE EL USUARIO EN EL INPUT

  const manejarClick = (e) => {
    e.preventDefault();
    handleAddTask(loadedTask);
  }; //SE INICIA AL CLICK EL BTN CARGAR Y SOLO EJECUTA HANDLEADDTASk ENVIANDOLE LO QUE SE ESCRIBIO EN EL INPUT~

  const handleAddTask = (loadedTask) => { //LE LLEGA LO QUE SE PUSO EN EL INPUT
    const valor = { id: crypto.randomUUID(), task: loadedTask }; //SE GUARDA EN VALOR LO QUE SE ESCRIBIO EN EL INPUT Y SE LE DA UN ID
    setLsTask([...lsTask, valor]); //SE AGREGA EL NUEVO OBJETO CREADO
    localStorage.setItem("taskName", JSON.stringify([...lsTask, valor])); //SE AGREGA AL LS EL NUEVO OBJETO CREADO
  };

  return (
    <form onSubmit={(e) => manejarClick(e)}>
      <div>
        <div>
          <label htmlFor="taskNameInput">Tarea</label>
          <input type="text" id="taskNameInput" name="taskName" onChange={getTaskAdded} />
        </div>
        {/* <TaskTypeSelector /> */}
      </div>
      <button type="submit">Cargar</button>
    </form>
  );
};
export default Form;

/*
1)debo ordenar el return para que el div ordene taskCreator a la izq y taskType a la derecha y button quede abajo de ese div

*/
