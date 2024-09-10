"use client";
import React from "react";

const pointsPlaceholder: number = 5;
// Ta bort placeholdern när Mole-componenten är klar, tanken är att man får poängen från Mole beroende på hur länge den varit ute

interface BoardProps {
  moleHit: (points: number) => void;
  gameBoard: (null | "mole")[];
}

const Board: React.FC<BoardProps> = ({ moleHit, gameBoard }) => {
  const moleHitAddPoints = () => {
    return moleHit(pointsPlaceholder);
  };

  const handleOnClick = (type: string | null) => {
    if (type === "mole") {
      moleHitAddPoints();
    }
  };

  return (
    <div className="game-board flex flex-col w-[80vw] h-[90vh]">
      {Array.from({ length: 5 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex h-[20%] gap-2">
          {gameBoard
            .slice(rowIndex * 5, (rowIndex + 1) * 5)
            .map((type, holeId) => {
              const backgroundImage =
                type === "mole" ? "url(/mullvad4.png)" : "url(/hole.png)";
              const backgroundSize = type === "mole" ? "cover" : "contain";

              return (
                <div
                  key={holeId}
                  className="w-[20%] h-[100%] flex items-center justify-center cursor-default"
                  style={{
                    backgroundImage,
                    backgroundSize,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  onClick={() => handleOnClick(type)}
                ></div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default Board;
