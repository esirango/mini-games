import PuzzleGame from "@/components/puzzle/Puzzle";
import React from "react";

function index() {
    const images = [
        "/assets/img/cocacola.jpg",
        "/assets/img/vangogh-starry-night.jpg",
    ];
    return (
        <>
            <PuzzleGame images={images} />{" "}
        </>
    );
}

export default index;
