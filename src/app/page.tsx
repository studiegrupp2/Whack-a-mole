"use client";

import StartForm from "@/components/StartForm";

// import { useState } from "react";

export default function WhackAMole() {
  // const [playerName, setPlayerName] = useState<string>("");

  // const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPlayerName(event.target.value);
  // };

  return (
    <div className="flex flex-col h-dvh items-center justify-center bg-cover bg-center"
      style={{
      backgroundImage: "url('/start-bg.png')",
    }}>
      <StartForm/>
    </div>
  );
}
