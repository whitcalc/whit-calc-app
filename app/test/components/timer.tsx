"use client";
import { useState, useEffect } from "react";

function Timer({ expiresAt }: { expiresAt: number }) {
  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = expiresAt - now;

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  }

  const [time, setTime] = useState({
    ...getTimeLeft(),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => {
        if (prevTime.seconds === 0) {
          if (prevTime.minutes === 0) {
            if (prevTime.hours === 0) {
              return prevTime;
            } else {
              return {
                hours: prevTime.hours - 1,
                minutes: 59,
                seconds: 59,
              };
            }
          } else {
            return {
              hours: prevTime.hours,
              minutes: prevTime.minutes - 1,
              seconds: 59,
            };
          }
        } else {
          return {
            hours: prevTime.hours,
            minutes: prevTime.minutes,
            seconds: prevTime.seconds - 1,
          };
        }
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-xl">
            <span>
              {Math.abs(time.hours) < 10 ? `0${time.hours}` : time.hours}
            </span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-xl">
            <span>
              {Math.abs(time.minutes) < 10 ? `0${time.minutes}` : time.minutes}
            </span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-xl">
            <span>
              {Math.abs(time.seconds) < 10 ? `0${time.seconds}` : time.seconds}
            </span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
}

export default Timer;
