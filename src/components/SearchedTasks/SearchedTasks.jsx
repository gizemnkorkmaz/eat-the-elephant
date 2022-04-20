import { useContext } from "react";

import Task from "../Task/Task";
import { TasksContext } from "../../context/tasksContext";

import styles from "./SearchedTasks.module.css";

const SearchedTasks = ({ searchedTask }) => {
  const { tasks } = useContext(TasksContext);

  const searchResults = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchedTask.toLowerCase())
  );

  return (
    <div className={styles.Tasks}>
      {searchResults.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      {!searchResults.length && (
        <div className={styles.NoTaskMessage}>
          No matches for "{searchedTask}"
        </div>
      )}
    </div>
  );
};

export default SearchedTasks;
