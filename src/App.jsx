import "./App.css";

import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import Datepicker from "./components/DatePicker/DatePicker";
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
          <Datepicker />
          <Tasks />
        </TasksProvider>
      </section>
    </div>
  </div>
);

export default App;
