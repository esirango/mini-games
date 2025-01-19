import React, { useState } from "react";

import styles from "@/styles/games/puzzle/puzzle.module.css";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import { JigsawPuzzle } from "react-jigsaw-puzzle";

function Puzzle({ images }: any) {
    const [selectedImage, setSelectedImage] = useState<string>("");
    return (
        <div
            className={styles.mainPuzzle}
            style={
                selectedImage
                    ? { justifyContent: "center" }
                    : { justifyContent: "flex-start" }
            }
        >
            {selectedImage ? (
                <div className={styles.jigsawPuzzle}>
                    <JigsawPuzzle
                        imageSrc={selectedImage}
                        rows={5}
                        columns={5}
                        onSolved={() => alert("Solved!")}
                    />
                    <span onClick={() => setSelectedImage("")}>
                        Choose another image
                    </span>
                </div>
            ) : (
                <div className={styles.imagesList}>
                    <h1>Puzzle Game</h1>
                    <h2>Choose the puzzle you want</h2>
                    <div className={styles.image}>
                        {images?.map((image: string) => (
                            <img
                                src={image}
                                alt={image}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Puzzle;
