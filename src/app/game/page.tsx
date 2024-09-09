"use client"
import StartButton from "@/components/StartButton";
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
    <div >
      <StartButton
        btnText="Start a New Game"
        onClick={handleNewGame}
        disabled={isGameOngoing}
      />
    </div>
  );
};

export default Game;
