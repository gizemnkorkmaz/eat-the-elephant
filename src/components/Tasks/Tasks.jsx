import { useState } from "react";

import styles from "./Tasks.module.css";
import Icon from "../Icon/Icon";

const Tasks = ({ tasks }) => {
  const [isTaskDone, setIsTaskDone] = useState(false);

  return (
    <div className={styles.Tasks}>
      <h1 className={styles.TasksHeader}>Today</h1>
      {tasks.map((task) => (
        <li
          key={task}
          className={styles.TaskItem}
          onClick={() => setIsTaskDone(!isTaskDone)}
        >
          <Icon
            icon={isTaskDone ? "checkbox-checked" : "radio-unchecked"}
            size={15}
            className={styles.Icon}
          />
          {task}
        </li>
      ))}
    </div>
  );
};
export default Tasks;
