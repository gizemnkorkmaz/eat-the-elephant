import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);

const sortByDate = (selectedList, tasks) => {
  const today = new Date();
  const nextWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );

  if (selectedList === "Today") {
    return tasks.filter((task) => dayjs(task.date).isToday());
  } else if (selectedList === "Tomorrow") {
    return tasks.filter((task) => dayjs(task.date).isTomorrow());
  } else if (selectedList === "This Week") {
    return tasks.filter((task) => dayjs(task.date).isBetween(today, nextWeek));
  } else {
    return tasks.sort((prevTask, currTask) =>
      dayjs(prevTask.date).isSameOrAfter(dayjs(currTask.date)) ? 1 : -1
    );
  }
};

export default sortByDate;
