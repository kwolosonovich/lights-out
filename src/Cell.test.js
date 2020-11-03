import React from "react";
import { getAllByAltText, render } from "@testing-library/react";
import Cell from './Cell'


describe("<Cell /> rendering", function() {
  let container;

    beforeEach(function () {
        // add a TR to the document created by the test
        // to avoid warnings in the test output
        // about appending a TD to a DIV
        let tr = document.createElement("tr");
        container = document.body.appendChild(tr);
    })

    // smoke test
    it("renders without crashing", () => {
        render(<Cell />, {container});
    });

});


// it(`renders 'Cell on' when cell light is 'on'`, () => {
//     const { asFragment } = render(<Cell />);
//     expect(asFragment()).toMatchSnapshot()
// })

// it("handles button clicks", () => {
//     const {getByAltText} = render(<Cell />)
//     const td = getByAltText("select") 

//     fireEvent.click(getByAltText("select"))

//     expect(td).toHaveAttribute("alt", "select");
// })

// it("handles button clicks", () => {
//     const selectOnclick = getAllByAltText("select")
//     expect(selectOnclick).toHaveClass("role", "button");
// })