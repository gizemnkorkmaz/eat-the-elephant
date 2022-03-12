import styles from "./Tasks.module.css";

import Task from "../Task/Task";

const Tasks = ({ tasks, setTasks }) => {
  const toggleIsDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, editTask: !task.editTask } : task
      )
    );
  };

  const handleEdit = (e, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: e.target.value } : task
      )
    );
  };

  return (
    <div className={styles.Tasks}>
      <h1 className={styles.TasksHeader}>Today</h1>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleIsDone={toggleIsDone}
          deleteTask={deleteTask}
          editTask={editTask}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};
export default Tasks;
