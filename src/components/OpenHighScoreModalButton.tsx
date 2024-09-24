"use client";

import React, { useState, useEffect } from "react";
import HighScoreModal from "./HighScoreModal";
import FetchData from "@/app/api/fetchData";

interface HighScore {
  name: string;
  score: number;
}

const HighScoreModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [highScoreArray, setHighScoreArray] = useState<HighScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  }, []);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all"
        onClick={openModal}
      >
        HighScore
      </button>
      {isModalOpen && (
        <HighScoreModal
          closeModal={() => setIsModalOpen(false)}
          highScoreArray={highScoreArray}
        />
      )}
    </div>
  );
};

export default HighScoreModalButton;
