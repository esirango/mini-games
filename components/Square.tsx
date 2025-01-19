import React from "react";

import styles from "@/styles/games/ticTacToe/ticTacToe.module.css";

export default function Square({ value, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={styles.squareButtons}
            style={value === "O" ? { color: "#457b9d" } : { color: "#e63946" }}
        >
            {value}
        </button>
    );
}
