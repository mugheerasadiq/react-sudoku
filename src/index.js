import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Main from "./main";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
