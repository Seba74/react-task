import { useState, useContext } from "React";
import { TaskContext } from "../context/TaskContext";
import "./taskComponent.scss";

import {FcTodoList, FcSignature} from "react-icons/fc"


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <FcSignature className="icon-pencil"/> 
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe una descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <FcTodoList className="icon-pencil"/> 
      </div>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
