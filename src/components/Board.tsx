"use client";
import { MoleState } from "@/app/game/page";
import React from "react";

interface BoardProps {
  moleHit: (holeId: number, type: string | null) => void;
  gameBoard: MoleState[];
}

const Board: React.FC<BoardProps> = ({ moleHit, gameBoard }) => {
  return (
    <div className="game-board flex flex-col justify-center w-[80vw] h-[90vh] lg:w-[60vw]  ">
      {Array.from({ length: 5 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex h-[30%] gap-2">
          {gameBoard
            .slice(rowIndex * 5, (rowIndex + 1) * 5)
            .map((tile, colIndex) => {
              const holeId = rowIndex * 5 + colIndex;
              const backgroundImage =
                tile.type === "mole"
                  ? "url(/mullvad4.png)"
                  : tile.type === "hit"
                  ? "url(/mullvad4-hit.png)"
                  : "url(/hole-rezised.png)";
              const backgroundSize = "contain";

              return (
                <div
                  key={holeId}
                  className="w-[80%] h-[100%] flex items-center justify-center m-2"
                  style={{
                    backgroundImage,
                    backgroundSize,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  onClick={() => moleHit(holeId, tile.type)}
                ></div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default Board;
