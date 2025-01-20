import React from "react";

import styles from "@/styles/games/puzzle/puzzle.module.css";

import ChoosePic from "./ChoosePic";

function Puzzle({ images, setSelectedImage }: any) {
    return (
        <div className={styles.mainPuzzle}>
            <ChoosePic images={images} setSelectedImage={setSelectedImage} />
        </div>
    );
}

export default Puzzle;
