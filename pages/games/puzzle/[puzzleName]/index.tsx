import useglobalState from "@/store/globalStates";
import React from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle";

import styles from "@/styles/games/puzzle/puzzle.module.css";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Link from "next/link";

function index() {
    const { selectedImage, setSelectedImage } = useglobalState();

    return (
        <div className={styles.jigsawPuzzle}>
            <JigsawPuzzle
                imageSrc={selectedImage}
                rows={5}
                columns={5}
                onSolved={() => alert("Solved!")}
            />
            <Link href={"/games/puzzle"}>
                <span onClick={() => setSelectedImage("")}>
                    Choose another image
                </span>
            </Link>
        </div>
    );
}

export default index;
