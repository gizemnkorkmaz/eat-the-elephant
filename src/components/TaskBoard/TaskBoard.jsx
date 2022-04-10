import Tasks from "../Tasks/Tasks";
import EmptyTaskList from "../EmptyTaskList/EmptyTaskList";
import SearchedTasks from "../SearchedTasks/SearchedTasks";

const TaskBoard = ({ taskLists, selectedList }) => {
  const allTaskLists = Object.values(taskLists).filter(
    (list) => list !== "Inbox" && list !== "Important" && list !== "Search"
  );
  let currentList;

  if (selectedList === "Inbox") {
    currentList = (
      <>
        <EmptyTaskList />
        {allTaskLists.map((listItem) => (
          <Tasks key={listItem} selectedList={listItem} />
        ))}
      </>
    );
  } else if (selectedList === "Search") {
    currentList = <SearchedTasks />;
  } else {
    currentList = <Tasks selectedList={selectedList} />;
  }

  return currentList;
};
export default TaskBoard;
