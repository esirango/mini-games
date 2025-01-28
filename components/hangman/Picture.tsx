import React from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Picture({ wrongAnswers, isWin }: any) {
    return (
        <div className={styles.picture}>
            <img
                src={`/assets/img/hangman/${
                    isWin ? "winner" : `hangman${wrongAnswers}`
                }.jpg`}
            />
        </div>
    );
}

export default Picture;
