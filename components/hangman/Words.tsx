import React, { useEffect, useState } from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Words({
    words,
    isWin,
    isLose,
    setIsLose,
    wrongAnswers,
    countWrongAnswers,
    setWrongAnswers,
    setSelectedLetter,
    selectedLetter,
    newWord,
    setNewWord,
}: any) {
    const [newObjectWord, setNewObjectWord] = useState<any>({});

    // generate new word
    useEffect(() => {
        const generateNewWord = () => {
            const randomIndex = Math.floor(Math.random() * words.length);
            const objectWord = words[randomIndex];
            const word = objectWord?.word?.split("");
            setNewWord([...word]);
            setNewObjectWord(objectWord);
        };

        generateNewWord();
    }, []);

    // match words
    useEffect(() => {
        if (isLose || typeof newWord === "undefined") return;

        const matchWords = (e: any) => {
            const enterLetter = e.key.toLowerCase();

            if (selectedLetter.includes(enterLetter)) return;

            setSelectedLetter((prev: any) => [...prev, enterLetter]);
            if (!newWord?.includes(enterLetter.toLowerCase())) {
                setWrongAnswers((prev: number) => prev + 1);
            }
        };

        window.addEventListener("keydown", matchWords);
        return () => window.removeEventListener("keydown", matchWords);
    }, [selectedLetter, newWord, isLose]);

    useEffect(() => {
        if (wrongAnswers === countWrongAnswers) {
            setIsLose(true);
        }
    }, [wrongAnswers]);

    console.log(selectedLetter);

    return (
        <>
            {newObjectWord ? (
                <>
                    <div className={styles.words}>
                        {isWin ? (
                            <p className={styles.reset}>Reset Game</p>
                        ) : (
                            <div className={styles.hint}>
                                <span>Hint: </span>
                                {newObjectWord?.hint}
                            </div>
                        )}
                        <div className={styles.word}>
                            {newWord?.map((letter: string, index: number) => (
                                <span key={`${letter}${index}`}>
                                    {letter === " " ? (
                                        <small> </small>
                                    ) : (
                                        <>
                                            <small>
                                                {selectedLetter.some(
                                                    (l: string) => l === letter
                                                )
                                                    ? letter.toUpperCase()
                                                    : ""}
                                            </small>{" "}
                                            <small>_</small>
                                        </>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default Words;
