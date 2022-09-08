import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import './taskComponent.scss';

function TaskCard({ task, getId }) {
  const {delateTask} = useContext(TaskContext);

  return (
    <div className="card-data">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => {delateTask(task.id)}} >Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
