import styles from "./Tasks.module.css";

import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";
import sortByDate from "../../utils/sortByDate";

import Task from "../Task/Task";

const Tasks = ({ selectedList }) => {
  const { tasks } = useContext(TasksContext);
  const selectedTaskList = sortByDate(selectedList, tasks);

  return (
    <div className={styles.Tasks}>
      <h1 className={styles.TasksHeader}>{selectedList}</h1>
      {selectedTaskList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
export default Tasks;
