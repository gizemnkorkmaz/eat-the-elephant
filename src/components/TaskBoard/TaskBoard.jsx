import Tasks from "../Tasks/Tasks";
import EmptyTaskList from "../EmptyTaskList/EmptyTaskList";
import SearchedTasks from "../SearchedTasks/SearchedTasks";

const TaskBoard = ({ taskLists, selectedList, searchedTask }) => {
  const taskListsToShow = Object.values(taskLists).filter(
    (list) => list !== "inbox" && list !== "important" && list !== "search"
  );

  if (selectedList === "inbox") {
    return (
      <>
        <EmptyTaskList />
        {taskListsToShow.map((listItem) => (
          <Tasks key={listItem} selectedList={listItem} />
        ))}
      </>
    );
  } else if (selectedList === "search") {
    return <SearchedTasks searchedTask={searchedTask} />;
  } else {
    return <Tasks selectedList={selectedList} />;
  }
};
export default TaskBoard;
