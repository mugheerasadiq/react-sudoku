import React from "react";
import { BoxColor } from "./color";

const getBoxColor = (row, col) => {
  let rowGroup = row - (row % 3); // uppermost row index of the box
  let colGroup = (col - (col % 3)) * 10; // leftmost col index of the box * 10
  return BoxColor[rowGroup + colGroup];
};

const Box = ({ row, col, value, onChange, ...rest }) => {
  return (
    <td>
      <input
        name={`${row},${col}`}
        style={{
          backgroundColor: getBoxColor(row, col),
          fontSize: "3em",
          fontWeight: "150",
        }}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </td>
  );
};

export default Box;
