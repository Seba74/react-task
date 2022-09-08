import TaskList from "./taskList/TaskList";
import TaskForm from "./taskList/TaskForm";
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
