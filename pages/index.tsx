import styles from "@/styles/home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className={styles.homePage}>
                <h1>Mini Games</h1>
                <div className={styles.gamesList}>
                    <ul>
                        <Link href={"/games/tic-tac-toe"}>
                            <li>Tic Tac Toe </li>
                        </Link>
                        <Link href={"/games/rock-paper-scissor"}>
                            <li>Rock Paper Scissor</li>
                        </Link>
                        <Link href={"/games/puzzle"}>
                            <li>Puzzle</li>
                        </Link>
                        <Link href={"/games/guess-number"}>
                            <li>Guess Number</li>
                        </Link>
                        <Link href={"/games/endless-runner"}>
                            <li>Endless Runner</li>
                        </Link>
                        <Link href={"/games/dots-and-boxes"}>
                            <li>Dots and Boxes</li>
                        </Link>
                        <Link href={"/games/red-hands"}>
                            <li>Red Hands</li>
                        </Link>
                        <Link href={"/games/hangman"}>
                            <li>Hangman</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}
