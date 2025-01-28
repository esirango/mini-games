import React from "react";

import Square from "./Square";

import styles from "@/styles/games/tic-tac-toe/ticTacToe.module.css";

export default function Board({ squares, onClick }: any) {
    return (
        <div className={styles.boardGame}>
            {squares.map((value: any, index: any) => (
                <Square
                    key={index}
                    value={value}
                    onClick={() => onClick(index)}
                />
            ))}
        </div>
    );
}
