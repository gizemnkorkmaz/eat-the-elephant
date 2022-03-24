import Tasks from "../Tasks/Tasks";

const TaskList = ({ taskLists, selectedList }) => {
  const allTasks = Object.values(taskLists).filter((list) => list !== "Inbox");

  return selectedList === "Inbox" ? (
    allTasks.map((listItem) => <Tasks key={listItem} selectedList={listItem} />)
  ) : (
    <Tasks selectedList={selectedList} />
  );
};
export default TaskList;
