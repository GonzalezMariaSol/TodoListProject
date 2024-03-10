const TaskTypeSelector = () => {

    return <div>
    <label htmlFor="inputTaskSelected">Seleccionar</label>
    <select id="inputTaskSelected" name="TaskSelected">
      <option value="all">Todas</option>
      <option value="completed">Completas</option>
      <option value="pending">Pendientes</option>
    </select>
  </div>

} 
export default TaskTypeSelector

/*
1)Tengo que aplicar flexbox el div del return asi label queda arriba del select

*/
