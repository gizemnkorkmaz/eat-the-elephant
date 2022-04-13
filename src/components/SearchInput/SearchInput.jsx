import styles from "./SearchInput.module.css";

import Icon from "../Icon/Icon";

const SearchInput = ({ setSelectedList, setSearchedTask }) => {
  const searchTask = ({ target }) => {
    setSelectedList(target.value ? "Search" : "Inbox");
    setSearchedTask(target.value);
  };

  return (
    <div className={styles.SearchWrapper}>
      <Icon icon="search" size={19} className={styles.SearchIcon} />
      <input
        type="search"
        name="searchTasks"
        placeholder="search tasks"
        className={styles.SearchInput}
        onChange={searchTask}
      />
    </div>
  );
};

export default SearchInput;
