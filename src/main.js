import React from "react";
import Grid from "./components/grid/Grid.index";

const gridState = [
  [8, 0, 0, 4, 0, 6, 0, 0, 7],
  [0, 0, 0, 0, 0, 0, 4, 0, 0],
  [0, 1, 0, 0, 0, 0, 6, 5, 0],
  [5, 0, 9, 0, 3, 0, 7, 8, 0],
  [0, 0, 0, 0, 7, 0, 0, 0, 0],
  [0, 4, 8, 0, 2, 0, 1, 0, 3],
  [0, 5, 2, 0, 0, 0, 0, 9, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 9, 0, 2, 0, 0, 5],
];

const Main = () => {
  return (
    <div className="container">
      <Grid grid={gridState} onChange={(value) => console.log(value)} />
    </div>
  );
};

export default Main;
