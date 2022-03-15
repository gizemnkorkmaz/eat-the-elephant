import { useContext, useState } from "react";
import { TasksContext } from "../../App";
import { nanoid } from "nanoid";

import styles from "./TaskInput.module.css";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const TaskInput = () => {
  const [task, setTask] = useState({ name: "" });
  const [tasks, setTasks] = useContext(TasksContext);

  const addTask = (task) => {
    if (task.name.length) {
      setTasks([...tasks, { id: nanoid(), name: task.name, isDone: false }]);
      setTask({ name: "" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(task);
    }
  };

  return (
    <div className={styles.InputArea}>
      <div>
        <input
          type="text"
          className={styles.TaskInput}
          placeholder="Enter your task"
          value={task.name}
          onChange={(e) => setTask({ name: e.target.value })}
          onKeyDown={handleKeyDown}
        />
        <Icon icon="calendar" size={20} />
      </div>
      <Button onClick={() => addTask(task)}>Add Task</Button>
    </div>
  );
};
export default TaskInput;
