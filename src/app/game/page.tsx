import React from "react";
import styles from "./game-page.module.css";

const page = () => {
  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameTopDiv}>
        <div className="game-timer">
          <div>timer placeholder</div>
        </div>
        <div className="game-points">
          <div>points placeholder</div>
        </div>
        <div className="game-start">
          <div>start button placeholder</div>
        </div>
      </div>
      <div className="game-board">
        <div>game board placeholder</div>
      </div>
    </div>
  );
};

export default page;
