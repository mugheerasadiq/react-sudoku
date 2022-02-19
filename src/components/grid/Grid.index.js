import React, { useEffect, useState } from "react";
import Box from "../box/Box.index";

import { getBoard } from "../../services/game.services";

const Grid = ({ grid, setLoader, setGrid, level }) => {
  const fetchGrid = () => {
    try {
      setLoader(true);
      getBoard(level)
        .then((data) => {
          setGrid(data);
          setLoader(false);
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

  useEffect(() => {
    fetchGrid();
  }, []);

  const onValueChange = (event) => {
    // rowCol[0] is a row and rowCol[1] is a col
    let rowCol = event.target.name.split(",");

    const value = Number(event.target.value);

    let tempGrid = [...grid];

    tempGrid[rowCol[0]][rowCol[1]] = value;
    setGrid(tempGrid);
  };

  return (
    <table>
      <tbody>
        {grid.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map((colValue, colIndex) => {
                return (
                  <Box
                    key={colIndex}
                    row={rowIndex}
                    col={colIndex}
                    value={colValue !== 0 ? colValue : ""}
                    onChange={onValueChange}
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
