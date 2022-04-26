import { useContext, useRef, useState } from "react";
import { nanoid } from "nanoid";

import Datepicker from "../DatePicker/DatePicker";
import Icon from "../Icon/Icon";
import { TasksContext } from "../../context/tasksContext";

import styles from "./TaskInput.module.css";

const TaskInput = () => {
  const [task, setTask] = useState({ name: "" });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
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

    setIsCalendarOpen(false);
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
        <Datepicker
          onChange={selectDate}
          task={task}
          setTask={setTask}
          inputRef={inputRef}
          isOpen={isCalendarOpen}
          setIsOpen={setIsCalendarOpen}
        />
        <Icon
          icon="add"
          size={35}
          className={styles.AddButton}
          onClick={addTask}
        />
      </div>
    </>
  );
};
export default TaskInput;
