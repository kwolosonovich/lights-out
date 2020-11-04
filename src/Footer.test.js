import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

// smoke test
it("renders without crashing", () => {
  render(<Footer />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
