import React, { useEffect, useState } from "react";

import styles from "@/styles/games/snake/snake.module.css";
import classNames from "classnames";

const GRID_SIZE = 20;

function Game() {
    const [snake, setSnake] = useState<Array<any>>([[10, 10]]);
    const [food, setFood] = useState<Array<number>>([15, 15]);
    const [direction, setDirection] = useState<string>("RIGHT");
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number | string>(0);
    const [gameSpeed, setGameSpeed] = useState<number>(200);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHighScore(localStorage.getItem("snake-high-score") || 0);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(moveSnake, gameSpeed);
        return () => clearInterval(interval);
    }, [snake, direction]);

    useEffect(() => {
        const handleKeyDown = (e: any) => {
            switch (e.key) {
                case "ArrowUp":
                    if (direction !== "DOWN") setDirection("UP");
                    break;
                case "ArrowDown":
                    if (direction !== "UP") setDirection("DOWN");
                    break;
                case "ArrowLeft":
                    if (direction !== "RIGHT") setDirection("LEFT");
                    break;
                case "ArrowRight":
                    if (direction !== "LEFT") setDirection("RIGHT");
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [direction]);

    const moveSnake = () => {
        if (isGameOver) return;

        const newSnake = [...snake];
        const head: Array<any> = [...newSnake[newSnake.length - 1]];

        switch (direction) {
            case "UP":
                head[1] -= 1;
                break;
            case "DOWN":
                head[1] += 1;
                break;
            case "LEFT":
                head[0] -= 1;
                break;
            case "RIGHT":
                head[0] += 1;
                break;
            default:
                break;
        }

        // برخورد به دیوار یا خودش
        if (
            head[0] < 0 ||
            head[1] < 0 ||
            head[0] >= GRID_SIZE ||
            head[1] >= GRID_SIZE ||
            newSnake.some(([x, y]) => x === head[0] && y === head[1])
        ) {
            setIsGameOver(true);
            setHighScore(score > +highScore ? score : +highScore);
            localStorage.setItem(
                "snake-high-score",
                JSON.stringify(+highScore)
            );
            return;
        }

        newSnake.push(head);

        // خوردن غذا
        if (head[0] === food[0] && head[1] === food[1]) {
            setFood([
                Math.floor(Math.random() * GRID_SIZE),
                Math.floor(Math.random() * GRID_SIZE),
            ]);
            setScore((prev: number) => prev + 1);
            setGameSpeed(score > 4 ? 100 : score > 9 ? 70 : gameSpeed);
        } else {
            newSnake.shift(); // حذف دُم مار
        }

        setSnake(newSnake);
    };

    const resetGame = () => {
        setSnake([[10, 10]]);
        setFood([15, 15]);
        setGameSpeed(200);
        setScore(0);
        setDirection("RIGHT");
        setIsGameOver(false);
    };

    return (
        <div className={styles.main}>
            <h1>Snake Game</h1>
            {!isGameOver && <h3>Score: {score}</h3>}
            {isGameOver ? (
                <div className={styles.gameOverSection}>
                    <h2>Game Over</h2>
                    <h3>Score: {score}</h3>
                    <h3>High Score: {highScore}</h3>
                    <button onClick={resetGame}>Retry</button>
                </div>
            ) : (
                <>
                    <div className={styles.gameBoard}>
                        {Array.from({ length: GRID_SIZE }).map((_, row) => (
                            <div key={row} className={styles.row}>
                                {Array.from({ length: GRID_SIZE }).map(
                                    (_, col) => {
                                        const isSnake = snake.some(
                                            ([x, y]) => x === col && y === row
                                        );
                                        const isFood =
                                            food[0] === col && food[1] === row;
                                        return (
                                            <div
                                                key={col}
                                                className={classNames(
                                                    styles.cell,
                                                    isSnake ? styles.snake : "",
                                                    isFood ? styles.food : ""
                                                )}
                                            ></div>
                                        );
                                    }
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={styles.controls}>
                        <i
                            className="fas fa-arrow-up"
                            onClick={() => {
                                if (direction !== "DOWN") {
                                    setDirection("UP");
                                }
                            }}
                        ></i>
                        <div>
                            <i
                                className="fas fa-arrow-left"
                                onClick={() => {
                                    if (direction !== "RIGHT") {
                                        setDirection("LEFT");
                                    }
                                }}
                            ></i>
                            <i
                                className="fas fa-arrow-right"
                                onClick={() => {
                                    if (direction !== "LEFT") {
                                        setDirection("RIGHT");
                                    }
                                }}
                            ></i>
                        </div>
                        <i
                            className="fas fa-arrow-down"
                            onClick={() => {
                                if (direction !== "UP") {
                                    setDirection("DOWN");
                                }
                            }}
                        ></i>
                    </div>
                </>
            )}
        </div>
    );
}

export default Game;
