import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";

import styles from "./TaskBoard.module.css";

const TaskBoard = ({ taskLists, selectedList, searchedTask }) => (
  <section className={styles.TaskBoard}>
    <div>
      <TaskInput />
      <TaskList
        taskLists={taskLists}
        selectedList={selectedList}
        searchedTask={searchedTask}
      />
    </div>
  </section>
);

export default TaskBoard;
