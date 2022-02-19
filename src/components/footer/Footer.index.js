import React from "react";
import { CheckOutlined, ContainerOutlined } from "@ant-design/icons";
import { Button, notification, Input } from "antd";
import { SmileOutlined } from "@ant-design/icons";

import { solveBoard, validateBoard } from "../../services/game.services";
import { encodeParams, encodeBoard } from "../../utils/encoder";

const Footer = ({ setLoader, grid, setGrid }) => {
  const onValidate = () => {
    try {
      setLoader(true);
      let encodedBoard = encodeParams({ board: grid });
      validateBoard(encodedBoard)
        .then((data) => {
          setLoader(false);
          if (data.status === "solved")
            notification.open({
              message: "Success",
              description: "Congratulations. Your solution is correct!",
              icon: <SmileOutlined style={{ color: "#4CAF50" }} />,
            });
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

  const onSolve = () => {
    try {
      setLoader(true);
      const encodedBoard = encodeParams({ board: grid });
      solveBoard(encodedBoard)
        .then((data) => {
          setGrid(data.solution);
          setLoader(false);
          if (data.status === "solved")
            notification.open({
              message: "Success",
              description: "Congratulations. The solution has found!",
              icon: <SmileOutlined style={{ color: "#4CAF50" }} />,
            });
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

  return (
    <div className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_btn">
          <Button
            size="large"
            block
            icon={<CheckOutlined />}
            onClick={onValidate}
          >
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
          onClick={onSolve}
        >
          Solve
        </Button>
      </div>
    </div>
  );
};

export default Footer;
