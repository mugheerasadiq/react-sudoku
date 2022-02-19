import React, { useEffect } from "react";
import { Button, Typography, Input } from "antd";

import { getBoard } from "../../services/game.services";

const { Title } = Typography;

const DifficultyLevel = ({ setLoader, setGrid, setLevel }) => {
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

  const onLevelClick = (event) => {
    let level = event.target.innerText?.toLowerCase();
    fetchGrid(level);
  };

  return (
    <div className="difficulty_wrapper">
      <Title
        level={3}
        style={{ display: "inline", marginRight: "15px", color: "cadetblue" }}
      >
        Generate
      </Title>
      <Button
        size="large"
        block
        style={{ backgroundColor: "#93ef00", color: "white" }}
        onClick={onLevelClick}
      >
        Easy
      </Button>
      <Button
        size="large"
        block
        style={{ backgroundColor: "#e6da00", color: "white" }}
        onClick={onLevelClick}
      >
        Medium
      </Button>
      <Button size="large" block type="primary" danger onClick={onLevelClick}>
        Hard
      </Button>
      <Button size="large" block type="primary" onClick={onLevelClick}>
        Random
      </Button>
      <Button
        size="large"
        block
        danger
        style={{ marginLeft: "10px" }}
        onClick={() =>
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
          ])
        }
      >
        Clear
      </Button>
    </div>
  );
};

export default DifficultyLevel;
