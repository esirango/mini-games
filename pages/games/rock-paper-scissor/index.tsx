import React, { useEffect, useState } from "react";

import styles from "@/styles/games/rock-paper-scissor/rockPaperScissor.module.css";

import UserSection from "@/components/rock-paper-scissor/UserSection";
import ScoreBoard from "@/components/rock-paper-scissor/ScoreBoard";
import ComputerSection from "@/components/rock-paper-scissor/ComputerSection";

function Index() {
    const choices = ["rock", "paper", "scissor"];

    const [computerChoice, setComputerChoice] = useState<string>("");
    const [userChoice, setUserChoice] = useState<string>("");

    const [computerScore, setComputerScore] = useState<number>(0);
    const [userScore, setUserScore] = useState<number>(0);

    const [winner, setWinner] = useState<string>("");

    const calculateWinner = () => {
        if (userChoice === computerChoice) {
            setWinner("draw");
            return;
        }

        const winConditions: Record<string, string> = {
            rock: "scissor",
            paper: "rock",
            scissor: "paper",
        };

        if (winConditions[userChoice] === computerChoice) {
            setWinner("user");
        } else {
            setWinner("computer");
        }
    };

    useEffect(() => {
        if (userChoice && computerChoice) {
            calculateWinner();
        }
    }, [userChoice, computerChoice]);

    useEffect(() => {
        if (winner === "user") {
            setUserScore((prev) => prev + 1);
        } else if (winner === "computer") {
            setComputerScore((prev) => prev + 1);
        }
    }, [winner]);

    const restartHandler = () => {
        setComputerChoice("");
        setUserChoice("");
        setUserScore(0);
        setComputerScore(0);
        setWinner("");
    };

    return (
        <div className={styles.main}>
            <h1>Rock Paper Scissor</h1>
            <span className={styles.restartButton} onClick={restartHandler}>
                Reset Game
            </span>
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
            <ScoreBoard computerScore={computerScore} userScore={userScore} />
        </div>
    );
}

export default Index;
