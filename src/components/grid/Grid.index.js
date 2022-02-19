import React, { useEffect, useState } from "react";
import Box from "../box/Box.index";

import { getBoard } from "../../services/game.services";

const Grid = ({ onChange, grid, setLoader, setGrid }) => {
  const fetchGrid = () => {
    try {
      setLoader(true);
      getBoard("easy")
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
                    value={colValue !== 0 ? colValue : ""}
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
