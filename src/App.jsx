import { useState, createContext } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import Tasks from "./components/Tasks/Tasks";

export const TasksContext = createContext();
export const EditTaskIdContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="TaskBoard">
        <section className="TaskMenu">My Lists</section>
        <section className="TaskListArea">
          <TasksContext.Provider value={[tasks, setTasks]}>
            <TaskInput />
            {tasks.length > 0 && (
              <EditTaskIdContext.Provider value={[editTaskId, setEditTaskId]}>
                <Tasks />
              </EditTaskIdContext.Provider>
            )}
          </TasksContext.Provider>
        </section>
      </div>
    </div>
  );
}

export default App;
