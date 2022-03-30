import styles from "./EmptyTaskList.module.css";

import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";

const EmptyTaskList = () => {
  const { tasks } = useContext(TasksContext);
  return (
    tasks.length === 0 && (
      <div className={styles.EmptyTaskWrapper}>
        <h2>No task listed. </h2>
        <p className={styles.EmptyTaskMessage}>
          Add some or enjoy the rest of your day!
        </p>
      </div>
    )
  );
};

export default EmptyTaskList;
