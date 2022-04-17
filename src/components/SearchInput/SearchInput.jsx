import Icon from "../Icon/Icon";

import styles from "./SearchInput.module.css";

const SearchInput = ({ setSelectedList, setSearchedTask }) => {
  const searchTask = ({ target }) => {
    setSelectedList(target.value ? "Search" : "Inbox");
    setSearchedTask(target.value);
  };

  const activateSearch = ({ target }) => {
    if (target.value) {
      setSelectedList("Search");
    }
  };

  return (
    <div className={styles.SearchWrapper}>
      <Icon icon="search" size={21} className={styles.SearchIcon} />
      <input
        type="search"
        name="searchTasks"
        placeholder="Search"
        className={styles.SearchInput}
        onClick={activateSearch}
        onChange={searchTask}
      />
    </div>
  );
};

export default SearchInput;
