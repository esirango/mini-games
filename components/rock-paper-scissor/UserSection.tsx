import React from "react";

import styles from "@/styles/games/rock-paper-scissor/rockPaperScissor.module.css";

function UserSection({ choices, userChoice, setUserChoice }: any) {
    return (
        <div className={styles.userSection}>
            {userChoice ? (
                <div
                    className={styles.userChoice}
                    style={{
                        background: `url(/assets/img/rock-paper-scissor/${userChoice}.png)`,
                    }}
                />
            ) : (
                <p>Ready</p>
            )}
            <h2>Choose your choice</h2>
            <div>
                {choices?.map((choice: string) => (
                    <span
                        key={choice}
                        onClick={() => {
                            setUserChoice((prev: string) =>
                                prev === choice ? "" : choice
                            );
                            setTimeout(() => setUserChoice(choice), 0);
                        }}
                    >
                        {`${choice.charAt(0).toUpperCase()}${choice
                            .slice(1)
                            .toLowerCase()}`}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default UserSection;
