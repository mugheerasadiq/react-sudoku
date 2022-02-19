import React from "react";
import renderer from "react-test-renderer";

import Header from "./Header.index";

it("All props are passed", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
