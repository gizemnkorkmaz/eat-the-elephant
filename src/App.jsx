import "./App.css";

import { useState } from "react";
import { TasksProvider } from "./context/tasksContext";

import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskMenu from "./components/TaskMenu/TaskMenu";
import Tasks from "./components/Tasks/Tasks";

const App = () => {
  const [selectedList, setSelectedList] = useState("Today");

  const selectTaskList = (selectedList) => {
    const taskLists = {
      today: "Today",
      tomorrow: "Tomorrow",
      thisWeek: "This Week",
      allTasks: "All Tasks",
    };

    setSelectedList(taskLists[selectedList]);
  };

  return (
    <div className="App">
      <Header />
      <div className="TaskBoard">
        <section className="TaskMenu">
          <TaskMenu
            selectTaskList={selectTaskList}
            selectedList={selectedList}
          />
        </section>
        <section className="TaskListArea">
          <TasksProvider>
            <TaskInput />
            <Tasks selectedList={selectedList} />
          </TasksProvider>
        </section>
      </div>
    </div>
  );
};

export default App;
