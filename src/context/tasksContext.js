import { useState, createContext } from "react";
import Lookie from "lookie";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, _setTasks] = useState(Lookie.get("tasks") || []);
  const [editTaskId, setEditTaskId] = useState(null);
  const [taskDate, setTaskDate] = useState(new Date());

  const setTasks = (tasks) => {
    _setTasks(tasks);
    Lookie.set("tasks", tasks);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        editTaskId,
        setEditTaskId,
        taskDate,
        setTaskDate,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
