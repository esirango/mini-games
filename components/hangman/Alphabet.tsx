import React from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Alphabet({ alphabet }: any) {
    return (
        <div className={styles.alphabet}>
            {alphabet?.map((letter: string, index: number) => (
                <span key={`${letter}${index}`}>{letter}</span>
            ))}
        </div>
    );
}

export default Alphabet;
