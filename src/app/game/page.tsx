"use client";
import StartButton from "@/components/Button";
import CountdownModal from "@/components/Countdown";
import HighScoreModal from "@/components/HighScoreModal";
import Board from "@/components/Board";
import Timer from "@/components/Timer";
import React, { useCallback, useEffect, useState } from "react";
import PostData from "../api/postData";
import FetchData from "../api/fetchData";
// import { useRouter } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";
import { useRouter } from "next/navigation";

interface HighScore {
  name: string;
  score: number;
}

const Game = () => {
  const [isGameOngoing, setIsGameOnGoing] = useState<boolean>(false);
  const [currentPoints, setCurrentPoints] = useState<number>(0);
  const [showCountdown, setShowCountdown] = useState<boolean>(false);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [highScoreArray, setHighScoreArray] = useState<HighScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [userName, setUserName] = useState<string>("Anonym");

  // kolla så att användarnamnet ej är null och hämta användarnamnet
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }

    if (!storedName) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const scores = await FetchData();

        // kollar top10 i listan
        const top10players = scores
          .sort((a, b) => b.score - a.score)
          .slice(0, 10);
        //returnerar top10 in i highscoreModalen
        setHighScoreArray(top10players);

        setError(null);
        console.log(top10players, isLoading, error);
      } catch (err) {
        setError("Failed to fetch high scores");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [gameFinished]);

  //funktion för att få poäng samt uppdatera board[holeid] från mole till träffad mole
  const moleHit = useCallback((holeId: number, type: string | null) => {
    if (type !== "mole") return;
    //poäng
    setCurrentPoints((prevPoints) => {
      const updatedPoints = prevPoints + 1;
      console.log(updatedPoints);
      return updatedPoints;
    });
    // rita om brädan
    setBoard((prevBoard) => {
      const newBoard: (null | string)[] = [...prevBoard];
      newBoard[holeId] = "hit";
      return newBoard;
    });
  }, []);

  //spellogik:
  type Board = (null | string)[];
  const [board, setBoard] = useState<Board>(new Array(25).fill(null));

  const randomMoles = (): number => Math.floor(Math.random() * 3) + 1;

  function placeMoles(amountToAdd?: number) {
    setBoard((prevBoard) => {
      let moleCount: number;
      if (amountToAdd) {
        moleCount = amountToAdd;
      } else {
        moleCount = randomMoles();
      }
      const newBoard: (null | string)[] = [...prevBoard];
      const availableIndices: number[] = newBoard
        .map((_, index) => index)
        .filter((i) => newBoard[i] === null);

      for (let i = 0; i < moleCount; i++) {
        if (availableIndices.length === 0) break; // No more places to put moles

        const randomIndex: number =
          availableIndices[Math.floor(Math.random() * availableIndices.length)];
        newBoard[randomIndex] = "mole";

        const moleVisibleTime = Math.random() * 3000 + 1000;
        setTimeout(() => {
          setBoard((board) => {
            const updatedBoard = [...board];
            updatedBoard[randomIndex] = null;
            return updatedBoard;
          });
        }, moleVisibleTime);
      }

      return newBoard;
    });
  }

  //Denna placerar ut mullvadarna på olika index i arrayen Board så länge spelet är igång.
  useEffect(() => {
    if (!isGameOngoing) {
      return;
    }
    const currentMoleAmount = board.filter(
      (tile) => tile === "mole" || tile === "hit"
    ).length;

    if (currentMoleAmount === 0) {
      //Skapa 1 till 3 nya mullvadar
      placeMoles(randomMoles());
    } else if (currentMoleAmount < 3) {
      //Skapa som mest 3 moles - currentMoleAmount
      const maxNewMoles = 3 - currentMoleAmount;
      if (Math.random() > 0.4) {
        placeMoles(Math.min(randomMoles(), maxNewMoles));
      }
    }
  }, [isGameOngoing, board]);

  //hanterar countdown
  const handleNewGame = () => {
    if (!isGameOngoing) {
      setShowCountdown(true); // Show the countdown modal before starting the game
      setCurrentPoints(0);
      setGameFinished(false);
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
  }, [gameFinished, userName, currentPoints]);

  //hanterar speltimern
  const handleGameTimerFinish = () => {
    setIsGameOnGoing(false);
    setGameFinished(true);
    console.log(userName, currentPoints);
    PostData(userName, currentPoints);
  };

  return (
    <div className="">
      <div
        className="min-h-screen min-w-screen flex flex-col items-center bg-cover bg-center "
        style={{
          backgroundImage: "url('/game-bg.jpg')",
        }}
      >
        <div className="p-[20px 0px] py-2 flex min-w-full justify-around">
          <div className="game-timer">
            <Timer
              isGameOnGoing={isGameOngoing}
              handleFinish={handleGameTimerFinish}
            />
          </div>
          <div className="game-points text-4xl font-extrabold">
            <div className="">{currentPoints} points</div>
          </div>
          <p>{userName}</p>
          <div className="game-start">
            <StartButton
              btnText="Start a New Game"
              onClick={handleNewGame}
              disabled={isGameOngoing}
            />
          </div>
        </div>
        <div className={`${isGameOngoing ? "cursor-none" : ""}`}>
          {isGameOngoing && <CustomCursor />}

          <div>
            <Board moleHit={moleHit} gameBoard={board} />
          </div>
        </div>
      </div>
      {/* Show countdown modal if countdown is in progress */}
      {showCountdown && (
        <CountdownModal onCountdownFinish={handleCountdownFinish} />
      )}

      {isModalOpen && (
        <HighScoreModal
          closeModal={() => setIsModalOpen(false)}
          highScoreArray={highScoreArray}
        />
      )}
    </div>
  );
};

export default Game;
