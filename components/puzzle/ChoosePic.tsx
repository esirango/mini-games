import React from "react";

import styles from "@/styles/games/puzzle/puzzle.module.css";
import Link from "next/link";

function ChoosePic({ images, setSelectedImage }: any) {
    const renderPuzzleName = (url: string) => {
        const puzzleName = url.split("/puzzles")[1].split(".")[0];
        return puzzleName;
    };
    return (
        <div className={styles.imagesList}>
            <h1>Puzzle Game</h1>
            <h2>Choose the puzzle you want</h2>
            <div className={styles.image}>
                {images?.map((image: string) => (
                    <Link
                        href={`/games/puzzle${renderPuzzleName(image)}`}
                        key={image}
                    >
                        <div
                            style={{
                                background: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                            onClick={() => setSelectedImage(image)}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ChoosePic;
