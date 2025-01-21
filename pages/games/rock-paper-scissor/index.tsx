import React, { useState } from "react";

import styles from "@/styles/games/rock-paper-scissor/rockPaperScissor.module.css";

import UserSection from "@/components/rock-paper-scissor/UserSection";
import ScoreBoard from "@/components/rock-paper-scissor/ScoreBoard";
import ComputerSection from "@/components/rock-paper-scissor/ComputerSection";

function index() {
    const choices = ["rock", "paper", "scissor"];

    const [computerChoice, setComputerChoice] = useState<string>("");
    const [userChoice, setUserChoice] = useState<string>("");

    const [computerScore, setComputerScore] = useState<number>();
    const [userScore, setUserScore] = useState<number>();

    const calculateWinner = () => {};

    const restartHandler = () => {
        setComputerChoice("");
        setUserChoice("");
        setUserScore(0);
        setComputerScore(0);
    };

    return (
        <div className={styles.main}>
            <h1>Rock Paper Scissor</h1>
            <div className={styles.gameBoard}>
                <UserSection
                    choices={choices}
                    userChoice={userChoice}
                    setUserChoice={setUserChoice}
                />
                <ComputerSection
                    choices={choices}
                    computerChoice={computerChoice}
                    userChoice={userChoice}
                    setComputerChoice={setComputerChoice}
                />
            </div>
            <ScoreBoard />

            <span className={styles.restartButton} onClick={restartHandler}>
                Reset Game
            </span>
        </div>
    );
}

export default index;
