import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isBetween);

const getTaskGroup = (tasks) => {
  const tasksByDate = [...tasks].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const taskGroup = {
    inbox: [],
    overdue: [],
    today: [],
    tomorrow: [],
    nextSevenDays: [],
    upcoming: [],
    noDate: [],
    important: [],
  };

  tasksByDate.forEach((task) => {
    taskGroup.inbox.push(task);

    if (task.isImportant) {
      taskGroup.important.push(task);
    }

    const today = dayjs();
    const taskDate = dayjs(task.date);

    if (!task.date) {
      taskGroup.noDate.push(task);
    } else if (taskDate.isToday()) {
      taskGroup.today.push(task);
    } else if (taskDate.isTomorrow()) {
      taskGroup.tomorrow.push(task);
    } else if (taskDate.isBetween(today.add(1, "day"), today.add(7, "day"))) {
      taskGroup.nextSevenDays.push(task);
    } else if (taskDate.isBefore(today, "day")) {
      taskGroup.overdue.push(task);
    } else if (taskDate.isAfter(today.add(7, "day"))) {
      taskGroup.upcoming.push(task);
    }
  });

  return taskGroup;
};

export default getTaskGroup;
