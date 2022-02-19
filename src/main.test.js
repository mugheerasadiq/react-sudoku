import React from "react";
import renderer from "react-test-renderer";

import Main from "./main";

it("All props are passed", () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
});
