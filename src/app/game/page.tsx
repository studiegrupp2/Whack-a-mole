"use client";
import StartButton from "@/components/Button";
import CountdownModal from "@/components/Countdown";
import HighScoreModal from "@/components/HighScoreModal";
import Board from "@/components/Board";

// import Input from "@/components/Input";

import Timer from "@/components/Timer";

import React, { useEffect, useState } from "react";

const Game = () => {
  const [isGameOngoing, setIsGameOnGoing] = useState<boolean>(false);

  const [currentPoints, setCurrentPoints] = useState<number>(0);

  const [showCountdown, setShowCountdown] = useState<boolean>(false);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addPoints = () => {
    setCurrentPoints(currentPoints + 1);
    console.log(currentPoints);
  };

  const boardPlaceHolder = new Array(25).fill(null);
  boardPlaceHolder[1] = "mole";
  // byt ut ovan när mole-slumparen är mergad till main

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
            <Timer
              isGameOnGoing={isGameOngoing}
              handleFinish={handleGameTimerFinish}
            />
          </div>
          <div className="game-points">
            <div>{currentPoints} points</div>
          </div>
          <div className="game-start">
            <div>start button placeholder</div>
          </div>
        </div>
        <div className="game-board">
          <div>
            <Board moleHit={addPoints} gameBoard={boardPlaceHolder} />
          </div>
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
