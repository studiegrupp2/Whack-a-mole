"use client";
import StartButton from "@/components/Button";
import CountdownModal from "@/components/Countdown";
import HighScoreModal from "@/components/HighScoreModal";
import Board from "@/components/Board";

// import Input from "@/components/Input";

import Timer from "@/components/Timer";

import React, { useEffect, useState, useCallback } from "react";

const Game = () => {
  const [isGameOngoing, setIsGameOnGoing] = useState<boolean>(false);

  const [currentPoints, setCurrentPoints] = useState<number>(0);

  const [showCountdown, setShowCountdown] = useState<boolean>(false);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addPoints = () => {
    // skicka med tile-typen och tile-index
    // if type === mole then +1 poäng och kör en timeout som sätter board[index] till "hit" och sedan null efter x millisekunder
    setCurrentPoints(currentPoints + 1);
    setMoleAmountState((prev) => prev - 1);
    console.log("points: " + currentPoints);
  };

  //spellogik:

  type Board = (null | "mole")[];
  const [board, setBoard] = useState<Board>(new Array(25).fill(null));
  const [moleAmountState, setMoleAmountState] = useState<number>(0);

  const randomMoles = (): number => Math.floor(Math.random() * 3) + 1;

  const placeMoles = useCallback(
    (board: (null | "mole")[], spawnAmount?: number): (null | "mole")[] => {
      let moleCount = randomMoles();
      if (spawnAmount) {
        moleCount = spawnAmount;
      }
      const newBoard = [...board];

      for (let i = 0; i < moleCount; i++) {
        let randomIndex: number;

        do {
          randomIndex = Math.floor(Math.random() * newBoard.length);
        } while (newBoard[randomIndex] === "mole");

        newBoard[randomIndex] = "mole";
        //console.log(`Mole placed at index ${randomIndex}`, newBoard);

        const moleVisibleTime = Math.random() * 3000 + 1000;
        setMoleAmountState(newBoard.filter((tile) => tile === "mole").length);

        setTimeout(() => {
          setBoard((prevBoard) => {
            const updatedBoard = [...prevBoard];
            updatedBoard[randomIndex] = null;
            setMoleAmountState((prev) => prev - 1);
            //console.log(`Mole removed at index ${randomIndex}`, updatedBoard);
            return updatedBoard;
          });
        }, moleVisibleTime);
      }
      //console.log(newBoard);

      return newBoard;
      // setBoard(newBoard);
    },
    []
  );

  //Denna placerar ut mullvadarna på olika index i arrayen Board så länge spelet är igång.
  // useEffect(() => {
  //   if (!isGameOngoing) {
  //     return;
  //   }
  //   // if moleAmountState === 0 then placeMoles,
  //   // if moleAmountState < 3 then kanske generera nya moles
  //   // if (moleAmountState < 3) { if (rng === 1) {placeMoles(1)} }
  //   // setMoleAmountState() ska göras i placeMoles
  //   // setMoleAmountState(board.filter((tile) => tile === "mole").length);
  //   setMoleAmountState(board.filter((tile) => tile === "mole").length);
  //   console.log(moleAmountState);
  //   const interval = setInterval(() => {
  //     console.log(board.filter((tile) => tile === "mole").length);
  //     console.log(moleAmountState), placeMoles(board);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [isGameOngoing, placeMoles, moleAmountState]);
  // Run the game loop
  useEffect(() => {
    if (!isGameOngoing) return;

    // const interval = setInterval(() => {
    console.log("mole amount" + moleAmountState);
    // Add new moles if there are less than 3 active moles
    if (isGameOngoing && moleAmountState === 0) {
      setBoard((prevBoard) => placeMoles(prevBoard));
    } else if (isGameOngoing && moleAmountState < 3) {
      //add one mole
      setBoard((prevBoard) => placeMoles(prevBoard, 1));
    }
    // }, 4000);

    // return () => clearInterval(interval);
  }, [isGameOngoing, moleAmountState, placeMoles]);

  // // Run placeMoles(board) if no active moles
  // useEffect(() => {
  //   if (isGameOngoing && moleAmountState === 0) {
  //     setBoard((prevBoard) => placeMoles(prevBoard));
  //   }
  // }, [isGameOngoing, moleAmountState, placeMoles]);

  //hanterar countdown
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

  useEffect(() => {
    if (gameFinished) {
      setIsModalOpen(true);

      const closeModalTimer = setTimeout(() => {
        setIsModalOpen(false);
      }, 10000);
      return () => clearTimeout(closeModalTimer);
    }
  }, [gameFinished]);

  //hanterar speltimern
  const handleGameTimerFinish = () => {
    setIsGameOnGoing(false);
    setGameFinished(true);
  };

  return (
    <div>
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
            <StartButton
              btnText="Start a New Game"
              onClick={handleNewGame}
              disabled={isGameOngoing}
            />
          </div>
        </div>
        <div className="game-board">
          <div>
            <Board moleHit={addPoints} gameBoard={board} />
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
