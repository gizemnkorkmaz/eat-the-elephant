import { useState, createContext } from "react";
import Lookie from "lookie";

import sortTasks from "../utils/sortTasks";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, _setTasks] = useState(Lookie.get("tasks") || []);
  const [editTaskId, setEditTaskId] = useState(null);

  const setTasks = (tasks) => {
    _setTasks(tasks);
    Lookie.set("tasks", tasks);
  };

  const getTasksGroup = (tasks) => {
    return {
      inbox: sortTasks("inbox", tasks),
      overdue: sortTasks("overdue", tasks),
      today: sortTasks("today", tasks),
      tomorrow: sortTasks("tomorrow", tasks),
      nextSevenDays: sortTasks("nextSevenDays", tasks),
      upcoming: sortTasks("upcoming", tasks),
      noDate: sortTasks("noDate", tasks),
      important: sortTasks("important", tasks),
    };
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        editTaskId,
        setEditTaskId,
        getTasksGroup,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
