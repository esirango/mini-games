import React, { useState } from "react";

import styles from "@/styles/games/hangman/hangman.module.css";

import Picture from "./Picture";
import Words from "./Words";
import Alphabet from "./Alphabet";

const COUNT_WRONG_ANSWERS = 6;

function Game() {
    const words = [
        {
            id: 1,
            word: "flower",
            hint: "It’s something that blooms and often has petals.",
        },
        {
            id: 2,
            word: "cozy",
            hint: "It's how you feel when wrapped in a warm blanket on a cold day.",
        },
        {
            id: 3,
            word: "harry potter",
            hint: "The boy who lived.",
        },
        {
            id: 4,
            word: "batman",
            hint: "He’s a hero with no superpowers, but a lot of gadgets and a dark cape.",
        },
        {
            id: 5,
            word: "spiderman",
            hint: "his powers come from a radioactive bite.",
        },
    ];

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const upperAlphabet = alphabet.map((char) => char.toUpperCase());

    const [newWord, setNewWord] = useState<any>();
    const [wrongAnswers, setWrongAnswers] = useState<number>(0);
    const [isLose, setIsLose] = useState<boolean>(false);
    const [isWin, setIsWin] = useState<boolean>(false);
    const [selectedLetter, setSelectedLetter] = useState<Array<string>>([]);

    return (
        <div className={styles.main}>
            <h1>Hangman</h1>
            <div className={styles.gameBoard}>
                <Picture isWin={isWin} wrongAnswers={wrongAnswers} />
                <Words
                    words={words}
                    countWrongAnswers={COUNT_WRONG_ANSWERS}
                    selectedLetter={selectedLetter}
                    wrongAnswers={wrongAnswers}
                    newWord={newWord}
                    setNewWord={setNewWord}
                    setWrongAnswers={setWrongAnswers}
                    setSelectedLetter={setSelectedLetter}
                />
                <Alphabet
                    countWrongAnswers={COUNT_WRONG_ANSWERS}
                    selectedLetter={selectedLetter}
                    wrongAnswers={wrongAnswers}
                    setSelectedLetter={setSelectedLetter}
                    alphabet={upperAlphabet}
                    newWord={newWord}
                    setWrongAnswers={setWrongAnswers}
                />
            </div>
        </div>
    );
}

export default Game;
