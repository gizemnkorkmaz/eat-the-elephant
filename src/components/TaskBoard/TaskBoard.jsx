import Tasks from "../Tasks/Tasks";
import EmptyTaskList from "../EmptyTaskList/EmptyTaskList";
import SearchedTasks from "../SearchedTasks/SearchedTasks";

const TaskBoard = ({ taskLists, selectedList, searchedTask }) => {
  const taskListsToShow = Object.values(taskLists).filter(
    (list) => list !== "inbox" && list !== "important" && list !== "search"
  );
  let currentList;

  if (selectedList === "inbox") {
    currentList = (
      <>
        <EmptyTaskList />
        {taskListsToShow.map((listItem) => (
          <Tasks key={listItem} selectedList={listItem} />
        ))}
      </>
    );
  } else if (selectedList === "search") {
    currentList = <SearchedTasks searchedTask={searchedTask} />;
  } else {
    currentList = <Tasks selectedList={selectedList} />;
  }

  return currentList;
};
export default TaskBoard;
