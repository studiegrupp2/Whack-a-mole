"use client";
import React from "react";

const handleOnClick = (id: number) => {
  if (activeHoles.includes(id)) {
    console.log("BONK!!");
  }
};

const activeHoles: number[] = [2, 8, 23];

const board = () => {
  // prettier-ignore
  const gameBoard = [
    0,  1,  2,  3,  4,
    5,  6,  7,  8,  9,
    10, 11, 12, 13, 14,
    15, 16, 17, 18, 19,
    20, 21, 22, 23, 24,
  ];

  const rows = 5;
  const columns = 5;

  return (
    <div className="game-board flex flex-col w-[85vw] h-[85vh]">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex h-[20%]">
          {gameBoard
            .slice(rowIndex * columns, (rowIndex + 1) * columns)
            .map((id) => (
              <div
                key={id}
                className="w-[20%] h-[100%] flex items-center justify-center outline outline-1 outline-white cursor-default"
                onClick={() => handleOnClick(id)}
              >
                {id}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default board;
