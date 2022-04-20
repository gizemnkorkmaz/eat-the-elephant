import { useContext } from "react";

import Task from "../Task/Task";
import { TasksContext } from "../../context/tasksContext";
import sortTasks from "../../utils/sortTasks";

import styles from "./Tasks.module.css";

const Tasks = ({ selectedList }) => {
  const { tasks } = useContext(TasksContext);
  const selectedTaskList = sortTasks(selectedList, tasks);
  const tasksHeader =
    selectedList === "nextSevenDays" ? "Next 7 Days" : selectedList;

  return (
    selectedTaskList.length > 0 && (
      <div className={styles.Tasks}>
        <h2 className={styles.TasksHeader}>{tasksHeader}</h2>
        {selectedTaskList.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    )
  );
};
export default Tasks;
