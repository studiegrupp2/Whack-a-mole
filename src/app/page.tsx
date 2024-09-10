"use client"
import Input from "@/components/Input";
import HighScoreModalButton from "@/components/OpenHighScoreModalButton";
import StartPageButton from "@/components/StartPageButton";
import { useState } from "react";

export default function WhackAMole() {

  const [playerName, setPlayerName] = useState<string>("")

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  }; 


  return (
    <div>
      <StartPageButton />
      <Input 
      value={playerName} 
      onChange={handleOnChange}
      />
      <HighScoreModalButton />
    </div>
  );
}
