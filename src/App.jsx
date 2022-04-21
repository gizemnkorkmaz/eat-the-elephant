import { useState } from "react";
import cx from "classnames";

import { TasksProvider } from "./context/tasksContext";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskMenu from "./components/TaskMenu/TaskMenu";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.css";

const App = () => {
  const [selectedList, setSelectedList] = useState("inbox");
  const [searchedTask, setSearchedTask] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const taskLists = {
    noDate: "",
    inbox: "inbox",
    overdue: "overdue",
    important: "important",
    today: "today",
    tomorrow: "tomorrow",
    nextSevenDays: "nextSevenDays",
    upcoming: "upcoming",
  };

  const selectTaskList = (selectedList) => {
    setSelectedList(taskLists[selectedList]);
  };

  return (
    <div className={styles.App}>
      <Header
        setSelectedList={setSelectedList}
        setSearchedTask={setSearchedTask}
        toggleMenu={() => setIsMenuHidden(!isMenuHidden)}
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
            <div>
              <TaskInput />
              <TaskBoard
                taskLists={taskLists}
                selectedList={selectedList}
                searchedTask={searchedTask}
              />
            </div>
            <Footer />
          </section>
        </TasksProvider>
      </div>
    </div>
  );
};

export default App;
