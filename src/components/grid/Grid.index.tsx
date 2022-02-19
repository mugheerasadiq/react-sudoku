import React, { useEffect, useState } from "react";
import Box from "../box/Box.index";

// API Call
import { getBoard } from "../../services/game.services";

type Props = {
  setLoader: (value: Boolean) => void,
  setGrid: (value: any) => void,
  grid: any,
  level: string
}

const Grid = ({ grid, setLoader, setGrid, level }: Props) : JSX.Element => {
  const fetchGrid = () : void => {
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

  const onValueChange = (event: any) : void => {
    // rowCol[0] is a row and rowCol[1] is a col
    let rowCol = event.target.name.split(",");

    const value = Number(event.target.value);

    let tempGrid = [...grid];

    tempGrid[rowCol[0]][rowCol[1]] = value;
    setGrid(tempGrid);
  };

  return (
    <div className="table_wrapper">
      <table>
        <tbody>
          {grid.map((row: any, rowIndex: number) => {
            return (
              <tr key={rowIndex}>
                {row.map((colValue: number, colIndex: number) => {
                  return (
                    <Box
                      key={colIndex}
                      row={rowIndex}
                      col={colIndex}
                      value={colValue !== 0 ? colValue : ''}
                      onChange={onValueChange}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
