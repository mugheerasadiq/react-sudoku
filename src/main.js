import React, { useState } from "react";
import Grid from "./components/grid/Grid.index";

import { Button, Typography, Input } from "antd";

import Footer from "./components/footer/Footer.index";
import FullPageLoader from "./components/loader/loader.index";
import DifficultyLevel from "./components/difficulty_level/Difficulty_level.index";

const { Title } = Typography;

const gridState = [
  [8, 0, 0, 4, 0, 6, 0, 0, 7],
  [0, 0, 0, 0, 0, 0, 4, 0, 0],
  [0, 1, 0, 0, 0, 0, 6, 5, 0],
  [5, 0, 9, 0, 3, 0, 7, 8, 0],
  [0, 0, 0, 0, 7, 0, 0, 0, 0],
  [0, 4, 8, 0, 2, 0, 1, 0, 3],
  [0, 5, 2, 0, 0, 0, 0, 9, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 9, 0, 2, 0, 0, 5],
];

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [gridData, setGridData] = useState([]);
  const [level, setLevel] = useState("easy");

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
        <Footer />
      </div>
    </>
  );
};

export default Main;
