export default (dateTimeStr: string, withClock: boolean = false): string => {
  const date = new Date(dateTimeStr);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  if (withClock) return `${day}.${month}.${year} ${hours}:${minutes}`;
  else return `${day}.${month}.${year}`;
};
