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
  if (selectedList === "Today") {
    return tasks.filter((task) => dayjs(task.date).isToday());
  } else if (selectedList === "Tomorrow") {
    return tasks.filter((task) => dayjs(task.date).isTomorrow());
  } else if (selectedList === "Next 7 Days") {
    const startWeek = dayjs().add(1, "day");
    const endWeek = dayjs().add(7, "day");

    return tasks.filter((task) =>
      dayjs(task.date).isBetween(startWeek, endWeek)
    );
  } else {
    return tasks.filter((task) =>
      dayjs(task.date).isSameOrAfter(dayjs().add(7, "day"))
    );
  }
};

export default sortByDate;