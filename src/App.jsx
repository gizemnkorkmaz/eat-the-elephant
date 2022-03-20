import "./App.css";

import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import Tasks from "./components/Tasks/Tasks";

import { TasksProvider } from "./context/tasksContext";

const App = () => (
  <div className="App">
    <Header />
    <div className="TaskBoard">
      <section className="TaskMenu">My Lists</section>
      <section className="TaskListArea">
        <TasksProvider>
          <TaskInput />
          <Tasks />
        </TasksProvider>
      </section>
    </div>
  </div>
);

export default App;
