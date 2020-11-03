import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

// smoke test
it("renders without crashing", () => {
  render(<Home />);
});
