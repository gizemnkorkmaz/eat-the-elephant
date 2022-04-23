import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isBetween);

const sortTasks = (selectedList, tasks) => {
  const tasksByDate = tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

  if (selectedList === "today") {
    return tasks.filter((task) => task.date && dayjs(task.date).isToday());
  } else if (selectedList === "tomorrow") {
    return tasks.filter((task) => dayjs(task.date).isTomorrow());
  } else if (selectedList === "nextSevenDays") {
    const startWeek = dayjs().add(1, "day");
    const endWeek = dayjs().add(7, "day");

    return tasksByDate.filter((task) =>
      dayjs(task.date).isBetween(startWeek, endWeek)
    );
  } else if (selectedList === "upcoming") {
    return tasksByDate.filter((task) =>
      dayjs(task.date).isAfter(dayjs().add(7, "day"))
    );
  } else if (selectedList === "overdue") {
    return tasksByDate.filter((task) =>
      dayjs(task.date).isBefore(dayjs(), "day")
    );
  } else if (selectedList === "important") {
    return tasksByDate.filter((task) => task.isImportant);
  } else if (selectedList === "noDate") {
    return tasksByDate.filter((task) => !task.date);
  } else {
    return tasks;
  }
};

export default sortTasks;
