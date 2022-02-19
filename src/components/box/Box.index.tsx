import React from "react";
import { BoxColor } from "../../utils/color";


const getBoxColor = (row: any , col: any) : any => {
  let rowGroup : number = row - (row % 3); // uppermost row index of the box
  let colGroup : number = (col - (col % 3)) * 10; // leftmost col index of the box * 10

  let index : any = rowGroup + colGroup;
  const BoxColorTemp: any = {...BoxColor}
  return BoxColorTemp[index];
};

type Props = {
  row: number,
  col: number,
  value: any,
  onChange: (value: any) => void
}

const Box = ({ row, col, value, onChange }: Props): JSX.Element => {
  return (
    <td>
      <input
        name={`${row},${col}`}
        className="box"
        style={{
          backgroundColor: getBoxColor(row, col) ,
        }}
        value={value?.toString()}
        onChange={onChange}
      />
    </td>
  );
};

export default Box;
