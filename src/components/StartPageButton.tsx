"use client";
import { useRouter } from "next/navigation";
import React from "react";
import StartButton from "./Button";

const StartPageButton = () => {
  const router = useRouter();

  const handlStartGame = () => {
    router.push("/game");
  };
  return <StartButton btnText="Start Game" onClick={handlStartGame} />;
};

export default StartPageButton;
