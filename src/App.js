import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";

function App() {
  const [task, setTask] = useState("");

  return (
    <div className="App">
      <Header />
      <TaskInput task={task} setTask={setTask} />
    </div>
  );
}

export default App;
