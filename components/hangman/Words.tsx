import React, { useEffect, useState } from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Words({
    words,
    setWrongAnswers,
    setSelectedLetter,
    selectedLetter,
}: any) {
    const [newWord, setNewWord] = useState<any>();
    const [newObjectWord, setNewObjectWord] = useState<any>({});

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

    useEffect(() => {
        const matchWords = (e: any) => {
            const enterLetter = e.key.toLowerCase();

            setSelectedLetter((prev: any) =>
                prev.some((p: any) => p === enterLetter)
                    ? [...prev]
                    : [...prev, enterLetter]
            );
        };

        window.addEventListener("keydown", matchWords);
        return () => window.removeEventListener("keydown", matchWords);
    }, [selectedLetter]);

    return (
        <>
            {newObjectWord ? (
                <>
                    <div className={styles.words}>
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
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default Words;
