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
      <div className="flex gap-10 text-transparent bg-clip-text bg-gradient-to-b from-carouselTextLight to-carouselTextDark">
        <div className="flex flex-col gap-6 text-center">
          <span>{formatTime(days)}</span>
          <p className="uppercase text-xl">
          days
          </p>
        </div>
        <div className="flex flex-col gap-6 text-center">
          <span>{formatTime(hours)}</span>
          <p className="uppercase text-xl">
          hours
          </p>
        </div>
        <div className="flex flex-col gap-6 text-center">
          <span>{formatTime(minutes)}</span>
          <p className="uppercase text-xl">
          minutes
          </p>
        </div>
        <div className="flex flex-col gap-6 text-center">
          <span>{formatTime(seconds)}</span>
          <p className="uppercase text-xl">
          seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
