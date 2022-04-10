import styles from "./SearchInput.module.css";

const SearchInput = ({ setSelectedList, setSearchedTask }) => {
  const searchTask = ({ target }) => {
    setSelectedList(target.value ? "Search" : "Inbox");
    setSearchedTask(target.value);
  };

  return (
    <input
      type="search"
      name="searchTasks"
      placeholder="search tasks"
      className={styles.SearchInput}
      onChange={searchTask}
    />
  );
};

export default SearchInput;
