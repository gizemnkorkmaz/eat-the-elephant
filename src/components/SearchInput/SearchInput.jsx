import Icon from "../Icon/Icon";

import styles from "./SearchInput.module.css";

const SearchInput = ({
  selectedList,
  setSelectedList,
  searchedTask,
  setSearchedTask,
}) => {
  const searchTask = ({ target }) => {
    setSelectedList(target.value ? "search" : "inbox");
    setSearchedTask(target.value);
  };

  if (selectedList !== "search") {
    setSearchedTask("");
  }

  return (
    <div className={styles.SearchWrapper}>
      <Icon icon="search" size={21} className={styles.SearchIcon} />
      <input
        type="search"
        name="searchTasks"
        placeholder="Search"
        value={searchedTask}
        className={styles.SearchInput}
        onChange={searchTask}
      />
    </div>
  );
};

export default SearchInput;
