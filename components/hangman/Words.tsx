import React, { useEffect, useState } from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Words({
    words,
    wrongAnswers,
    countWrongAnswers,
    setWrongAnswers,
    setSelectedLetter,
    selectedLetter,
}: any) {
    const [newWord, setNewWord] = useState<any>();
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
        if (
            wrongAnswers === countWrongAnswers ||
            typeof newWord === "undefined"
        )
            return;

        const matchWords = (e: any) => {
            const enterLetter = e.key.toLowerCase();

            if (!newWord?.some((w: string) => w === enterLetter)) {
                setWrongAnswers((prev: number) => prev + 1);
            }

            setSelectedLetter((prev: any) =>
                prev.some((p: any) => p === enterLetter)
                    ? prev
                    : [...prev, enterLetter]
            );
        };

        window.addEventListener("keydown", matchWords);
        return () => window.removeEventListener("keydown", matchWords);
    }, [selectedLetter, newWord]);

    console.log(selectedLetter);

    return (
        <>
            {newObjectWord ? (
                <>
                    <div className={styles.words}>
                        <div className={styles.hint}>
                            <span>Hint: </span>
                            {newObjectWord?.hint}
                        </div>
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
