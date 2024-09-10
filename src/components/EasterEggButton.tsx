"use client";
import React, { useState } from "react";
import MusicManager from "./MusicManager";
import Image from "next/image";
import easteregg from "/Users/isakgunnardo/Studiegrupp2/whack-a-mole/public/eateregg.webp";

const EasterEggButton: React.FC = () => {
  const [isMusicManagerVisible, setIsMusicManagerVisible] =
    useState<boolean>(false);

  const [isButtonHidden, setIsButtonHidden] = useState<boolean>(false);

  const toggleMusicManager = () => {
    setIsMusicManagerVisible((prev) => !prev);
    setIsButtonHidden(true);
  };

  return (
    <>
      <button
        className={`px-4 py-2 font-semibold text-white rounded-full hover:scale-110 transition-all jumping ${
          isButtonHidden ? "hidden" : ""
        }`}
        onClick={toggleMusicManager}
      >
        <Image src={easteregg} alt="Easter Egg" className="w-20 h-20" />
      </button>
      {isMusicManagerVisible && <MusicManager />}
    </>
  );
};

export default EasterEggButton;
