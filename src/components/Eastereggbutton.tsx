"use client";
import React, { useState } from "react";
import Image from "next/image";
import MusicManager from "./MusicManager";

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
        className={`px-4 py-2 font-semibold text-white rounded-full hover:scale-110 transition-all jumping  ${
          isButtonHidden ? "hidden" : ""
        }`}
        onClick={toggleMusicManager}
      >
        <Image src="/easteregg.webp" alt="Easter Egg" width={50} height={50} />
      </button>
      {isMusicManagerVisible && <MusicManager/>}
    </>
  );
};

export default EasterEggButton;
