import React, { useState } from "react";
import Board from "./Board";

import styles from "@/styles/games/ticTacToe/ticTacToe.module.css";

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);

    function calculateWinner(squares: any) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (index: any) => {
        if (squares[index] || calculateWinner(squares)) return;

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(squares);

    const isXWinner = winner === "O" ? false : true;

    return (
        <div className={styles.mainBoard}>
            <h1>Tic Tac Toe</h1>
            <Board squares={squares} onClick={handleClick} />
            <p>
                {winner ? (
                    <>
                        Winner:{" "}
                        <span
                            style={{
                                color: isXWinner ? "#e63946" : "#457b9d",
                            }}
                        >
                            {winner}
                        </span>
                    </>
                ) : (
                    <>
                        Next Player:{" "}
                        <span
                            style={{
                                color: isXNext ? "#e63946" : "#457b9d",
                            }}
                        >
                            {isXNext ? "X" : "O"}
                        </span>
                    </>
                )}
            </p>
            <button
                className={styles.restartButton}
                onClick={() => setSquares(Array(9).fill(null))}
            >
                Restart
            </button>
        </div>
    );
}
