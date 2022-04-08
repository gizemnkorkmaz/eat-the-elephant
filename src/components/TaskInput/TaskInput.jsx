import { useContext, useRef, useState } from "react";
import { TasksContext } from "../../context/tasksContext";
import { nanoid } from "nanoid";

import styles from "./TaskInput.module.css";

import Datepicker from "../DatePicker/DatePicker";
import Icon from "../Icon/Icon";

const TaskInput = () => {
  const [task, setTask] = useState({ name: "" });
  const { tasks, setTasks } = useContext(TasksContext);
  const inputRef = useRef();

  const addTask = () => {
    if (task.name.trim().length) {
      setTasks([
        ...tasks,
        {
          id: nanoid(),
          name: task.name,
          date: task.date,
          isDone: false,
          isImportant: false,
        },
      ]);
      setTask({ name: "" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const selectDate = (date, e) => {
    e.preventDefault();
    setTask({ ...task, date: date.toString() });
    inputRef.current.focus();
  };

  return (
    <>
      <div className={styles.InputArea}>
        <input
          type="text"
          className={styles.TaskInput}
          placeholder="Enter your task"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          autoFocus
        />
        <Datepicker onChange={selectDate} task={task} setTask={setTask} />
        <Icon
          icon="plus"
          size={20}
          className={styles.AddButton}
          onClick={addTask}
        />
      </div>
    </>
  );
};
export default TaskInput;
