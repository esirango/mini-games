import Game from "@/components/tic-tac-toe/Game";
import Head from "next/head";

import React from "react";

function index() {
    return (
        <>
            <Head>
                <title>Tic Tac Toe Game</title>
            </Head>
            <Game />
        </>
    );
}

export default index;
