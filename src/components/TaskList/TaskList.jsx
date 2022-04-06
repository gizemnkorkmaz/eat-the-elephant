import Tasks from "../Tasks/Tasks";
import EmptyTaskList from "../EmptyTaskList/EmptyTaskList";

const TaskList = ({ taskLists, selectedList }) => {
  const allTaskLists = Object.values(taskLists).filter(
    (list) => list !== "Inbox" && list !== "Important"
  );

  return selectedList === "Inbox" ? (
    <>
      <EmptyTaskList />
      {allTaskLists.map((listItem) => (
        <Tasks key={listItem} selectedList={listItem} />
      ))}
    </>
  ) : (
    <Tasks selectedList={selectedList} />
  );
};
export default TaskList;
