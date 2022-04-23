import cx from "classnames";

import TaskListMenu from "../TaskListMenu/TaskListMenu";

import styles from "./Sidebar.module.css";

const Sidebar = ({
  isSidebarHidden,
  taskLists,
  selectedList,
  setSelectedList,
}) => (
  <aside
    className={cx(styles.Sidebar, {
      [styles.SidebarHidden]: isSidebarHidden,
    })}
  >
    <TaskListMenu
      taskLists={taskLists}
      selectedList={selectedList}
      setSelectedList={setSelectedList}
    />
  </aside>
);

export default Sidebar;
