import React from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Alphabet({
    alphabet,
    selectedLetter,
    setSelectedLetter,
    wrongAnswers,
    countWrongAnswers,
}: any) {
    const clickLetter = (letter: string) => {
        if (wrongAnswers === countWrongAnswers) return;
        if (selectedLetter.find((l: string) => l === letter)) {
            return;
        }

        setSelectedLetter((prev: any) => [...prev, letter.toLowerCase()]);
    };

    console.log(selectedLetter);

    return (
        <div className={styles.alphabet}>
            {alphabet?.map((letter: string, index: number) => (
                <span
                    key={`${letter}${index}`}
                    onClick={() => clickLetter(letter)}
                    style={
                        selectedLetter?.find(
                            (l: string) => l === letter.toLowerCase()
                        )
                            ? {
                                  textDecoration: "#bf1c1c line-through",
                                  pointerEvents: "none",
                              }
                            : {}
                    }
                >
                    {letter}
                </span>
            ))}
        </div>
    );
}

export default Alphabet;
