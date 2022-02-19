import React from "react";
import renderer from "react-test-renderer";

import DifficultyLevel from "./Difficulty_level.index";

it("All props are passed", () => {
  const tree = renderer
    .create(<DifficultyLevel setLoader={() => {}} setGrid={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
