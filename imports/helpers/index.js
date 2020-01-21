export const getTokenizedTime = (date) => {
  const rawTime = new Date(date).toLocaleTimeString([], {timeStyle: 'short'});
  const [fullTime, timeWithoutMeridiem, meridiem] = rawTime.match(/^(\d+:\d+) (\w{2})$/);

  return {
    fullTime,
    time: timeWithoutMeridiem,
    meridiem: meridiem.toLowerCase()
  }
}

export const getDate = (date) => {
  return new Date(date).toLocaleDateString([], {year: 'numeric', month: '2-digit', day: '2-digit'});
}

export const isTodayDate = (date) => {
  return new Date(date).toLocaleDateString() === new Date().toLocaleDateString();
}

export const getHumanDate = (date) => {
  const currentDateInMs = new Date(date).setHours(0, 0, 0, 0);
  const todayDateInMs = new Date().setHours(0, 0, 0, 0);

  if (currentDateInMs === todayDateInMs) {
    return 'today';
  } else if (currentDateInMs === (todayDateInMs - 86400000)) {
    return 'yesterday';
  } else {
    return getDate(currentDateInMs);
  }
}