import cx from "classnames";

import TaskListMenu from "../TaskListMenu/TaskListMenu";

import styles from "./Sidebar.module.css";

const Sidebar = ({
  isSidebarHidden,
  taskLists,
  selectedList,
  setSelectedList,
}) => (
  <section
    className={cx(styles.Sidebar, {
      [styles.SidebarHidden]: isSidebarHidden,
    })}
  >
    <TaskListMenu
      taskLists={taskLists}
      selectedList={selectedList}
      setSelectedList={setSelectedList}
    />
  </section>
);

export default Sidebar;
