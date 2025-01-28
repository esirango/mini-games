import React, { useEffect, useState } from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

function Words({ words, setWrongAnswers }: any) {
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

    return (
        <>
            {newObjectWord ? (
                <>
                    <div className={styles.words}>
                        {newWord?.map((letter: string) => (
                            <span>
                                {letter === " " ? (
                                    <small> </small>
                                ) : (
                                    <>
                                        <small>{letter.toUpperCase()}</small>{" "}
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
