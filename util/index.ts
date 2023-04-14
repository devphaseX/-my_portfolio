interface CurrentDate {
  year: number;
  month: number;
  day: number;
  date: number;
}

export function getCurrentDate() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDay(),
    date: now.getDate(),
  };
}
