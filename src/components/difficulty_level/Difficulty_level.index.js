import React, { useEffect, useState } from "react";
import { Tabs, Button, Typography, Radio } from "antd";

import { getBoard } from "../../services/game.services";

const { Title } = Typography;
const { TabPane } = Tabs;

const DifficultyLevel = ({
  setLoader,
  setGrid,
  level,
  setLevel,
  setHasWon,
}) => {
  const [levelstate, setStateLevel] = useState(level);

  const fetchGrid = (level) => {
    try {
      setLoader(true);
      getBoard(level)
        .then((data) => {
          setGrid(data);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  const onLevelClick = (e) => {
    const value = e.target.value;
    setStateLevel(value);
    setLevel(value);
    fetchGrid(value);
  };

  useEffect(() => {}, [level]);

  return (
    <div className="difficulty_wrapper">
      <Title
        level={3}
        style={{ display: "inline", marginRight: "15px", color: "cadetblue" }}
      >
        Generate
      </Title>

      <Radio.Group
        defaultValue={"easy"}
        size={"large"}
        onChange={onLevelClick}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button
          value="easy"
          style={{ width: "100px", backgroundColor: "#93ef00" }}
          disabled={levelstate === "easy" ? true : false}
        >
          Easy
        </Radio.Button>
        <Radio.Button
          value="medium"
          style={{ width: "100px", backgroundColor: "#FFC107" }}
          disabled={levelstate === "medium" ? true : false}
        >
          Medium
        </Radio.Button>
        <Radio.Button
          value="hard"
          style={{ width: "100px", backgroundColor: "#F44336" }}
          disabled={levelstate === "hard" ? true : false}
        >
          Hard
        </Radio.Button>
        <Radio.Button
          value="random"
          style={{ width: "100px" }}
          disabled={levelstate === "random" ? true : false}
        >
          Random
        </Radio.Button>
      </Radio.Group>

      <Button
        size="large"
        danger
        style={{ marginLeft: "10px", width: "120px" }}
        onClick={() => {
          setGrid([
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
          ]);
          setHasWon(false);
        }}
      >
        Clear
      </Button>
    </div>
  );
};

export default DifficultyLevel;
