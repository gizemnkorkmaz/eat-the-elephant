import styles from "./SearchInput.module.css";

const SearchInput = ({ setSelectedList, setSearchedTask }) => {
  const searchTask = (e) => {
    if (e.target.value.length) {
      setSelectedList("Search");
    } else {
      setSelectedList("Inbox");
    }
    setSearchedTask(e.target.value);
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
