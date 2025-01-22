import React, { useEffect } from "react";

import styles from "@/styles/games/rock-paper-scissor/rockPaperScissor.module.css";

function ComputerSection({
    choices,
    computerChoice,
    setComputerChoice,
    userChoice,
}: any) {
    useEffect(() => {
        if (userChoice) {
            const randomNumber = Math.floor(Math.random() * 3);
            const computerChoice = choices[randomNumber];
            setComputerChoice(computerChoice);
        }
    }, [userChoice]);

    return (
        <div className={styles.computerSection}>
            {computerChoice ? (
                <div
                    className={styles.computerChoice}
                    style={{
                        background: `url(/assets/img/rock-paper-scissor/${computerChoice}.png)`,
                    }}
                />
            ) : (
                <p>Ready</p>
            )}
            <span>Computer Choice</span>
        </div>
    );
}

export default ComputerSection;
