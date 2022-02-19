import React from "react";
import renderer from "react-test-renderer";

import Box from "./Box.index";

it("All props are passed", () => {
  const tree = renderer
    .create(
      <Box row={1} col={1} value={1} onChange={() => console.log("test")} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("No value is passed", () => {
  const tree = renderer.create(<Box />).toJSON();
  expect(tree).toMatchSnapshot();
});
