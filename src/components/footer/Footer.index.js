import React from "react";
import { CheckOutlined, ContainerOutlined } from "@ant-design/icons";
import { Button, Typography, Input } from "antd";

const Footer = () => {
  return (
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
  );
};

export default Footer;
