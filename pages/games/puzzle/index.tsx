import PuzzleGame from "@/components/puzzle/Puzzle";
import React from "react";

function index() {
    const images = [
        "/assets/img/puzzles/cocacola.jpg",
        "/assets/img/puzzles/vangogh-starry-night.jpg",
        "/assets/img/puzzles/bruce_lee.jpg",
    ];
    return (
        <>
            <PuzzleGame images={images} />{" "}
        </>
    );
}

export default index;
