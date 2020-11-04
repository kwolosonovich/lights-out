import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

describe("render board", () => {
  // smoke test
  it("renders without crashing", () => {
    render(<Board />);
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Board />);
    expect(asFragment()).toMatchSnapshot();
  });
});
