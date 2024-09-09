"use client";


const HighScoreModalButton = () => {

    const openModal = () => {
        // setOpenHighScoreModal(!openHighScoreModal)
    }
  return (
    <button
      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all"
      onClick={openModal}
    >
      HighScore
    </button>
  );
};

export default HighScoreModalButton;