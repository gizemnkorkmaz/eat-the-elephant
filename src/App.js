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
      <div className="TaskBoard">
        <section className="TaskMenu">My Lists</section>
        <section className="TaskListArea">
          <TaskInput tasks={tasks} setTasks={setTasks} />
          {tasks.length > 0 && <Tasks tasks={tasks} setTasks={setTasks} />}
        </section>
      </div>
    </div>
  );
}

export default App;
