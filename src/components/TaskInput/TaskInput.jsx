import { useContext, useState } from "react";
import { TasksContext } from "../../context/tasksContext";
import { nanoid } from "nanoid";

import styles from "./TaskInput.module.css";

import Button from "../Button/Button";
import Datepicker from "../DatePicker/DatePicker";

const TaskInput = () => {
  const [task, setTask] = useState({ name: "" });
  const { tasks, setTasks } = useContext(TasksContext);

  const addTask = (task) => {
    if (task.name.length) {
      setTasks([
        ...tasks,
        {
          id: nanoid(),
          name: task.name,
          date: task.date,
          isDone: false,
        },
      ]);
      setTask({ name: "" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(task);
    }
  };

  const addDate = (date) => {
    setTask({ ...task, date: date.toString() });
  };

  return (
    <>
      <div className={styles.InputArea}>
        <div>
          <input
            type="text"
            className={styles.TaskInput}
            placeholder="Enter your task"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button onClick={() => addTask(task)}>Add Task</Button>
      </div>
      <Datepicker selected={task.date} onChange={addDate} />
    </>
  );
};
export default TaskInput;
