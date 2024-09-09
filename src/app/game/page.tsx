"use client";
import StartButton from "@/components/Button";
import React, { useState } from "react";

const Game = () => {
  const [isGameOngoing, setIsGameOnGoing] = useState<boolean>(false);

  const handleNewGame = () => {
    if (isGameOngoing) {
      setIsGameOnGoing(true);
      console.log("New Game Started");
    }
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
            <div>points placeholder</div>
          </div>
          <div className="game-start">
            <div>start button placeholder</div>
          </div>
        </div>
        <div className="game-board">
          <div>game board placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
