"use client";

import React, { useState } from "react";
import HighScoreModal from "./HighScoreModal";

const HighScoreModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
    // setOpenHighScoreModal(!openHighScoreModal)∏
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all"
        onClick={openModal}
      >
        HighScore
      </button>
      {isModalOpen && <HighScoreModal closeModal={closeModal} />}
    </div>
  );
};

export default HighScoreModalButton;