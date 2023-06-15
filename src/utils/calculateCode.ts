export enum Gate {
  ENTRANCE = 1,
  EXIT = 9,
}

function getDayOfTheYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / oneDay);
  return days;
}

function getTimeInSeconds(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return hours * 60 * 60 + minutes * 60 + seconds;
}

export function calculateCode(date: Date, gate: Gate, unknownNumber: number) {
  const constant = "289";
  const gateValue = gate.toString();
  const dayOfTheYear = getDayOfTheYear(date);
  const timeInSeconds = getTimeInSeconds(date);

  return `${constant}${gateValue}${dayOfTheYear}${timeInSeconds}${unknownNumber}`;
}
