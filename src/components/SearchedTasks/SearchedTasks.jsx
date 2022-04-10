import styles from "./SearchedTasks.module.css";

import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";

import Task from "../Task/Task";

const SearchedTasks = ({ searchedTask }) => {
  const { tasks } = useContext(TasksContext);
  const searchResults = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchedTask.toLowerCase())
  );

  return (
    <div className={styles.Tasks}>
      {searchResults.length ? (
        searchResults.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <div className={styles.NoTaskMessage}>No task found</div>
      )}
    </div>
  );
};

export default SearchedTasks;
