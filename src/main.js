import React, { useState } from "react";
import Grid from "./components/grid/Grid.index";

import { Button, Typography, Input } from "antd";

import Footer from "./components/footer/Footer.index";
import FullPageLoader from "./components/loader/loader.index";
import DifficultyLevel from "./components/difficulty_level/Difficulty_level.index";

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

      <div className="container">
        <Grid
          grid={gridData}
          onChange={(value) => console.log(value)}
          level={level}
          setGrid={setGridData}
          setLoader={setLoading}
        />
        <DifficultyLevel
          setLevel={setLevel}
          setGrid={setGridData}
          setLoader={setLoading}
        />
        <Footer grid={gridData} setLoader={setLoading} setGrid={setGridData} />
      </div>
    </>
  );
};

export default Main;
