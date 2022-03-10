import { useState } from "react";
import { nanoid } from "nanoid";

import styles from "./TaskInput.module.css";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const TaskInput = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({ name: "" });

  const addTask = (task) => {
    if (task) {
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
      <input
        type="text"
        className={styles.TaskInput}
        placeholder="Enter your task"
        value={task.name}
        onChange={(e) => setTask({ name: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={() => addTask(task)}>
        <Icon icon="plus" size={20} />
      </Button>
    </div>
  );
};
export default TaskInput;
