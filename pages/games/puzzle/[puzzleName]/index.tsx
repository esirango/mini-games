import useglobalState from "@/store/globalStates";
import React from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle";

import styles from "@/styles/games/puzzle/puzzle.module.css";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import Link from "next/link";
import ShowToastSuccess from "@/func/toasts/ShowToastError";
import { useRouter } from "next/router";
import Head from "next/head";

let solved = false;

function index() {
    const { query } = useRouter();
    console.log(query);
    const { selectedImage, setSelectedImage } = useglobalState();

    return (
        <>
            <Head>
                <title>{query.puzzleName} Puzzle game</title>
            </Head>
            <div className={styles.jigsawPuzzle}>
                <JigsawPuzzle
                    imageSrc={selectedImage}
                    rows={3}
                    columns={3}
                    onSolved={() => {
                        if (!solved) {
                            solved = true;
                            ShowToastSuccess();
                        }
                    }}
                />
                <Link href={"/games/puzzle"}>
                    <span
                        onClick={() => {
                            solved = false;
                            setSelectedImage("");
                        }}
                    >
                        Choose another image
                    </span>
                </Link>
            </div>
        </>
    );
}

export default index;
