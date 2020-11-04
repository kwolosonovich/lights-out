import React from "react";
import { getAllByAltText, render } from "@testing-library/react";
import Cell from './Cell'


describe("<Cell /> rendering", function() {
  let container;

    beforeEach(function () {
        let tr = document.createElement("tr");
        container = document.body.appendChild(tr);
    })

    // smoke test
    it("renders without crashing", () => {
        render(<Cell />, {container});
    });
});