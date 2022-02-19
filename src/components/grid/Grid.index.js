import React from "react";
import Box from "../box/Box.index";

const Grid = ({ grid, onChange }) => {
  return (
    <table>
      <tbody>
        {grid.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map((colValue, colIndex) => {
                return (
                  <Box
                    row={rowIndex}
                    col={colIndex}
                    value={colValue}
                    onChange={onChange}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Grid;
