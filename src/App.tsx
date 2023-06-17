import {useEffect, useState} from "react";
import Barcode from "react-barcode";
import {calculateCode, Gate} from "./utils/calculateCode.ts";

function increment(magicNumber: number): number {
  return (magicNumber + 1) % 10;
}

function decrement(magicNumber: number): number {
  if (magicNumber === 0) {
    return 9;
  }

  return magicNumber - 1;
}

/**
 * Adds 20 minutes to given date. Also, removes the seconds and milliseconds.
 * @param date
 */
function addSomeBufferTimeTo(date: Date) {
  const newDate = new Date(date);
  newDate.setMinutes(newDate.getMinutes() + 20);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
}

export default function App() {
  const [date, setDate] = useState(new Date());
  const exitDate = addSomeBufferTimeTo(date);
  const [magicNumber, setMagicNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>SALIDA PARKING</p>
      <Barcode value={calculateCode(exitDate, Gate.EXIT, magicNumber)} />
      <p>
        Hora límite salida: {getHour(exitDate)}:{getMinutes(exitDate)}
      </p>
      <p>Número mágico: {magicNumber}</p>
      <div className="buttons">
        <button onClick={() => setMagicNumber(decrement(magicNumber))}>-</button>
        <button onClick={() => setMagicNumber(increment(magicNumber))}>+</button>
      </div>
    </>
  );
}

function getHour(date: Date): string {
  return date.getHours().toString().padStart(2, "0")
}

function getMinutes(date: Date): string {
  return date.getMinutes().toString().padStart(2, "0")
}
