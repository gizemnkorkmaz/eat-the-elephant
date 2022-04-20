import { useContext } from "react";

import Button from "../Button/Button";
import { TasksContext } from "../../context/tasksContext";

import styles from "./EmptyTaskList.module.css";

const EmptyTaskList = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const incompleteTasks = tasks.filter((task) => !task.isDone);
  const noTasks = tasks.length === 0;
  const noIncompleteTasks = incompleteTasks.length === 0;

  const clearAll = () => {
    const isConfirm = window.confirm(
      "Are you sure you want to clear all tasks?"
    );
    if (isConfirm) {
      setTasks([]);
    }
  };
  return (
    <div className={styles.EmptyTaskWrapper}>
      {noTasks && <h2 className={styles.NoTasks}>No task listed.</h2>}
      {!noTasks && noIncompleteTasks && (
        <div>
          <p className={styles.NoIncompleteTasks}>
            Looks like everything's organized in the right place!
          </p>
          <Button onClick={clearAll}>Clear All</Button>
        </div>
      )}
    </div>
  );
};

export default EmptyTaskList;
