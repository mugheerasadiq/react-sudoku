import React, { useState } from "react";
import Grid from "./components/grid/Grid.index";

import { Button, Typography, Input } from "antd";

import Footer from "./components/footer/Footer.index";
import FullPageLoader from "./components/loader/loader.index";
import DifficultyLevel from "./components/difficulty_level/Difficulty_level.index";
import Header from "./components/header/Header.index";

import Confetti from "react-confetti";

const gridState = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [gridData, setGridData] = useState(gridState);
  const [level, setLevel] = useState("easy");
  const [hasWon, setHasWon] = useState(false);

  return (
    <>
      {loading && <FullPageLoader />}
      {hasWon && <Confetti width={2000} height={1000} numberOfPieces={2000} />}
      <div className="main_container">
        <div className="main_wrapper">
          <Header />
          <Grid
            grid={gridData}
            level={level}
            setGrid={setGridData}
            setLoader={setLoading}
          />
          <DifficultyLevel
            setLevel={setLevel}
            setGrid={setGridData}
            setLoader={setLoading}
            setHasWon={setHasWon}
            level={level}
          />
          <Footer
            level={level}
            grid={gridData}
            hasWon={hasWon}
            setLoader={setLoading}
            setGrid={setGridData}
            setHasWon={setHasWon}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
