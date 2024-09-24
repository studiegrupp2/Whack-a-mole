"use client";

import React, { useState, useEffect } from "react";
import HighScoreModal from "./HighScoreModal";
import FetchData from "@/app/api/fetchData";
import ReactionFetch from "@/app/api/reactionData";

interface HighScore {
  name: string;
  score: number;
}

interface ReactionProp {
  name: string;
  reactionTime: number;
}

const HighScoreModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [reactionArray, setReactionArray] = useState<ReactionProp[]>([]);
  const [highScoreArray, setHighScoreArray] = useState<HighScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);

        const [scores, reaction]: [HighScore[], ReactionProp[]] = await Promise.all([
          FetchData(),
          ReactionFetch()
        ]);

        // kollar top10 i listan
        const top10players = scores
          .sort((a, b) => b.score - a.score)
          .slice(0, 10);
        //returnerar top10 in i highscoreModalen
        setHighScoreArray(top10players);

        const top10reactionplayers = reaction
        .sort((a, b) => b.reactionTime - a.reactionTime)
        .slice(0, 10);
        setReactionArray(top10reactionplayers);

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
          reactionArray={reactionArray}
        />
      )}
    </div>
  );
};

export default HighScoreModalButton;
