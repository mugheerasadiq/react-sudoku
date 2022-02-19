import React from "react";

// Antd Imports
import { CheckOutlined, ContainerOutlined } from "@ant-design/icons";
import { Button, notification, Input } from "antd";
import { SmileOutlined, CloseOutlined } from "@ant-design/icons";

// API Call
import { solveBoard, validateBoard } from "../../services/game.services";
import { encodeParams } from "../../utils/encoder";

type Props = {
  setLoader: (value: Boolean) => void,
  setGrid: (value: any) => void,
  setHasWon: (value: Boolean) => void,
  hasWon: Boolean,
  grid: any,
  level: string
}

const Footer = ({ setLoader, grid, setGrid, level, setHasWon, hasWon }: Props) : JSX.Element => {
  const onValidate = () : void => {
    try {
      setLoader(true);
      let encodedBoard = encodeParams({ board: grid });
      validateBoard(encodedBoard)
        .then((data) => {
          setLoader(false);
          if (data.status === "solved") {
            notification.open({
              message: "Success",
              description: "Congratulations. Your solution is correct!",
              icon: <SmileOutlined style={{ color: "#4CAF50" }} />,
            });
            setHasWon(true);
            setTimeout(() => {
              setHasWon(false);
            }, 10000);
          } else {
            notification.open({
              message: "Failed",
              description: "Sorry. Your solution is incorrect!",
              icon: <CloseOutlined style={{ color: "red" }} />,
            });
          }
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

  const onSolve = () : void => {
    try {
      setLoader(true);
      const encodedBoard = encodeParams({ board: grid });
      solveBoard(encodedBoard)
        .then((data) => {
          setGrid(data.solution);
          setLoader(false);
          if (data.status === "solved") {
            notification.open({
              message: "Success",
              description: "Congratulations. The solution has found!",
              icon: <SmileOutlined style={{ color: "#4CAF50" }} />,
            });
            setHasWon(true);
            setTimeout(() => {
              setHasWon(false);
            }, 10000);
          }
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
          <Input
            value={hasWon ? "Solved" : "Unsolved"}
            size="small"
            style={{ height: "41px" }}
          />
        </div>
        <div className="footer_btn">
          <Input
            value={level}
            size="small"
            style={{ height: "41px", textTransform: "capitalize" }}
          />
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
