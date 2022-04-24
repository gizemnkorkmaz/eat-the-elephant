import { useContext } from "react";

import Task from "../Task/Task";
import { TasksContext } from "../../context/tasksContext";
import getTaskGroup from "../../utils/getTaskGroup";

import styles from "./Tasks.module.css";

const Tasks = ({ tasksHeader, selectedList }) => {
  const { tasks } = useContext(TasksContext);

  const taskList = getTaskGroup(tasks)[selectedList];

  return (
    taskList.length > 0 && (
      <div className={styles.Tasks}>
        <h2 className={styles.TasksHeader}>{tasksHeader}</h2>
        {taskList.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    )
  );
};
export default Tasks;
