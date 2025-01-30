import React from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Alphabet({
    alphabet,
    isWin,
    isLose,
    selectedLetter,
    setSelectedLetter,
    setWrongAnswers,
    newWord,
}: any) {
    const clickLetter = (letter: string) => {
        if (isWin || isLose) return;
        if (selectedLetter.find((l: string) => l === letter)) {
            return;
        }

        setSelectedLetter((prev: any) => [...prev, letter.toLowerCase()]);

        if (!newWord?.includes(letter)) {
            setWrongAnswers((prev: number) => prev + 1);
        }
    };

    return (
        <div className={styles.alphabet}>
            {alphabet?.map((letter: string, index: number) => (
                <span
                    key={`${letter}${index}`}
                    onClick={() => clickLetter(letter.toLowerCase())}
                    style={
                        selectedLetter?.find(
                            (l: string) => l === letter.toLowerCase()
                        )
                            ? {
                                  textDecoration: "#bf1c1c line-through",
                                  pointerEvents: "none",
                              }
                            : isLose || isWin
                            ? { pointerEvents: "none" }
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
