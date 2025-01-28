import React from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Alphabet({ alphabet }: any) {
    return (
        <div className={styles.alphabet}>
            {alphabet?.map((letter: string) => (
                <span>{letter}</span>
            ))}
        </div>
    );
}

export default Alphabet;
