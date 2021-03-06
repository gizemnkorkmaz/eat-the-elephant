import { useContext, useRef, useState } from "react";

import Datepicker from "../DatePicker/DatePicker";
import Button from "../Button/Button";
import { TasksContext } from "../../context/tasksContext";

import styles from "./EditTask.module.css";

const EditTask = ({ task }) => {
  const [editedTask, setEditedTask] = useState(task);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { tasks, setTasks, editTaskId, setEditTaskId } =
    useContext(TasksContext);
  const inputRef = useRef(null);

  const handleEdit = (e) => {
    setEditedTask({ ...task, name: e.target.value });
  };

  const saveEdit = () => {
    if (editedTask.name.trim().length) {
      const newTasks = tasks.map((task) =>
        task.id === editTaskId ? editedTask : task
      );

      setTasks(newTasks);
      setEditTaskId(null);
    }
  };

  const cancelEdit = () => {
    setEditTaskId(null);
  };

  const changeDate = (date, e) => {
    e.preventDefault();
    setEditedTask({ ...editedTask, date: date.toString() });

    setIsCalendarOpen(false);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveEdit();
    }
  };

  return (
    <div className={styles.EditArea}>
      <div className={styles.EditTask}>
        <input
          type="text"
          value={editedTask.name}
          className={styles.Input}
          onChange={handleEdit}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          autoFocus
        />
        <div className={styles.Datepicker}>
          <Datepicker
            task={editedTask}
            setTask={setEditedTask}
            onChange={changeDate}
            inputRef={inputRef}
            isOpen={isCalendarOpen}
            setIsOpen={setIsCalendarOpen}
          />
        </div>
      </div>
      <div className={styles.Buttons}>
        <Button onClick={saveEdit}>Save</Button>
        <Button onClick={cancelEdit}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditTask;
