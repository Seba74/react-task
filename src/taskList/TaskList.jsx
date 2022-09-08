import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext'
import TaskCard from './TaskCard';
import './taskComponent.scss';

function TaskList() {

  const {tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className='noTasks'>No hay tareas aun</h1>;
  }

  return (
    <div className='card-container'>
      {tasks.map((task) => (
        <TaskCard task = {task} key = {task.id} />
      ))}
    </div>
  );
}

export default TaskList;
