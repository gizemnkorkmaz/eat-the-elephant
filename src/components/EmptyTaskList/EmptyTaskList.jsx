import styles from "./EmptyTaskList.module.css";

import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";
import Button from "../Button/Button";

const EmptyTaskList = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const incompleteTasks = tasks.filter((task) => !task.isDone);

  const clearAll = () => {
    const isConfirm = window.confirm(
      "Are you sure you want to clear all tasks?"
    );
    if (isConfirm) {
      setTasks([]);
    }
  };
  return (
    incompleteTasks.length === 0 && (
      <div className={styles.EmptyTaskWrapper}>
        <p className={styles.EmptyTaskMessage}>
          Looks like everything's organized in the right place.
        </p>
        {tasks.length > 0 && (
          <Button onClick={clearAll}>Clear completed tasks</Button>
        )}
      </div>
    )
  );
};

export default EmptyTaskList;
