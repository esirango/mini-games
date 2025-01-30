import React, { useEffect, useState } from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Words({
    words,
    isWin,
    isLose,
    setIsWin,
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
        if (!newWord) {
            const generateNewWord = () => {
                const randomIndex = Math.floor(Math.random() * words.length);
                const objectWord = words[randomIndex];
                const word = objectWord?.word?.split("");
                setNewWord([...word]);
                setNewObjectWord(objectWord);
            };

            generateNewWord();
        }
    }, [newWord]);

    // match words
    useEffect(() => {
        if (isWin || isLose || typeof newWord === "undefined") return;

        const matchWords = (e: any) => {
            const enterLetter = e.key.toLowerCase();

            if (selectedLetter.includes(enterLetter)) return;

            setSelectedLetter((prev: any) => [...prev, enterLetter]);

            if (!newWord?.includes(enterLetter)) {
                setWrongAnswers((prev: number) => prev + 1);
            }
        };

        window.addEventListener("keydown", matchWords);
        return () => window.removeEventListener("keydown", matchWords);
    }, [selectedLetter, newWord, isLose, isWin]);

    useEffect(() => {
        if (wrongAnswers === countWrongAnswers) {
            setIsLose(true);
        }
    }, [wrongAnswers]);

    useEffect(() => {
        if (!newObjectWord) return;

        const rightAnswersLength = selectedLetter?.length - wrongAnswers;

        const uniqueCharsLength = new Set(
            newObjectWord?.word?.split(" ").join("")
        ).size;

        if (rightAnswersLength === uniqueCharsLength) {
            setIsWin(true);
        }
    }, [wrongAnswers, selectedLetter, newObjectWord]);

    const resetGame = () => {
        setIsLose(false);
        setIsWin(false);
        setNewWord("");
        setWrongAnswers(0);
        setSelectedLetter([]);
    };

    return (
        <>
            {newObjectWord ? (
                <>
                    <div className={styles.words}>
                        {isLose || isWin ? (
                            <div className={styles.reset} onClick={resetGame}>
                                <p>Reset Game</p>
                            </div>
                        ) : (
                            <div className={styles.hint}>
                                <span>Hint: </span> {newObjectWord?.hint}
                            </div>
                        )}
                        <div className={styles.word}>
                            {newWord &&
                                newWord?.map(
                                    (letter: string, index: number) => (
                                        <span key={`${letter}${index}`}>
                                            {letter === " " ? (
                                                <small> </small>
                                            ) : (
                                                <>
                                                    <small>
                                                        {selectedLetter.some(
                                                            (l: string) =>
                                                                l === letter
                                                        ) || isLose
                                                            ? letter.toUpperCase()
                                                            : ""}
                                                    </small>{" "}
                                                    <small>_</small>
                                                </>
                                            )}
                                        </span>
                                    )
                                )}
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
