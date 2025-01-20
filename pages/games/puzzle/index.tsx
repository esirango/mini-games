import PuzzleGame from "@/components/puzzle/Puzzle";
import useglobalState from "@/store/globalStates";
import React, { useState } from "react";

function index() {
    const { selectedImage, setSelectedImage } = useglobalState();

    const images = [
        "/assets/img/puzzles/cocacola.jpg",
        "/assets/img/puzzles/vangogh-starry-night.jpg",
        "/assets/img/puzzles/bruce_lee.jpg",
    ];
    return (
        <>
            <PuzzleGame
                images={images}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />{" "}
        </>
    );
}

export default index;
