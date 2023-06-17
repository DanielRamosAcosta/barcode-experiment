export enum GateValue {
  ENTRANCE = 1,
  EXIT = 9,
}

export enum Gate {
  ENTRANCE = "ENTRANCE",
  EXIT = "EXIT",
}

const toValue: Record<Gate, GateValue> = {
  [Gate.ENTRANCE]: GateValue.ENTRANCE,
  [Gate.EXIT]: GateValue.EXIT,
}

function getDaysOfTheYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getTimeInSeconds(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return hours * 60 * 60 + minutes * 60 + seconds;
}

export function calculateCode(date: Date, gate: Gate, unknownNumber: number) {
  const constant = "289";
  const gateValue = toValue[gate];
  const dayOfTheYear = getDaysOfTheYear(date);
  const timeInSeconds = getTimeInSeconds(date);

  return `${constant}${gateValue}${dayOfTheYear}${timeInSeconds}${unknownNumber}`;
}
