import React from "react";
import { BoxColor } from "./color";

const getBoxColor = (index) => {
  return BoxColor[index];
};

const Box = ({ index, value, onChange, ...rest }) => {
  return (
    <td>
      <input
        style={{ backgroundColor: getBoxColor(index) }}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </td>
  );
};

export default Box;
