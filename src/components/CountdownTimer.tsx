import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining());
  }, [targetDate]);

  function calculateTimeRemaining(): number {
    const currentTime = new Date().getTime();
    const difference = targetDate.getTime() - currentTime;
    return Math.max(0, difference);
  }

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>
      <div>
        <span>{formatTime(days)}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span>{formatTime(hours)}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span>{formatTime(minutes)}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span>{formatTime(seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
