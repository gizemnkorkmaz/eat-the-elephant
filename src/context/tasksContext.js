import { useState, createContext } from "react";
import Lookie from "lookie";

import getTaskGroup from "../utils/getTaskGroup";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, _setTasks] = useState(Lookie.get("tasks") || []);
  const [editTaskId, setEditTaskId] = useState(null);

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
        getTaskGroup,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
