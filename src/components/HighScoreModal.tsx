import FetchData from "@/app/api/fetchData";
import React from "react";
import { useEffect } from "react";

interface HighScore {
  name: string;
  score: number;
}

interface Props {
  closeModal: () => void;
  highScoreArray: HighScore[];
}
const HighScoreModal: React.FC<Props> = ({ closeModal, highScoreArray }) => {
  
  useEffect(() => {
    FetchData();
  },[]);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className=" flex  text-center flex-col bg-white  rounded-lg shadow-lg w-1/2 h-1/2 overflow-scroll scrollbar-hide relative">
        <div className="flex  justify-end">
          <button
            className=" px-4 w-10 text-end py-2 bg-red-500 text-white rounded fixed"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div className="flex h-dvh items-center justify-center px-6 ">
          <div className="flex flex-col  gap-10  overflow-scroll scrollbar-hide ">
            <div>
              <h2 className="text-2xl font-bold mb-4">High Scores</h2>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold">Name</h2>
                    <ul>
                    {highScoreArray.map((player) => (
                      <li key={player.name} >{player.name}</li>
                    ))}
                    </ul>
                </div>
                <div>
                  <h2 className="font-bold">Score</h2>
                   <ul>
                      {highScoreArray.map((player) => (
                        <li key={player.score}>{player.score}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Honorable Reward - fastest reaction time
              </h2>
              <div className="flex items-center justify-between">
                <p>Isak</p>
                <p>2.84 sekunder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighScoreModal;
