import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

import styles from "./TaskBoard.module.css";

const TaskBoard = ({ taskLists, selectedList, searchedTask }) => (
  <main className={styles.TaskBoard}>
    <div>
      <TaskInput />
      <TaskList
        taskLists={taskLists}
        selectedList={selectedList}
        searchedTask={searchedTask}
      />
    </div>
    <Footer />
  </main>
);

export default TaskBoard;
