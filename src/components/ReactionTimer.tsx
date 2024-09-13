"use client"
import React, { FC, useEffect, useState } from 'react'

interface ReactionProps {
  }

export const ReactionTimer: React.FC<ReactionProps> = () => { 
  const [seconds, setSeconds] = useState(0);
  const [hit, setHit] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true)
  }

  const onHit = () => {
    setHit([...hit, seconds]);
    setSeconds(0);
    setIsRunning(false)
  };
  
  useEffect(() => {
    if (isRunning) {
    setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        
      }, 10);
    } else {
      clearInterval(0);
      
    }
  }, [isRunning]); //bytas till mole funktion ist

  return (
    <div>
      <h1>{seconds}</h1>
      <button className="w-10 h-10 bg-black text-white " onClick={handleStart}>start </button>
      <button onClick={onHit}> finish</button>
      <div>
        {hit.map((h,i) => (
            <li key={i}>{h} milliseconds</li>
        ))}
      </div>
      
    </div>
  )
}




