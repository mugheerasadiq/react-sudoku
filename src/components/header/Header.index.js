import React from "react";

import logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="header_container">
      <h1 style={{ color: "cadetblue", fontWeight: "bolder" }}>suGOku</h1>
      <img src={logo} width={100} height={100} />
    </div>
  );
};

export default Header;
