import styles from "@/styles/games/endless-runner/endlessRunner.module.css";

import React, { useState, useEffect, useRef } from "react";

const Game = () => {
    const [playerY, setPlayerY] = useState<number>(0);
    const [obstacles, setObstacles] = useState<any>([]);
    const [isJumping, setIsJumping] = useState<boolean>(false);
    const [score, setScore] = useState<number | string>(0);
    const [highScore, setHighScore] = useState<number | string>(0);
    const [gameSpeed, setGameSpeed] = useState<number>(30);

    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const gameContainer = useRef<any>(null);

    useEffect(() => {
        gameContainer.current?.focus();
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHighScore(localStorage.getItem("highScore") || 0);
        }
    }, []);

    useEffect(() => {
        if (isGameOver) return;

        const interval = setInterval(() => {
            const obstacleX = gameContainer.current.offsetWidth;
            const newObstacle = { x: obstacleX, id: Date.now() };
            setObstacles((prev: any) => [...prev, newObstacle]);
        }, 3000);

        return () => clearInterval(interval);
    }, [isGameOver, gameSpeed]);

    useEffect(() => {
        if (isGameOver) return;

        const interval = setInterval(() => {
            setObstacles((prev: any) =>
                prev
                    .map((obstacle: any) => {
                        const updatedX = obstacle.x - 5;

                        if (updatedX < 0 && !obstacle.passed) {
                            obstacle.passed = true;
                            setScore((prevScore) =>
                                typeof prevScore === "number"
                                    ? prevScore + 1
                                    : +prevScore + 1
                            );
                        }

                        return { ...obstacle, x: updatedX };
                    })
                    .filter((obstacle: any) => obstacle.x > -50)
            );
        }, gameSpeed);

        return () => clearInterval(interval);
    }, [isGameOver, gameSpeed]);

    useEffect(() => {
        if (!isJumping) return;

        let jumpHeight = 0;
        const interval = setInterval(() => {
            jumpHeight += 5;
            setPlayerY(jumpHeight);
            if (jumpHeight >= 120) {
                clearInterval(interval);
                setIsJumping(false);
            }
        }, 15);

        return () => clearInterval(interval);
    }, [isJumping]);

    useEffect(() => {
        if (isJumping || playerY === 0) return;

        const interval = setInterval(() => {
            setPlayerY((prev) => Math.max(0, prev - 5));
        }, 25);

        return () => clearInterval(interval);
    }, [playerY, isJumping]);

    useEffect(() => {
        const collision = obstacles.some(
            (obstacle: any) => obstacle.x < 50 && obstacle.x > 0 && playerY < 50
        );

        if (collision) {
            setIsGameOver(true);
            if (score > highScore) {
                setHighScore(score);
                localStorage.setItem("highScore", String(score));
            }
        }

        setGameSpeed(+score > 4 ? 15 : 30);
    }, [obstacles, playerY, score, highScore]);

    console.log(gameSpeed);

    const handleKeyDown = (e: any) => {
        if (isGameOver) {
            resetGame();
        } else if (
            e.code === "Space" &&
            !isJumping &&
            !isGameOver &&
            playerY === 0
        ) {
            setIsJumping(true);
        }
    };

    const handleTouchDown = () => {
        if (!isJumping && !isGameOver && playerY === 0) {
            setIsJumping(true);
        }
    };

    const resetGame = () => {
        setPlayerY(0);
        setObstacles([]);
        setScore(0);
        setIsGameOver(false);
    };

    return (
        <div
            className={styles.endlessRunnerMain}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={handleTouchDown}
            ref={gameContainer}
        >
            <h1 className={styles.gameTitle}>Endless Cowboy</h1>
            <div className={styles.gameBoard}>
                <div
                    className={styles.scoreBoard}
                    style={
                        isGameOver ? { display: "none" } : { display: "block" }
                    }
                >
                    <h2>Score: {score}</h2>
                </div>
                <div
                    style={{
                        background: `url(/assets/img/endless-runner/cowboy1.png)`,
                        position: "absolute",
                        bottom: `${playerY}px`,
                        left: "20px",
                        width: "90px",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "90px",
                    }}
                ></div>

                {obstacles.map((obstacle: any) => (
                    <div
                        key={obstacle.id}
                        className={styles.obstacles}
                        style={{
                            background: `url(/assets/img/endless-runner/cactus2.png)`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            left: `${obstacle.x}px`,
                        }}
                    ></div>
                ))}

                {isGameOver && (
                    <div className={styles.gameOverSection}>
                        <h1>Game Over</h1>
                        <p>Score: {score}</p>
                        <p>High Score: {highScore}</p>
                        <button onClick={resetGame}>Retry</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game;
