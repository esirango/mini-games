import React from "react";

import styles from "@/styles/games/rock-paper-scissor/rockPaperScissor.module.css";

function ScoreBoard({ computerScore, userScore }: any) {
    return (
        <div className={styles.scoreBoard}>
            <span>{userScore} :</span>
            <span> {computerScore}</span>
        </div>
    );
}

export default ScoreBoard;
