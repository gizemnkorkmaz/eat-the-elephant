import styles from "./App.module.css";
import cx from "classnames";

import { useState } from "react";
import { TasksProvider } from "./context/tasksContext";

import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskMenu from "./components/TaskMenu/TaskMenu";
import TaskBoard from "./components/TaskBoard/TaskBoard";

const App = () => {
  const [selectedList, setSelectedList] = useState("Inbox");
  const [searchedTask, setSearchedTask] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(false);

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
    <div className={styles.App}>
      <Header
        setSelectedList={setSelectedList}
        setSearchedTask={setSearchedTask}
        isMenuHidden={isMenuHidden}
        setIsMenuHidden={setIsMenuHidden}
      />
      <div className={styles.TaskBoard}>
        <TasksProvider>
          <section
            className={cx(styles.TaskMenu, {
              [styles.ToggleTaskBoard]: isMenuHidden,
            })}
          >
            <TaskMenu
              selectTaskList={selectTaskList}
              selectedList={selectedList}
            />
          </section>
          <section className={styles.TaskListArea}>
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
