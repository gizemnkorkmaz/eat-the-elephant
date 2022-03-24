import Tasks from "../Tasks/Tasks";

const TaskList = ({ taskLists, selectedList }) => {
  const allTaskLists = Object.values(taskLists).filter(
    (list) => list !== "Inbox"
  );

  return selectedList === "Inbox" ? (
    allTaskLists.map((listItem) => (
      <Tasks key={listItem} selectedList={listItem} />
    ))
  ) : (
    <Tasks selectedList={selectedList} />
  );
};
export default TaskList;
