import React, { useState } from "react";

import styles from "@/styles/games/puzzle/puzzle.module.css";

function Puzzle({ images }: any) {
    const [selectedImage, setSelectedImage] = useState<string>("");
    return (
        <div className={styles.mainPuzzle}>
            <h1>Puzzle Game</h1>

            {selectedImage ? (
                <></>
            ) : (
                <div className={styles.imagesList}>
                    <h2>Choose the puzzle you want</h2>

                    {images?.map((image: string) => (
                        <img
                            src={image}
                            alt={image}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Puzzle;
