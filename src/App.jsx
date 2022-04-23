import { useState } from "react";

import { TasksProvider } from "./context/tasksContext";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.css";

const App = () => {
  const [selectedList, setSelectedList] = useState("inbox");
  const [searchedTask, setSearchedTask] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const taskLists = [
    { value: "noDate", label: "" },
    { value: "inbox", label: "Inbox", icon: "inbox" },
    { value: "important", label: "Important", icon: "important" },
    { value: "overdue", label: "Overdue", icon: "history" },
    { value: "today", label: "Today", icon: "today" },
    { value: "tomorrow", label: "Tomorrow", icon: "pushpin" },
    {
      value: "nextSevenDays",
      label: "Next 7 Days",
      icon: "star",
    },
    { value: "upcoming", label: "Upcoming", icon: "hourglass" },
  ];

  return (
    <TasksProvider>
      <div className={styles.App}>
        <Header
          setSelectedList={setSelectedList}
          setSearchedTask={setSearchedTask}
          toggleMenu={() => setIsMenuHidden(!isMenuHidden)}
        />
        <div className={styles.TaskContent}>
          <Sidebar
            isMenuHidden={isMenuHidden}
            taskLists={taskLists}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
          />
          <TaskBoard
            taskLists={taskLists}
            selectedList={selectedList}
            searchedTask={searchedTask}
          />
        </div>
        <Footer />
      </div>
    </TasksProvider>
  );
};

export default App;
