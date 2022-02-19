import React, { useState } from "react";
import Grid from "./components/grid/Grid.index";

import { Button, Typography, Input } from "antd";

import Footer from "./components/footer/Footer.index";
import FullPageLoader from "./components/loader/loader.index";
import DifficultyLevel from "./components/difficulty_level/Difficulty_level.index";
import Header from "./components/header/Header.index";

const { Title } = Typography;

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
  const [loading, setLoading] = useState(false);
  const [gridData, setGridData] = useState(gridState);
  const [level, setLevel] = useState("easy");
  const [hasWon, setHasWon] = useState(false);

  return (
    <>
      {loading && <FullPageLoader />}

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
          />
          <Footer
            level={level}
            grid={gridData}
            setLoader={setLoading}
            setGrid={setGridData}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
