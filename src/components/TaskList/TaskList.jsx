import Tasks from "../Tasks/Tasks";
import EmptyTaskList from "../EmptyTaskList/EmptyTaskList";
import SearchedTasks from "../SearchedTasks/SearchedTasks";

const TaskList = ({ taskLists, selectedList, searchedTask }) => {
  const taskListsToShow = Object.values(taskLists).filter(
    (list) =>
      list.value !== "inbox" &&
      list.value !== "important" &&
      list.value !== "search"
  );

  const activeList = Object.values(taskLists).find(
    ({ value }) => value === selectedList
  );

  if (selectedList === "inbox") {
    return (
      <>
        <EmptyTaskList />
        {taskListsToShow.map((listItem) => (
          <Tasks
            key={listItem.value}
            selectedList={listItem.value}
            taskLists={taskLists}
            tasksHeader={listItem.label}
          />
        ))}
      </>
    );
  } else if (selectedList === "search") {
    return <SearchedTasks searchedTask={searchedTask} />;
  } else {
    return <Tasks selectedList={selectedList} tasksHeader={activeList.label} />;
  }
};
export default TaskList;
