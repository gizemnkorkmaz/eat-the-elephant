import { useState } from "react";
import { nanoid } from "nanoid";

import styles from "./TaskInput.module.css";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const TaskInput = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({ name: "" });

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
      <div>
        <Button onClick={() => addTask(task)}>Add Task</Button>
      </div>
    </div>
  );
};
export default TaskInput;
