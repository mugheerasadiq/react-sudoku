import React from "react";
import { BoxColor } from "./color";

const getBoxColor = (row, col) => {
  let rowGroup = row - (row % 3); // uppermost row index of the box
  let colGroup = (col - (col % 3)) * 10; // leftmost col index of the box * 10

  console.log(rowGroup, colGroup, rowGroup + colGroup);
  /*
		r\c| 0   30   60
		----------------
		 0 | 0   30   60
		 3 | 3   33   63
		 6 | 5   36   66
	*/
  return BoxColor[rowGroup + colGroup];
};

const Box = ({ row, col, value, onChange, ...rest }) => {
  return (
    <td>
      <input
        style={{ backgroundColor: getBoxColor(row, col) }}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </td>
  );
};

export default Box;
