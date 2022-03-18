import { useContext, useState } from "react";
import { TasksContext } from "../../context/tasksContext";
import { nanoid } from "nanoid";

import styles from "./TaskInput.module.css";

import Button from "../Button/Button";

const TaskInput = () => {
  const [task, setTask] = useState({ name: "" });
  const { tasks, setTasks } = useContext(TasksContext);
  const { taskDate, setTaskDate } = useContext(TasksContext);

  const addTask = (task) => {
    if (task.name.length) {
      setTasks([
        ...tasks,
        {
          id: nanoid(),
          name: task.name,
          date: taskDate,
          isDone: false,
        },
      ]);
      setTask({ name: "" });
      setTaskDate(new Date());
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
      </div>
      <Button onClick={() => addTask(task)}>Add Task</Button>
    </div>
  );
};
export default TaskInput;
