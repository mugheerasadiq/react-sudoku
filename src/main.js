import React from "react";
import Grid from "./components/grid/Grid.index";
import { Button, Typography, Input } from "antd";

import { CheckOutlined, ContainerOutlined } from "@ant-design/icons";

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
  return (
    <div className="container">
      <Grid grid={gridState} onChange={(value) => console.log(value)} />
      <div className="difficulty_wrapper">
        <Title level={3} style={{ display: "inline", marginRight: "15px" }}>
          Generate
        </Title>
        <Button
          size="large"
          block
          style={{ backgroundColor: "#93ef00", color: "white" }}
        >
          Easy
        </Button>
        <Button
          size="large"
          block
          style={{ backgroundColor: "#e6da00", color: "white" }}
        >
          Medium
        </Button>
        <Button size="large" block type="primary" danger>
          Hard
        </Button>
        <Button size="large" block type="primary">
          Random
        </Button>
        <Button size="large" block danger style={{ marginLeft: "10px" }}>
          Clear
        </Button>
      </div>
      <div className="footer_container">
        <div className="footer_wrapper">
          <div className="footer_btn">
            <Button size="large" block icon={<CheckOutlined />}>
              Validate
            </Button>
            <Input value="Unsolved" size="small" style={{ height: "41px" }} />
          </div>
          <div className="footer_btn">
            <Input value="Medium" size="small" style={{ height: "41px" }} />
            <Button size="large" block icon={<ContainerOutlined />}>
              Difficulty
            </Button>
          </div>
        </div>
        <div className="footer_wrapper" style={{ marginBottom: "20px" }}>
          <Button
            block
            size="large"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              height: "50px",
            }}
          >
            Solve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
