import React from "react";

import logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="header_container">
      <h1
        style={{ color: "cadetblue", fontWeight: "bolder", fontSize: "42px" }}
      >
        suGOku
      </h1>
      <img src={logo} width={150} height={150} />
    </div>
  );
};

export default Header;
