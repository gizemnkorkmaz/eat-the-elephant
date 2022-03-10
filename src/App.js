import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="InputArea">
        <TaskInput tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="TaskListArea">
        {tasks.length > 0 && <Tasks tasks={tasks} setTasks={setTasks} />}
      </div>
    </div>
  );
}

export default App;
