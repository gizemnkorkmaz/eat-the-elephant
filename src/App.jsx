import "./App.css";

import { useState } from "react";
import { TasksProvider } from "./context/tasksContext";

import TaskInput from "./components/TaskInput/TaskInput";
import TaskMenu from "./components/TaskMenu/TaskMenu";
import TaskBoard from "./components/TaskBoard/TaskBoard";

const App = () => {
  const [selectedList, setSelectedList] = useState("Inbox");
  const [searchedTask, setSearchedTask] = useState("");

  const taskLists = {
    noDate: "",
    inbox: "Inbox",
    overdue: "Overdue",
    important: "Important",
    today: "Today",
    tomorrow: "Tomorrow",
    nextSevenDays: "Next 7 Days",
    upcoming: "Upcoming",
  };

  const selectTaskList = (selectedList) => {
    setSelectedList(taskLists[selectedList]);
  };

  return (
    <div className="App">
      <div className="TaskBoard">
        <TasksProvider>
          <section className="TaskMenu">
            <TaskMenu
              selectTaskList={selectTaskList}
              selectedList={selectedList}
              setSelectedList={setSelectedList}
              setSearchedTask={setSearchedTask}
            />
          </section>
          <section className="TaskListArea">
            <TaskInput />
            <TaskBoard
              taskLists={taskLists}
              selectedList={selectedList}
              searchedTask={searchedTask}
            />
          </section>
        </TasksProvider>
      </div>
    </div>
  );
};

export default App;
