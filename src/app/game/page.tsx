"use client";
import StartButton from "@/components/Button";
import CountdownModal from "@/components/Countdown";
import React, { useState } from "react";

const Game = () => {
  const [isGameOngoing, setIsGameOnGoing] = useState<boolean>(false);

  const [currentPoints, setCurrentPoints] = useState(0);
        
  const [showCountdown, setShowCountdown] = useState<boolean>(false);




  //funktion för att öka poängen, kan användas i spellogiken när en mullvad träffas.
  const addPoint = () => {
    setCurrentPoints(currentPoints +1)
  }
      
  const handleNewGame = () => {
    if (!isGameOngoing) {
      setShowCountdown(true); // Show the countdown modal before starting the game
    }
  };
  const handleCountdownFinish = () => {
    setShowCountdown(false);
    setIsGameOnGoing(true);
    console.log("New Game Started");
  };

  return (
    <div>
      <StartButton
        btnText="Start a New Game"
        onClick={handleNewGame}
        disabled={isGameOngoing}
      />

      <div className="min-h-screen min-w-screen flex flex-col items-center">
        <div className="p-[20px 0px] flex min-w-full justify-around">
          <div className="game-timer">
            <div>timer placeholder</div>
          </div>
          <div className="game-points">
            <div>
              {currentPoints} points
            </div>
          </div>
          <div className="game-start">
            <div>start button placeholder</div>
          </div>
        </div>
        <div className="game-board">
          <div>game board placeholder</div>
        </div>
      </div>
            {/* Show countdown modal if countdown is in progress */}
            {showCountdown && <CountdownModal onCountdownFinish={handleCountdownFinish} />}
    </div>
  );
};

export default Game;
