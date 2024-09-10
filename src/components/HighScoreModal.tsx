import React from "react";

interface Props {
  closeModal: () => void;
}
const HighScoreModal: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="flex  text-center flex-col bg-white p-6 rounded-lg shadow-lg w-1/2 h-1/2">
        <div className="flex justify-end">
          <button
            className="mt-4 px-4 w-10 text-end py-2 bg-red-500 text-white rounded"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div className="flex flex-col gap-10 px-36">
          <div className="">
            <h2 className="text-2xl font-bold mb-4">High Scores</h2>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold">Name</h2>
                <ul>
                  <li>Isak</li>
                  <li>Jon</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold">Score</h2>
                <ul>
                  <li>48</li>
                  <li>54</li>
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
  );
};

export default HighScoreModal;
