"use client";
import React, { useEffect, useState } from "react";

interface TimerProps {
  isGameOnGoing: boolean;
  handleFinish: () => void;
}
const Timer: React.FC<TimerProps> = ({ isGameOnGoing, handleFinish }) => {
  const [time, setTime] = useState<number>(60);

  useEffect(() => {
    if (!isGameOnGoing) {
      return;
    }
    if (time === 0) {
      handleFinish();
      setTime(60);
      return;
    }
    
    const clock = setTimeout(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    
    return () => clearTimeout(clock);
  }, [time, isGameOnGoing]);

  return <div className="text-4xl font-extrabold">{time}</div>;
};

export default Timer;
