import React, { useState } from "react";

import styles from "@/styles/games/puzzle/puzzle.module.css";

function Puzzle({ images }: any) {
    const [selectedImage, setSelectedImage] = useState<string>("");
    return (
        <>
            {selectedImage ? (
                <></>
            ) : (
                <div className={styles.imagesList}>
                    {images?.map((image: string) => (
                        <img
                            src={image}
                            alt={image}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default Puzzle;
