<<<<<<< HEAD
import React from "react";
import Board from "../components/board";
=======
"use client";
import StartButton from "@/components/Button";
import CountdownModal from "@/components/Countdown";
import HighScoreModal from "@/components/HighScoreModal";

// import Input from "@/components/Input";

import Timer from "@/components/Timer";

import React, { useEffect, useState } from "react";

const Game = () => {
  const [isGameOngoing, setIsGameOnGoing] = useState<boolean>(false);

  // const [currentPoints, setCurrentPoints] = useState(0);

  const [showCountdown, setShowCountdown] = useState<boolean>(false);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  //funktion för att öka poängen, kan användas i spellogiken när en mullvad träffas.
  // const addPoint = () => {
  //   setCurrentPoints(currentPoints +1)
  // }

  const handleNewGame = () => {
    if (!isGameOngoing) {
      setShowCountdown(true); // Show the countdown modal before starting the game
    }
  };
  const handleCountdownFinish = () => {
    setShowCountdown(false);
    setIsGameOnGoing(true);
    setGameFinished(false);
    console.log("New Game Started");
  };

  const handleGameTimerFinish = () => {
    setIsGameOnGoing(false);
    setGameFinished(true);
  };

  useEffect(() => {
    if (gameFinished) {
      setIsModalOpen(true);

      const closeModalTimer = setTimeout(() => {
        setIsModalOpen(false);
      }, 10000);
      return () => clearTimeout(closeModalTimer);
    }
  }, [gameFinished]);
>>>>>>> origin/main

  return (
    <div>
<<<<<<< HEAD
      <Board />
    </div>
  );
};

export default page;
=======
      <StartButton
        btnText="Start a New Game"
        onClick={handleNewGame}
        disabled={isGameOngoing}
      />
      <div className="min-h-screen min-w-screen flex flex-col items-center">
        <div className="p-[20px 0px] flex min-w-full justify-around">
          <div className="game-timer">
            <Timer
              isGameOnGoing={isGameOngoing}
              handleFinish={handleGameTimerFinish}
            />
          </div>
          <div className="game-points">
            <div>{/* {currentPoints} points */}</div>
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
      {showCountdown && (
        <CountdownModal onCountdownFinish={handleCountdownFinish} />
      )}

      {isModalOpen && (
        <HighScoreModal closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Game;
>>>>>>> origin/main
